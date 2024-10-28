/**
 * 比赛状态枚举
 */
export enum MatchStatus {
    /**
     * 未开始
     */
    unStarted = "unStarted",
    /**
     * 进行中
     */
    inprogress = "inprogress",
    /**
     * 已完赛
     */
    finish = "finish",
    /**
     * 历史赛事
     */
    history = "history",
}

export const MatchStatusMap = {
    [MatchStatus.unStarted]: "即将开始",
    [MatchStatus.inprogress]: "正在直播",
    [MatchStatus.finish]: "赛事结束",
    [MatchStatus.history]: "历史赛事",
};
