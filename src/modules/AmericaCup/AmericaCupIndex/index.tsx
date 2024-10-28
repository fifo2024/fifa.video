import { MatchStatus } from "@/types";
import { MatchTable, MatchList } from "@/components";
import { AMERICA_CUP_LIST } from "@/data";

const AMERICA_CUP_2024_LIST = AMERICA_CUP_LIST[2024];

const AmericaCupIndex = () => {
    return (
        <div>
            <MatchTable
                {...{
                    title: "比赛直播",
                    data: AMERICA_CUP_2024_LIST.filter((item) =>
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
                    data: AMERICA_CUP_2024_LIST.filter((item) =>
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
                    data: AMERICA_CUP_2024_LIST.filter((item) =>
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

export default AmericaCupIndex;
