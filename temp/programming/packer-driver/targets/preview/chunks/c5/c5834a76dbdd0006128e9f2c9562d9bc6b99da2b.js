System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, instantiate, math, Prefab, EventManager, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, ToolManage;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      math = _cc.math;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e4c35AqiyhNYqurYe41ZSUw", "ToolManage", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'instantiate', 'math', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToolManage", ToolManage = (_dec = ccclass('ToolManage'), _dec2 = property({
        type: CCFloat,
        tooltip: '双发子弹道具生成频率（秒）'
      }), _dec3 = property({
        type: Prefab,
        tooltip: '双发子弹道具预载体'
      }), _dec4 = property({
        type: CCFloat,
        tooltip: '炸弹道具生成频率（秒）'
      }), _dec5 = property({
        type: Prefab,
        tooltip: '炸弹道具预载体'
      }), _dec(_class = (_class2 = class ToolManage extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "toolDoubleTime", _descriptor, this);

          _initializerDefineProperty(this, "toolDoublePrefab", _descriptor2, this);

          _initializerDefineProperty(this, "toolBombTime", _descriptor3, this);

          _initializerDefineProperty(this, "toolBombPrefab", _descriptor4, this);

          this.isGameOver = false;
        }

        start() {
          // 监听游戏结束事件
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('GameOver', this.gameOver, this); // 生成双发子弹道具

          this.schedule(this.toolDrop1, this.toolDoubleTime); // 生成炸弹道具

          this.schedule(this.toolDrop2, this.toolBombTime);
        }

        onDestroy() {
          // 移除游戏结束事件监听
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('GameOver', this.gameOver, this); // 移除所有道具

          this.unschedule(this.toolDrop1);
          this.unschedule(this.toolDrop2);
        }

        update(deltaTime) {} // 生成双发子弹道具


        toolDrop1() {
          this.createTool(this.toolDoublePrefab, -320, 320, 820);
        } // 生成炸弹道具


        toolDrop2() {
          this.createTool(this.toolBombPrefab, -320, 320, 820);
        } // 生成道具


        createTool(prefab, min, max, y) {
          var randomX = math.randomRangeInt(min, max);
          var tool = instantiate(prefab); // // 添加到父节点

          this.node.addChild(tool); // // 设置世界坐标

          tool.setPosition(randomX, y, 0);
        }

        gameOver() {
          this.isGameOver = true;
          this.unschedule(this.toolDrop1);
          this.unschedule(this.toolDrop2);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toolDoubleTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 1;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toolDoublePrefab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "toolBombTime", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "toolBombPrefab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5834a76dbdd0006128e9f2c9562d9bc6b99da2b.js.map