import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MatchStatus } from "src/types";
import { MatchLive, MatchDetail } from "src/components";
import { EUROPE_CUP_LIST } from "@/data";

const EuropeCupMatch = () => {
    const params = useParams();
    const [time, setTime] = useState("");
    const [type, setType] = useState("");
    const [homeTeam, setHomeTeam] = useState("");
    const [guestTeam, setGuestTeam] = useState("");
    const [status, setStatus] = useState(MatchStatus.unStarted);
    const [signals, setSignals] = useState<any[]>([]);
    console.log("EuropeCupMatch", params);

    useEffect(() => {
        const { matchId, year = "" } = params;
        const match = EUROPE_CUP_LIST[+year].filter(
            (item) => item.value === matchId
        )[0];
        if (match) {
            setTime(match.time);
            setType(match.type);
            setHomeTeam(match.homeTeam);
            setGuestTeam(match.guestTeam);
            setStatus(match.status);
            setSignals(match.lives || []);
        }
    }, [params]);

    return (
        <div>
            <MatchLive
                {...{
                    time,
                    type,
                    homeTeam,
                    guestTeam,
                    status,
                    signals,
                }}
            ></MatchLive>
            <MatchDetail
                {...{
                    time,
                    type,
                    homeTeam,
                    guestTeam,
                    style: { marginTop: "24px" },
                }}
            />
        </div>
    );
};

export default EuropeCupMatch;
