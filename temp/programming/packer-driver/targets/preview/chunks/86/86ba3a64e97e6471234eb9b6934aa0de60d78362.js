System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioSource, Component, Node, UITransform, EventManager, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, Bg;

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
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72e767cRhxIE7U8XcMVSuyd", "Bg", undefined);

      __checkObsolete__(['_decorator', 'AudioSource', 'Component', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("Bg", Bg = (_dec = ccclass('Bg'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class Bg extends Component {
        constructor() {
          super(...arguments);

          // 背景节点1
          _initializerDefineProperty(this, "bg1", _descriptor, this);

          // 背景节点2
          _initializerDefineProperty(this, "bg2", _descriptor2, this);

          // 运动速度
          _initializerDefineProperty(this, "speed", _descriptor3, this);

          // 背景音效
          this.bgSound = null;
          // 背景父节点高度
          this.bgParentHeight = 0;
          this.gameOver = false;
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on("GameOver", this.onGameOver, this); // 获取背景音效组件

          this.bgSound = this.getComponent(AudioSource);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off("GameOver", this.onGameOver, this);
        }

        start() {
          this.bgParentHeight = this.node.getComponent(UITransform).height;
          this.bg1.y = 0;
          this.bg2.y = this.bgParentHeight;
        }

        update(deltaTime) {
          if (this.gameOver) return;
          this.bg1.y -= this.speed * deltaTime;
          this.bg2.y -= this.speed * deltaTime; // 背景循环

          if (this.bg1.position.y <= -this.bgParentHeight) {
            this.bg1.y = this.bg2.y + this.bgParentHeight;
          }

          if (this.bg2.position.y <= -this.bgParentHeight) {
            this.bg2.y = this.bg1.y + this.bgParentHeight;
          }
        }

        onGameOver() {
          this.gameOver = true;
          this.bgSound.stop();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bg1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bg2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "speed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 100;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=86ba3a64e97e6471234eb9b6934aa0de60d78362.js.map