System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCFloat, Component, instantiate, math, Prefab, EventManager, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, EnemyManage;

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

      _cclegacy._RF.push({}, "65e5fgMhRhM04bDwCxsqqc+", "EnemyManage", undefined);

      __checkObsolete__(['_decorator', 'CCFloat', 'Component', 'instantiate', 'math', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EnemyManage", EnemyManage = (_dec = ccclass('EnemyManage'), _dec2 = property(Prefab), _dec3 = property({
        type: CCFloat,
        tooltip: '敌人1生成速度'
      }), _dec4 = property(Prefab), _dec5 = property({
        type: CCFloat,
        tooltip: '敌人2生成速度'
      }), _dec6 = property(Prefab), _dec7 = property({
        type: CCFloat,
        tooltip: '敌人3生成速度'
      }), _dec(_class = (_class2 = class EnemyManage extends Component {
        constructor(...args) {
          super(...args);

          // 敌人1
          _initializerDefineProperty(this, "enemyPrefab1", _descriptor, this);

          _initializerDefineProperty(this, "enemy1CreatSpeed", _descriptor2, this);

          // 敌人2
          _initializerDefineProperty(this, "enemyPrefab2", _descriptor3, this);

          _initializerDefineProperty(this, "enemy2CreatSpeed", _descriptor4, this);

          // 敌人3
          _initializerDefineProperty(this, "enemyPrefab3", _descriptor5, this);

          _initializerDefineProperty(this, "enemy3CreatSpeed", _descriptor6, this);
        }

        onLoad() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).on('GameOver', this.onGameOver, this);
        }

        start() {
          this.schedule(this.createEnemy1, this.enemy1CreatSpeed);
          this.schedule(this.createEnemy2, this.enemy2CreatSpeed);
          this.schedule(this.createEnemy3, this.enemy3CreatSpeed);
        }

        update(deltaTime) {}

        onDestroy() {
          (_crd && EventManager === void 0 ? (_reportPossibleCrUseOfEventManager({
            error: Error()
          }), EventManager) : EventManager).off('GameOver', this.onGameOver, this);
          this.unschedule(this.createEnemy1);
          this.unschedule(this.createEnemy2);
          this.unschedule(this.createEnemy3);
        } // 生成敌人1


        createEnemy1() {
          this.createEnemy(this.enemyPrefab1, -335, 335, 700);
        } // 生成敌人2


        createEnemy2() {
          this.createEnemy(this.enemyPrefab2, -325, 325, 720);
        } // 生成敌人3


        createEnemy3() {
          this.createEnemy(this.enemyPrefab3, -277, 277, 820);
        } // 生成敌人


        createEnemy(prefab, min, max, y) {
          const randomX = math.randomRangeInt(min, max);
          let enemy = instantiate(prefab); // 添加到父节点

          this.node.addChild(enemy); // 设置世界坐标

          enemy.setPosition(randomX, y, 0);
        }

        onGameOver() {
          this.unschedule(this.createEnemy1);
          this.unschedule(this.createEnemy2);
          this.unschedule(this.createEnemy3);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "enemy1CreatSpeed", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 1;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab2", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "enemy2CreatSpeed", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 3;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "enemyPrefab3", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "enemy3CreatSpeed", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 5;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0fb797b9afdd5999549cff4205286cd89811d87d.js.map