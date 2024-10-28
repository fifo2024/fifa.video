import { FC, CSSProperties } from "react";
// import { useNavigate } from "react-router-dom";
// import classNames from "classnames";
// import { MatchStatus } from "@/types";
import { MatchVs, Card } from "@/components";

import styles from "./style.module.less";

export interface MatchListProps {
    data: any[];
    title: string;
    style?: CSSProperties;
}

const MatchList: FC<MatchListProps> = ({ style = {}, title, data }) => {
    // const navigate = useNavigate();÷

    return (
        <Card title={title} style={style}>
            <div className={styles.vs}>
                {(data || []).map((item) => (
                    <MatchVs
                        key={item.value}
                        {...{
                            matchId: item.value,
                            matchType: item.type,
                            matchTime: item.time,
                            homeTeam: item.homeTeam,
                            guestTeam: item.guestTeam,
                            url: item.url,
                        }}
                    />
                ))}
            </div>
        </Card>
    );
};

export default MatchList;
