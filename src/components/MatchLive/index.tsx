import { FC } from "react";
import { Flex, Tag } from "antd";
import { HiOutlineTv } from "react-icons/hi2";
import { MatchStatus, MatchStatusMap } from "src/types";
import { Card } from "src/components";
import footballBg from "src/assets/football_bg2.jpg";
import styles from "./style.module.less";

export interface Signal {
    name: string;
    url: string;
}

export interface MatchLiveProps {
    time: string;
    type: string;
    homeTeam: string;
    guestTeam: string;
    status: MatchStatus;
    signals: Signal[];
}

const MatchLive: FC<MatchLiveProps> = ({
    time,
    type,
    homeTeam,
    guestTeam,
    status,
    signals = [],
}) => {
    const signal: any = signals[0] || {};
    return (
        <Card
            title={`${time} ${type} ${homeTeam}vs${guestTeam} 高清直播`}
            styles={{ titleStyle: { justifyContent: "center" } }}
        >
            <div className={styles.live}>
                <div
                    className={styles.topic}
                    style={{ backgroundImage: `url(${footballBg})` }}
                >
                    <a
                        href={signal.url}
                        target="_blank"
                        style={{ width: "100%" }}
                    >
                        <div className={styles.topicName}>
                            <div className={styles.column}>{homeTeam}</div>
                            <div className={styles.column}>
                                <span>{MatchStatusMap[status]}</span>
                                <span>
                                    {signal.label}
                                    <span>({type})</span>
                                </span>
                            </div>
                            <div className={styles.column}>{guestTeam}</div>
                        </div>
                    </a>
                </div>
                <div className={styles.title}>
                    <HiOutlineTv />
                    <span style={{ padding: "0 8px", fontSize: "16px" }}>
                        信号源
                    </span>
                </div>
                <Flex gap="4px 0" wrap className={styles.signal}>
                    {signals.map((item: any, index) => (
                        <Tag key={index} color="processing">
                            <a
                                href={item.url}
                                target="_blank"
                                style={{ color: "rgb(16, 142, 233)" }}
                            >
                                {item.label}
                            </a>
                        </Tag>
                    ))}
                </Flex>
            </div>
        </Card>
    );
};

export default MatchLive;
