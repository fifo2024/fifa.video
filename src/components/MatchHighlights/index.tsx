import { FC, CSSProperties } from "react";
import { MatchVideo, Card } from "@/components";

import styles from "./style.module.less";

export interface MatchHighlightsProps {
    data: any[];
    title: string;
    style?: CSSProperties;
}

const MatchHighlights: FC<MatchHighlightsProps> = ({
    style = {},
    title,
    data,
}) => {
    // const navigate = useNavigate();÷

    return (
        <Card title={title} style={style}>
            <div className={styles.highlights}>
                {(data || []).map((item) => (
                    <MatchVideo
                        key={item.value}
                        {...{
                            matchId: item.value,
                            matchType: item.type,
                            matchTime: item.time,
                            homeTeam: item.homeTeam,
                            guestTeam: item.guestTeam,
                            videoUrl: item.videoUrl,
                            nextUrl: item.url,
                            poster: item.poster,
                        }}
                    />
                ))}
            </div>
        </Card>
    );
};

export default MatchHighlights;
