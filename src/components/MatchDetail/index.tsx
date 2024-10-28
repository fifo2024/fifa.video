import { CSSProperties, FC } from "react";
import { Flex } from "antd";
import { Card } from "src/components";
import styles from "./style.module.less";

export interface MatchDetailProps {
    time: string;
    type: string;
    homeTeam: string;
    guestTeam: string;
    style?: CSSProperties;
}

const MatchDetail: FC<MatchDetailProps> = ({
    time,
    type,
    homeTeam,
    guestTeam,
    style = {},
}) => {
    return (
        <Card
            title={
                <div className={styles.detailTitle}>
                    {homeTeam}vs{guestTeam}比赛详情
                </div>
            }
            style={style}
        >
            <div className={styles.detail}>
                <Flex gap="8px 0" wrap vertical className={styles.signal}>
                    <div>
                        【赛前分析】免费{homeTeam}vs{guestTeam}
                        在线直播观看，视频直播，文字直播，录像回放，视频剪辑。
                    </div>
                    <div>【赛事分类】{type}</div>
                    <div>【开赛时间】{time}</div>
                    <div>
                        【对阵双方】{homeTeam}vs{guestTeam}
                    </div>
                    <div style={{ lineHeight: "20px" }}>
                        【赛事描述】{time}，FIFA.Video免费提供{type}【{homeTeam}
                        vs{guestTeam}
                        】比赛，免费直播比赛高清无插件在线观看视频直播
                        ，赛后准时更新本场比赛 {homeTeam}vs{guestTeam}
                        赛前情报、直播录像查看↓。
                    </div>
                </Flex>
            </div>
        </Card>
    );
};

export default MatchDetail;
