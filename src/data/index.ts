import { convertMatchStatus } from "src/utils";
import { EUROPE_CUP_2024_LIST } from "./europe2024";
import { AMERICA_CUP_2024_LIST } from "./america2024";
import { EUROPE_CUP_LIVES } from "./lives";

export const EUROPE_CUP_LIST = {
    2024: EUROPE_CUP_2024_LIST.map((item) => ({
        ...item,
        status: convertMatchStatus(item.time),
        lives: EUROPE_CUP_LIVES,
    })),
};

export const AMERICA_CUP_LIST = {
    2024: AMERICA_CUP_2024_LIST.map((item) => ({
        ...item,
        status: convertMatchStatus(item.time),
        lives: EUROPE_CUP_LIVES,
    })),
};
