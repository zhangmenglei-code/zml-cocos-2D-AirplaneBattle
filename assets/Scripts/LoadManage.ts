import { _decorator, Component, director, ProgressBar, Label } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('LoadManage')
export class LoadManage extends Component {

    @property(ProgressBar)
    progressBar: ProgressBar = null;

    @property(Label)
    progressLabel: Label = null;   // 可选，显示百分比

    async onLoad() {
        await this.preloadAllScenes();
        // 预加载完成后，跳转到首页（此时瞬间切换）
        director.loadScene('Scene-home');
    }

    /**
     * 预加载所有场景，并更新进度条
     */
    preloadAllScenes(): Promise<void> {
        return new Promise((resolve) => {
            const sceneNames = ['Scene-home', 'Scene-game'];   // 需要预加载的场景列表
            const totalScenes = sceneNames.length;
            let completedScenes = 0;          // 已完成加载的场景数
            let overallProgress = 0;          // 总体进度 0~1

            // 如果场景列表为空，直接返回
            if (totalScenes === 0) {
                resolve();
                return;
            }

            // 逐个预加载场景
            for (const name of sceneNames) {
                // director.preloadScene 第三个参数是完成回调，第二个参数是进度回调
                director.preloadScene(
                    name,
                    // 进度回调：每个场景内部的加载进度 (finished, total)
                    (finished: number, total: number) => {
                        // 当前场景的进度 = finished / total
                        const sceneProgress = total > 0 ? finished / total : 0;
                        // 总进度 = (已完成场景数 + 当前场景进度) / 总场景数
                        overallProgress = (completedScenes + sceneProgress) / totalScenes;
                        this.updateProgress(overallProgress);
                    },
                    // 完成回调：该场景加载完毕
                    (err: Error) => {
                        if (err) {
                            console.error(`预加载场景 ${name} 失败:`, err);
                        }
                        // 无论成功失败，都算完成一个场景
                        completedScenes++;
                        // 如果所有场景都已加载完成，则 resolve
                        if (completedScenes === totalScenes) {
                            // 确保进度为 100%
                            this.updateProgress(1);
                            resolve();
                        }
                    }
                );
            }
        });
    }

    updateProgress(progress: number) {
        const clamped = Math.min(progress, 1);
        if (this.progressBar) {
            this.progressBar.progress = clamped;
        }
        if (this.progressLabel) {
            this.progressLabel.string = `（${Math.floor(clamped * 100)}%）`;
        }
    }
}