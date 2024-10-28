import dayjs from "dayjs";
import { MatchStatus } from "src/types";

export const convertMatchStatus = (time: string) => {
    const dayTime = dayjs(time);
    let result = MatchStatus.unStarted;

    if (dayTime.isAfter(dayjs())) {
        result = MatchStatus.unStarted;
    } else if (
        dayTime.isBefore(dayjs()) &&
        dayTime.add(2.5, "hour").isAfter(dayjs())
    ) {
        result = MatchStatus.inprogress;
    } else if (
        dayTime.add(2.5, "hour").isBefore(dayjs()) &&
        dayTime.add(1, "year").isAfter(dayjs())
    ) {
        result = MatchStatus.finish;
    } else {
        result = MatchStatus.history;
    }
    if (time === "2024-06-22 21:00") {
        console.log(
            "1111",
            dayTime.isBefore(dayjs()),
            dayTime.add(2.5, "hour").isAfter(dayjs())
        );
        console.log(22, result);
    }
    return result;
};
