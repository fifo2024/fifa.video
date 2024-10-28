import { CSSProperties, FC } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import classNames from "classnames";
import { MatchStatus } from "@/types";
import { VsMatch } from "@/components";

import styles from "./style.module.less";

export interface MatchTableProps {
    data: any[];
    title: string;
    style?: CSSProperties;
}

const MatchTable: FC<MatchTableProps> = ({ style = {}, title, data }) => {
    // const navigate = useNavigate();÷

    return (
        <div className={styles.match} style={style}>
            <div className={styles.title}>{title}</div>
            <div className={styles.vs}>
                {(data || []).map((item) => (
                    <Link
                        to={item.url}
                        key={item.value}
                        className={styles.item}
                    >
                        <span>{item.time}</span>
                        <span>{item.type}</span>
                        <div className={styles.team}>
                            <span style={{ textAlign: "right" }}>
                                {item.homeTeam}
                            </span>
                            <span style={{ textAlign: "center" }}>VS</span>
                            <span style={{ textAlign: "left" }}>
                                {item.guestTeam}
                            </span>
                        </div>
                        <Button
                            type="primary"
                            ghost={item.status === MatchStatus.unStarted}
                        >
                            {item.status === MatchStatus.unStarted
                                ? "即将开始"
                                : "正在直播"}
                        </Button>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default MatchTable;
