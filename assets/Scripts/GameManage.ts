import { _decorator, Component, director, Label, Node } from 'cc';
const { ccclass, property } = _decorator;
import { EventManager } from './EventManager';

@ccclass('GameManage')
export class GameManage extends Component {

    // 分数节点
    @property({type: Label, tooltip: '分数节点'})
    scoreNode: Label = null;
    // 暂停节点
    @property({type: Node, tooltip: '暂停节点'})
    pauseNode: Node = null;
    // 开始节点
    @property({type: Node, tooltip: '开始节点'})
    startNode: Node = null;

    // 暂停界面节点
    @property({type: Node, tooltip: '暂停界面节点'})
    pauseInterfaceNode: Node = null;

    // 游戏结束界面节点
    @property({type: Node, tooltip: '游戏结束界面节点'})
    gameEndNode: Node = null;
    // 游戏结束当前分数
    @property({type: Label, tooltip: '游戏结束当前分数节点'})
    gameEndScoreNode: Label = null;
    // 游戏结束最高分展示
    @property({type: Label, tooltip: '游戏结束最高分节点'})
    gameEndHighScoreNode: Label = null;

    // 总分数
    private score: number = 0;
    // 游戏是否暂停
    private isPause: boolean = false;

    // 监听分数更新事件
    protected onLoad(): void {
        EventManager.on('GameOver', this.gameOver, this);
        EventManager.on('updateScore', this.updateScore, this);
    }
    protected onDestroy(): void {
        EventManager.off('GameOver', this.gameOver, this);
        EventManager.off('updateScore', this.updateScore, this);
    }

    start() {
        // 初始化分数节点
        this.scoreNode.string = this.score.toString();
    }

    update(deltaTime: number) {
        
    }

    // 更新分数
    public updateScore(score: number) {
        this.score += score;
        this.scoreNode.string = this.score.toString();
    }

    // 游戏结束
    public gameOver() {
        this.gameEndNode.active = true
        this.gameEndScoreNode.string = this.score.toString()
        // 更新最高分节点
        const maxScore = localStorage.getItem('maxScore') ?? 0
        if (Number(maxScore) > 0) {
            if (this.score > Number(maxScore)) {
                localStorage.setItem('maxScore', this.score.toString())
                this.gameEndHighScoreNode.string = this.score.toString()
            } else {
                this.gameEndHighScoreNode.string = maxScore.toString()
            }
        } else {
            localStorage.setItem('maxScore', this.score.toString())
            this.gameEndHighScoreNode.string = this.score.toString()
        }
    }

    // 暂停
    public gamePause() {
        director.pause()
        this.isPause = true;
        this.pauseNode.active = false
        this.startNode.active = true
        EventManager.emit('gamePause', this.isPause)
        this.pauseInterfaceNode.active = true
        this.gameEndNode.active = false
    }
    // 继续
    public gameResume() {
        director.resume()
        this.isPause = false
        this.pauseNode.active = true
        this.startNode.active = false
        EventManager.emit('gamePause', this.isPause)
        this.pauseInterfaceNode.active = false
        this.gameEndNode.active = false
    }

    // 返回主界面、退出游戏
    public gameExit() {
        this.gameEndNode.active = false
        director.resume()
        director.loadScene("Scene-home");
    }

    // 重新开始
    public gameRestart() {
        this.gameResume()
        director.loadScene(director.getScene().name)
    }
}


