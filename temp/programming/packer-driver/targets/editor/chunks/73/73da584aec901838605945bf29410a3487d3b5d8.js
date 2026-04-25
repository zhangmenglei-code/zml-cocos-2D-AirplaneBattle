System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Animation, Contact2DType, CCFloat, Collider2D, AudioSource, EventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, EnemyType, Enemy;

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
      Animation = _cc.Animation;
      Contact2DType = _cc.Contact2DType;
      CCFloat = _cc.CCFloat;
      Collider2D = _cc.Collider2D;
      AudioSource = _cc.AudioSource;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1cb42EefsJPlYTwktKAI5ch", "Enemy", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Animation', 'Contact2DType', 'CCFloat', 'Collider2D', 'AudioClip', 'AudioSource']);

      ({
        ccclass,
        property
      } = _decorator);

      EnemyType = /*#__PURE__*/function (EnemyType) {
        EnemyType[EnemyType["one"] = 1] = "one";
        EnemyType[EnemyType["two"] = 2] = "two";
        EnemyType[EnemyType["three"] = 3] = "three";
        return EnemyType;
      }(EnemyType || {});

      _export("Enemy", Enemy = (_dec = ccclass('Enemy'), _dec2 = property({
        type: CCFloat,
        tooltip: '敌人速度'
      }), _dec3 = property({
        type: CCFloat,
        tooltip: '敌人类型'
      }), _dec4 = property({
        type: CCFloat,
        tooltip: '敌人的血量'
      }), _dec5 = property({
        type: CCFloat,
        tooltip: '敌人分数'
      }), _dec6 = property({
        type: AudioSource,
        tooltip: '死亡音效'
      }), _dec7 = property({
        type: AudioSource,
        tooltip: '撞击音效'
      }), _dec(_class = (_class2 = class Enemy extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "enemySpeed", _descriptor, this);

          _initializerDefineProperty(this, "enemyType", _descriptor2, this);

          _initializerDefineProperty(this, "enemyHp", _descriptor3, this);

          _initializerDefineProperty(this, "enemyScore", _descriptor4, this);

          // 敌人动画组件
          this.enemyAnimation = null;
          // 是否死亡
          this.isDead = false;
          // 是否游戏结束
          this.gameOver = false;

          // 死亡音效
          _initializerDefineProperty(this, "dieSound", _descriptor5, this);

          // 撞击音效
          _initializerDefineProperty(this, "hitSound", _descriptor6, this);
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('GameOver', this.onGameOver, this); // 监听炸弹爆炸事件

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('onBoom', this.onBoomExplosion, this);
        }

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('GameOver', this.onGameOver, this); // 移除炸弹爆炸事件

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('onBoom', this.onBoomExplosion, this);
        }

        start() {
          // 获取动画组件
          this.enemyAnimation = this.getComponent(Animation); // 获取碰撞组件

          let collider = this.getComponent(Collider2D);

          if (collider) {
            collider.on(Contact2DType.BEGIN_CONTACT, this.beginContact, this);
          }
        }

        update(deltaTime) {
          // 敌人从上往下移动
          if (this.enemyHp > 0 && !this.isDead && !this.gameOver) {
            this.node.y -= this.enemySpeed * deltaTime; // 敌人到达底部，销毁

            if (this.enemyType === EnemyType.one && this.node.y < -675 || this.enemyType === EnemyType.two && this.node.y < -700 || this.enemyType === EnemyType.three && this.node.y < -772) {
              this.isDead = true;
              this.getComponent(Collider2D).enabled = false;
              this.node.destroy();
            }
          }
        } // 碰撞


        beginContact() {
          if (this.gameOver) return;
          this.enemyHp -= 1;

          if (this.enemyHp <= 0) {
            this.die();
          } else {
            var _this$enemyAnimation;

            // 子弹打到敌人，敌人还没死，播放撞击音效
            if (this.hitSound) {
              this.hitSound.play();
            } // 播放撞击动画


            if (((_this$enemyAnimation = this.enemyAnimation) == null || (_this$enemyAnimation = _this$enemyAnimation.clips) == null ? void 0 : _this$enemyAnimation.length) > 1) {
              this.enemyAnimation.play(this.enemyAnimation.clips[1].name);
            }
          }
        } // 敌人死亡处理 isSound 是否播放死亡音效


        die(isSound = true) {
          // 更新分数
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).emit('updateScore', this.enemyScore); // 敌人死亡，更新游戏状态

          this.isDead = true; // 禁用碰撞组件

          this.getComponent(Collider2D).enabled = false; // 播放死亡音效

          if (isSound) {
            this.dieSound.play();
          } // 播放死亡动画


          this.enemyAnimation.play(); // 动画播放结束，销毁敌人

          this.enemyAnimation.once(Animation.EventType.FINISHED, () => {
            this.node.destroy();
          }, this);
        }

        onGameOver() {
          this.gameOver = true;

          if (this.enemyAnimation) {
            this.enemyAnimation.stop();
          }
        } // 炸弹爆炸事件 无论什么敌人，都一击毙命


        onBoomExplosion() {
          this.die(false);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemySpeed", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 100;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemyType", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return EnemyType.one;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyHp", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemyScore", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "dieSound", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "hitSound", [_dec7], {
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
//# sourceMappingURL=73da584aec901838605945bf29410a3487d3b5d8.js.map