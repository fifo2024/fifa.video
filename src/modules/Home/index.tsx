// import { useNavigate } from "react-router-dom";
import classNames from "classnames";
import { MatchStatus } from "@/types";
import { MatchList, MatchTable, MatchHighlights } from "@/components";
import { EUROPE_CUP_LIST } from "@/data";

import styles from "./style.module.less";

const Home = () => {
    // const navigate = useNavigate();
    const EUROPE_CUP_2024_LIST = EUROPE_CUP_LIST[2024];

    return (
        <div className={styles.home}>
            <MatchTable
                {...{
                    title: "比赛直播",
                    data: EUROPE_CUP_2024_LIST.filter((item) =>
                        [
                            MatchStatus.unStarted,
                            MatchStatus.inprogress,
                        ].includes(item.status)
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            <MatchList
                {...{
                    title: "比赛回放",
                    data: EUROPE_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.finish].includes(item.status)
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            <MatchHighlights
                {...{
                    title: "比赛集锦",
                    data: EUROPE_CUP_2024_LIST.filter(
                        (item) =>
                            [MatchStatus.finish].includes(item.status) &&
                            !!item.videoUrl
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
            <MatchList
                {...{
                    title: "历史集锦",
                    data: EUROPE_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.history].includes(item.status)
                    ),
                }}
            />
        </div>
    );
};

export default Home;
