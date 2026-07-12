System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, _dec, _class, _crd, ccclass, property, StartGame;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b58868hzr1KGIMdY7o5B7nY", "StartGame", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("StartGame", StartGame = (_dec = ccclass('StartGame'), _dec(_class = class StartGame extends Component {
        start() {}

        update(deltaTime) {} // 开始游戏


        onStartGame() {
          // 切换场景游戏场景
          director.loadScene("Scene-game");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=46a4e5f301512cb2435907154a7645af9e3aaf2c.js.map