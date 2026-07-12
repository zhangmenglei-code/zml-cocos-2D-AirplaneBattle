System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _class2, _crd, ccclass, property, EventManager;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5edd6XclMtMK5b/6G37SWZa", "EventManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EventManager", EventManager = (_dec = ccclass('EventManager'), _dec(_class = (_class2 = class EventManager extends Component {
        static on(eventName, callback, target = null) {
          const boundCallback = callback.bind(target);
          const entry = {
            callback,
            target,
            boundCallback
          };

          if (!this.events.has(eventName)) {
            this.events.set(eventName, []);
          }

          this.events.get(eventName).push(entry);
        }

        static off(eventName, callback, target = null) {
          const entries = this.events.get(eventName);
          if (!entries) return;
          const index = entries.findIndex(entry => entry.callback === callback && entry.target === target);
          if (index !== -1) entries.splice(index, 1);
          if (entries.length === 0) this.events.delete(eventName);
        }

        static emit(eventName, ...args) {
          const entries = this.events.get(eventName);
          if (!entries) return; // 遍历副本，防止回调中修改数组

          [...entries].forEach(entry => {
            entry.boundCallback(...args);
          });
        }

      }, _class2.events = new Map(), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4e7f8b16eac3cd8afbe9d7219a27dcca1d6fdb70.js.map