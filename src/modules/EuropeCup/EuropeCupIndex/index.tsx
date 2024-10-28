import { MatchStatus } from "@/types";
import { MatchTable, MatchList } from "@/components";
import { EUROPE_CUP_LIST } from "@/data";

const EUROPE_CUP_2024_LIST = EUROPE_CUP_LIST[2024];

const EuropeCupIndex = () => {
    console.log("EuropeCupIndex");
    return (
        <div>
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
            <MatchList
                {...{
                    title: "历史集锦",
                    data: EUROPE_CUP_2024_LIST.filter((item) =>
                        [MatchStatus.history].includes(item.status)
                    ),
                    style: {
                        marginBottom: "16px",
                    },
                }}
            />
        </div>
    );
};

export default EuropeCupIndex;
