System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Collider2D, Component, Contact2DType, EventManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ToolType, Tool;

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
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2852n/h1JImaXveFFMI3i1", "Tool", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'CCFloat', 'Collider2D', 'Component', 'Contact2DType', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ToolType", ToolType = /*#__PURE__*/function (ToolType) {
        ToolType[ToolType["double"] = 0] = "double";
        ToolType[ToolType["bomb"] = 1] = "bomb";
        return ToolType;
      }({}));

      _export("Tool", Tool = (_dec = ccclass('Tool'), _dec2 = property({
        type: CCFloat,
        tooltip: '道具下落速度'
      }), _dec3 = property({
        type: CCFloat,
        tooltip: '道具类型'
      }), _dec(_class = (_class2 = class Tool extends Component {
        constructor(...args) {
          super(...args);

          // 下落速度
          _initializerDefineProperty(this, "toolSpeed", _descriptor, this);

          // 道具类型
          _initializerDefineProperty(this, "toolType", _descriptor2, this);

          this.isGameOver = false;
        }

        onLoad() {
          // 获取碰撞组件
          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.beginContact, this);
          }
        } // 碰撞检测


        beginContact() {
          this.node.destroy();
        }

        start() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('GameOver', this.gameOver, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('GameOver', this.gameOver, this);
        }

        update(deltaTime) {
          // 如果游戏结束，则不更新
          if (this.isGameOver) {
            return;
          } // 下落


          this.node.y -= this.toolSpeed * deltaTime; // 如果超出屏幕，则销毁

          if (this.node.y < -820) {
            this.node.destroy();
          }
        } // 游戏结束


        gameOver() {
          this.isGameOver = true;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "toolSpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "toolType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return ToolType.double;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e56d4abb1c9f4690ac7896c47546d919497460b5.js.map