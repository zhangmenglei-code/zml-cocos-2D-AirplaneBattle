System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, Label, Node, EventManager, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, GameManage;

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
      Component = _cc.Component;
      director = _cc.director;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "038a7N7YYpO44sScTVDZN88", "GameManage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManage", GameManage = (_dec = ccclass('GameManage'), _dec2 = property({
        type: Label,
        tooltip: '分数节点'
      }), _dec3 = property({
        type: Node,
        tooltip: '暂停节点'
      }), _dec4 = property({
        type: Node,
        tooltip: '开始节点'
      }), _dec(_class = (_class2 = class GameManage extends Component {
        constructor(...args) {
          super(...args);

          // 分数节点
          _initializerDefineProperty(this, "scoreNode", _descriptor, this);

          // 暂停节点
          _initializerDefineProperty(this, "pauseNode", _descriptor2, this);

          // 开始节点
          _initializerDefineProperty(this, "startNode", _descriptor3, this);

          // 总分数
          this.score = 0;
          // 游戏是否暂停
          this.isPause = false;
        }

        // 监听分数更新事件
        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('updateScore', this.updateScore, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('updateScore', this.updateScore, this);
        }

        start() {
          // 初始化分数节点
          this.scoreNode.string = this.score.toString();
        }

        update(deltaTime) {} // 更新分数


        updateScore(score) {
          this.score += score;
          this.scoreNode.string = this.score.toString();
        } // 暂停


        gamePause() {
          director.pause();
          this.isPause = true;
          this.pauseNode.active = false;
          this.startNode.active = true;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).emit('gamePause', this.isPause);
        } // 继续


        gameResume() {
          director.resume();
          this.isPause = false;
          this.pauseNode.active = true;
          this.startNode.active = false;
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).emit('gamePause', this.isPause);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scoreNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pauseNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "startNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ad74dbbe527995839203a54606d2219a56976ed.js.map