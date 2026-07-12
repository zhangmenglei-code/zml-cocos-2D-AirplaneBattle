System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AudioSource, CCFloat, CCInteger, Collider2D, Component, Contact2DType, Input, input, instantiate, Label, Node, Prefab, Vec3, EventManager, Tool, ToolType, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _crd, ccclass, property, BulletType, Player;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEventManager(extras) {
    _reporterNs.report("EventManager", "./EventManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTool(extras) {
    _reporterNs.report("Tool", "./Tool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolType(extras) {
    _reporterNs.report("ToolType", "./Tool", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AudioSource = _cc.AudioSource;
      CCFloat = _cc.CCFloat;
      CCInteger = _cc.CCInteger;
      Collider2D = _cc.Collider2D;
      Component = _cc.Component;
      Contact2DType = _cc.Contact2DType;
      Input = _cc.Input;
      input = _cc.input;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      EventManager = _unresolved_2.EventManager;
    }, function (_unresolved_3) {
      Tool = _unresolved_3.Tool;
      ToolType = _unresolved_3.ToolType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "25c4eJs4KxGh4Y+Fo7+R+s4", "Player", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AudioSource', 'CCFloat', 'CCInteger', 'Collider2D', 'Component', 'Contact2DType', 'director', 'EventTouch', 'Input', 'input', 'instantiate', 'IPhysics2DContact', 'Label', 'Node', 'Prefab', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator); // 子弹类型

      BulletType = /*#__PURE__*/function (BulletType) {
        BulletType[BulletType["one"] = 0] = "one";
        BulletType[BulletType["two"] = 1] = "two";
        return BulletType;
      }(BulletType || {});

      _export("Player", Player = (_dec = ccclass('Player'), _dec2 = property({
        type: CCFloat,
        tooltip: '子弹发射频率(快0 - 慢1)'
      }), _dec3 = property({
        type: Prefab,
        tooltip: '子弹1预制体'
      }), _dec4 = property({
        type: Prefab,
        tooltip: '子弹2预制体'
      }), _dec5 = property({
        type: Node,
        tooltip: '子弹父节点'
      }), _dec6 = property({
        type: Node,
        tooltip: '子弹类型1的世界坐标'
      }), _dec7 = property({
        type: Node,
        tooltip: '子弹类型2-1的世界坐标'
      }), _dec8 = property({
        type: Node,
        tooltip: '子弹类型2-2的世界坐标'
      }), _dec9 = property({
        type: Node,
        tooltip: '玩家体节点'
      }), _dec10 = property({
        type: CCInteger,
        tooltip: '子弹类型'
      }), _dec11 = property({
        type: AudioSource,
        tooltip: '子弹发射音效'
      }), _dec12 = property({
        type: AudioSource,
        tooltip: '死亡音效'
      }), _dec13 = property({
        type: CCFloat,
        tooltip: '无敌时间'
      }), _dec14 = property({
        type: CCInteger,
        tooltip: '玩家血量'
      }), _dec15 = property({
        type: Label,
        tooltip: '玩家血量节点'
      }), _dec16 = property({
        type: AudioSource,
        tooltip: '双发子弹道具音效'
      }), _dec17 = property({
        type: AudioSource,
        tooltip: '炸弹道具音效'
      }), _dec18 = property({
        type: CCFloat,
        tooltip: '双发子弹有效期'
      }), _dec19 = property({
        type: CCInteger,
        tooltip: '炸弹个数'
      }), _dec20 = property({
        type: Label,
        tooltip: '炸弹数量节点'
      }), _dec21 = property({
        type: AudioSource,
        tooltip: '炸弹音效'
      }), _dec(_class = (_class2 = class Player extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "bulletTime", _descriptor, this);

          _initializerDefineProperty(this, "bulletPrefab1", _descriptor2, this);

          _initializerDefineProperty(this, "bulletPrefab2", _descriptor3, this);

          _initializerDefineProperty(this, "bulletParent", _descriptor4, this);

          _initializerDefineProperty(this, "bulletWorldPosition1", _descriptor5, this);

          _initializerDefineProperty(this, "bulletWorldPosition2_1", _descriptor6, this);

          _initializerDefineProperty(this, "bulletWorldPosition2_2", _descriptor7, this);

          _initializerDefineProperty(this, "playerNode", _descriptor8, this);

          _initializerDefineProperty(this, "bulletType", _descriptor9, this);

          _initializerDefineProperty(this, "bulletSound", _descriptor10, this);

          _initializerDefineProperty(this, "dieSound", _descriptor11, this);

          _initializerDefineProperty(this, "invincibleTime", _descriptor12, this);

          _initializerDefineProperty(this, "playerHp", _descriptor13, this);

          _initializerDefineProperty(this, "playerHpNode", _descriptor14, this);

          _initializerDefineProperty(this, "toolDoubleSound", _descriptor15, this);

          _initializerDefineProperty(this, "toolBombSound", _descriptor16, this);

          _initializerDefineProperty(this, "toolDoubleTime", _descriptor17, this);

          _initializerDefineProperty(this, "boomCount", _descriptor18, this);

          _initializerDefineProperty(this, "boomCountNode", _descriptor19, this);

          _initializerDefineProperty(this, "bombSound", _descriptor20, this);

          // 碰撞组件
          this.collider = null;
          // 左右边界
          this.moveX = 350;
          // 上下边界
          this.moveY = 570;
          // 计时器
          this.bulletTimer = 0;
          // 子节点飞机动画
          this.childAnim = null;
          // 无敌时间
          this.invincibleTimer = 0;
          // 是否处在无敌状态
          this.isInvincible = false;
          // 道具倒计时
          this.toolTimer = 0;
          // 游戏是否暂停
          this.isPause = false;
          // 游戏是否结束
          this.isGameOver = false;
        }

        // 初始化
        onLoad() {
          // 监听触摸
          input.on(Input.EventType.TOUCH_MOVE, this.onTouchMove, this); // 获取子节点动画组件

          this.childAnim = this.playerNode.getComponent(Animation); // 初始化炸弹数量

          this.boomCountNode.string = this.boomCount.toString(); // 初始化玩家血量

          this.playerHpNode.string = this.playerHp.toString(); // 监听暂停事件

          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('gamePause', this.onGamePause, this);
        }

        onDestroy() {
          // 移除触摸
          input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this); // 移除碰撞

          var collider = this.getComponent(Collider2D);

          if (collider) {
            collider.off(Contact2DType.BEGIN_CONTACT, this.beginContact, this);
          } // 移除暂停事件


          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('gamePause', this.onGamePause, this);
        } // 触摸移动


        onTouchMove(event) {
          // 判断是否暂停
          if (this.isPause) return; // 移动玩家

          var position = this.node.position;
          var targetPosition = new Vec3(position.x + event.getDeltaX(), position.y + event.getDeltaY(), position.z); // 判断边界
          // 左边界

          if (targetPosition.x < -this.moveX) {
            targetPosition.x = -this.moveX;
          } // 右边界


          if (targetPosition.x > this.moveX) {
            targetPosition.x = this.moveX;
          } // 上边界


          if (targetPosition.y > this.moveY) {
            targetPosition.y = this.moveY;
          } // 下边界


          if (targetPosition.y < -this.moveY) {
            targetPosition.y = -this.moveY;
          }

          this.node.setPosition(targetPosition);
        }

        start() {
          // 碰撞组件
          this.collider = this.getComponent(Collider2D);

          if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.beginContact, this);
          }
        } // 碰撞


        beginContact(selfCollider, otherCollider, contact) {
          // 判断是否撞到道具
          var tool = otherCollider.getComponent(_crd && Tool === void 0 ? (_reportPossibleCrUseOfTool({
            error: Error()
          }), Tool) : Tool);

          if (tool) {
            this.hitTool(tool);
          }

          if (!tool && !this.isInvincible) {
            this.hitEnemy();
          }
        } // 碰撞到敌人


        hitEnemy() {
          this.playerHp -= 1;
          this.playerHpNode.string = this.playerHp.toString(); // 玩家死亡

          if (this.playerHp <= 0) {
            this.isGameOver = true; // 触摸停止

            input.off(Input.EventType.TOUCH_MOVE, this.onTouchMove, this); // 禁用碰撞组件

            this.collider.enabled = false; // 向外告知游戏结束

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).emit('GameOver'); // 播放死亡音效

            this.dieSound.play(); // 播放死亡动画

            this.childAnim.play('PlayerBody-hit'); // // 播放动画结束
            // this.childAnim.once(Animation.EventType.FINISHED, () => {
            //     this.node.destroy()
            // }, this)
          } else {
            // 只碰撞，但是没死，玩家闪烁，处于无敌状态
            this.isInvincible = true; // 播放无敌动画

            this.childAnim.play('PlayerBody-blink'); // 禁用碰撞组件（无敌状态不能拾取道具了）
            // this.collider.enabled = false;
            // 创建无敌时间计时器

            this.invincibleTimer = setInterval(() => {
              if (this.invincibleTimer) {
                clearInterval(this.invincibleTimer);
              } // 无敌时间到，播放普通动画


              this.childAnim.play('PlayerBody');
              this.isInvincible = false; // 启用碰撞组件

              this.collider.enabled = true;
            }, this.invincibleTime * 1000);
          }
        } // 碰撞到道具


        hitTool(tool) {
          switch (tool.toolType) {
            case (_crd && ToolType === void 0 ? (_reportPossibleCrUseOfToolType({
              error: Error()
            }), ToolType) : ToolType).bomb:
              // 播放道具音效
              this.toolBombSound.play(); // 炸弹数量增加

              this.boomCount += 1; // 更新炸弹数量节点

              this.boomCountNode.string = this.boomCount.toString();
              break;

            case (_crd && ToolType === void 0 ? (_reportPossibleCrUseOfToolType({
              error: Error()
            }), ToolType) : ToolType).double:
              // 如果时间内有道具，先清除，再开启新的倒计时
              if (this.toolTimer) {
                clearTimeout(this.toolTimer);
              } // 播放道具音效


              this.toolDoubleSound.play();
              this.bulletType = BulletType.two; // 时间限制

              this.toolTimer = setTimeout(() => {
                this.bulletType = BulletType.one;
              }, this.toolDoubleTime * 1000);
              break;
          }
        } // 点击炸弹


        clickBomb() {
          if (this.boomCount > 0 && !this.isPause && !this.isGameOver) {
            // 炸弹数量减少
            this.boomCount -= 1; // 更新炸弹数量节点

            this.boomCountNode.string = this.boomCount.toString(); // 播放炸弹音效

            this.bombSound.play(); // 通知所有敌人爆炸

            (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
              error: Error()
            }), EventManager) : EventManager).emit('onBoom');
          }
        }

        update(deltaTime) {
          if (this.isGameOver) {
            return;
          }

          switch (this.bulletType) {
            case BulletType.one:
              this.oneBullet(deltaTime);
              break;

            case BulletType.two:
              this.twoBullet(deltaTime);
              break;
          }
        } // 子弹类型1


        oneBullet(deltaTime) {
          this.bulletTimer += deltaTime;

          if (this.bulletTimer >= this.bulletTime) {
            this.bulletTimer = 0; // 创建子弹

            var bullet = instantiate(this.bulletPrefab1); // 添加到父节点

            this.bulletParent.addChild(bullet); // 设置世界坐标

            bullet.setWorldPosition(this.bulletWorldPosition1.worldPosition); // 播放子弹发射音效

            this.bulletSound.play();
          }
        } // 子弹类型2


        twoBullet(deltaTime) {
          this.bulletTimer += deltaTime;

          if (this.bulletTimer >= this.bulletTime) {
            this.bulletTimer = 0; // 创建子弹

            var bullet1 = instantiate(this.bulletPrefab2);
            var bullet2 = instantiate(this.bulletPrefab2); // 添加到父节点

            this.bulletParent.addChild(bullet1);
            this.bulletParent.addChild(bullet2); // 设置世界坐标

            bullet1.setWorldPosition(this.bulletWorldPosition2_1.worldPosition);
            bullet2.setWorldPosition(this.bulletWorldPosition2_2.worldPosition); // 播放子弹发射音效

            this.bulletSound.play();
          }
        } // 游戏是否暂停


        onGamePause(isPause) {
          this.isPause = isPause;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bulletTime", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.5;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab1", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "bulletPrefab2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bulletParent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "bulletWorldPosition1", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "bulletWorldPosition2_1", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "bulletWorldPosition2_2", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "playerNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "bulletType", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return BulletType.one;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "bulletSound", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "dieSound", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "invincibleTime", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "playerHp", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "playerHpNode", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "toolDoubleSound", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "toolBombSound", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "toolDoubleTime", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 5;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "boomCount", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "boomCountNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "bombSound", [_dec21], {
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
//# sourceMappingURL=e6e4917a0e64c512d41e4d6d43e6dd5ee6994c20.js.map