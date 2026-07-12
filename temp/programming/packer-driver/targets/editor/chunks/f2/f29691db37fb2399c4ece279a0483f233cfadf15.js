System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, ProgressBar, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LoadManage;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      ProgressBar = _cc.ProgressBar;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0be3f74K3tJV4iP1Y2GaDXp", "LoadManage", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'ProgressBar', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoadManage", LoadManage = (_dec = ccclass('LoadManage'), _dec2 = property(ProgressBar), _dec3 = property(Label), _dec(_class = (_class2 = class LoadManage extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "progressBar", _descriptor, this);

          _initializerDefineProperty(this, "progressLabel", _descriptor2, this);
        }

        // 可选，显示百分比
        async onLoad() {
          await this.preloadAllScenes(); // 预加载完成后，跳转到首页（此时瞬间切换）

          director.loadScene('Scene-home');
        }
        /**
         * 预加载所有场景，并更新进度条
         */


        preloadAllScenes() {
          return new Promise(resolve => {
            const sceneNames = ['Scene-home', 'Scene-game']; // 需要预加载的场景列表

            const totalScenes = sceneNames.length;
            let completedScenes = 0; // 已完成加载的场景数

            let overallProgress = 0; // 总体进度 0~1
            // 如果场景列表为空，直接返回

            if (totalScenes === 0) {
              resolve();
              return;
            } // 逐个预加载场景


            for (const name of sceneNames) {
              // director.preloadScene 第三个参数是完成回调，第二个参数是进度回调
              director.preloadScene(name, // 进度回调：每个场景内部的加载进度 (finished, total)
              (finished, total) => {
                // 当前场景的进度 = finished / total
                const sceneProgress = total > 0 ? finished / total : 0; // 总进度 = (已完成场景数 + 当前场景进度) / 总场景数

                overallProgress = (completedScenes + sceneProgress) / totalScenes;
                this.updateProgress(overallProgress);
              }, // 完成回调：该场景加载完毕
              err => {
                if (err) {
                  console.error(`预加载场景 ${name} 失败:`, err);
                } // 无论成功失败，都算完成一个场景


                completedScenes++; // 如果所有场景都已加载完成，则 resolve

                if (completedScenes === totalScenes) {
                  // 确保进度为 100%
                  this.updateProgress(1);
                  resolve();
                }
              });
            }
          });
        }

        updateProgress(progress) {
          const clamped = Math.min(progress, 1);

          if (this.progressBar) {
            this.progressBar.progress = clamped;
          }

          if (this.progressLabel) {
            this.progressLabel.string = `（${Math.floor(clamped * 100)}%）`;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "progressBar", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "progressLabel", [_dec3], {
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
//# sourceMappingURL=f29691db37fb2399c4ece279a0483f233cfadf15.js.map