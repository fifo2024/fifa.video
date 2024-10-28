import dayjs from "dayjs";

const type = "美洲杯";
const typeEn = "america-cup";
const year = 2024;
const getUrl = (matchId) => `/${typeEn}/${year}/${matchId}`; // "/america-cup/2024/2024062108001",

const _AMERICA_CUP_2024_LIST = [
    {
        homeTeam: "阿根廷",
        guestTeam: "加拿大",
        time: "2024-06-21 08:00",
    },
    {
        homeTeam: "秘鲁",
        guestTeam: "智利",
        time: "2024-06-22 08:00",
    },
    {
        homeTeam: "厄瓜多尔",
        guestTeam: "委内瑞拉",
        time: "2024-06-23 06:00",
    },
    {
        homeTeam: "墨西哥",
        guestTeam: "牙买加",
        time: "2024-06-23 09:00",
    },
    {
        homeTeam: "美国",
        guestTeam: "玻利维亚",
        time: "2024-06-24 06:00",
    },
    {
        homeTeam: "乌拉圭",
        guestTeam: "巴拿马",
        time: "2024-06-24 09:00",
    },
    {
        homeTeam: "哥伦比亚",
        guestTeam: "巴拉圭",
        time: "2024-06-25 06:00",
    },
    {
        homeTeam: "巴西",
        guestTeam: "哥斯达黎加",
        time: "2024-06-25 09:00",
    },
    {
        homeTeam: "秘鲁",
        guestTeam: "加拿大",
        time: "2024-06-26 06:00",
    },
    {
        homeTeam: "智利",
        guestTeam: "阿根廷",
        time: "2024-06-26 09:00",
    },
    {
        homeTeam: "厄瓜多尔",
        guestTeam: "牙买加",
        time: "2024-06-27 06:00",
    },
    {
        homeTeam: "委内瑞拉",
        guestTeam: "墨西哥",
        time: "2024-06-27 09:00",
    },
    {
        homeTeam: "巴拿马",
        guestTeam: "美国",
        time: "2024-06-28 06:00",
    },
    {
        homeTeam: "乌拉圭",
        guestTeam: "玻利维亚",
        time: "2024-06-28 09:00",
    },
    {
        homeTeam: "哥伦比亚",
        guestTeam: "哥斯达黎加",
        time: "2024-06-29 06:00",
    },
    {
        homeTeam: "巴拉圭",
        guestTeam: "巴西",
        time: "2024-06-29 09:00",
    },
    {
        homeTeam: "阿根廷",
        guestTeam: "秘鲁",
        time: "2024-06-30 08:00",
    },
    {
        homeTeam: "加拿大",
        guestTeam: "智利",
        time: "2024-06-30 08:00",
    },
    {
        homeTeam: "牙买加",
        guestTeam: "委内瑞拉",
        time: "2024-07-01 08:00",
    },
    {
        homeTeam: "墨西哥",
        guestTeam: "厄瓜多尔",
        time: "2024-07-01 08:00",
    },
    {
        homeTeam: "美国",
        guestTeam: "乌拉圭",
        time: "2024-07-02 09:00",
    },
    {
        homeTeam: "玻利维亚",
        guestTeam: "巴拿马",
        time: "2024-07-02 09:00",
    },
    {
        homeTeam: "巴西",
        guestTeam: "哥伦比亚",
        time: "2024-07-03 09:00",
    },
    {
        homeTeam: "哥斯达黎加",
        guestTeam: "巴拉圭",
        time: "2024-07-03 09:00",
    },
    {
        homeTeam: "阿根廷",
        guestTeam: "厄瓜多尔",
        time: "2024-07-05 09:00",
    },
    {
        homeTeam: "委内瑞拉",
        guestTeam: "加拿大",
        time: "2024-07-06 09:00",
    },
    {
        homeTeam: "哥伦比亚",
        guestTeam: "巴拿马",
        time: "2024-07-07 06:00",
    },
    {
        homeTeam: "乌拉圭",
        guestTeam: "巴西",
        time: "2024-07-07 09:00",
    },
    {
        homeTeam: "阿根廷",
        guestTeam: "加拿大",
        time: "2024-07-10 08:00",
    },
    {
        homeTeam: "待定",
        guestTeam: "哥伦比亚",
        time: "2024-07-11 08:00",
    },
    {
        homeTeam: "待定",
        guestTeam: "待定",
        time: "2024-07-14 08:00",
    },
    {
        homeTeam: "待定",
        guestTeam: "待定",
        time: "2024-07-15 08:00",
    },
];

export const AMERICA_CUP_2024_LIST = _AMERICA_CUP_2024_LIST.map(
    (item, index) => {
        const value = dayjs(item.time).format("YYYYMMDDHHmm") + index;
        return {
            ...item,
            value,
            type,
            url: getUrl(value),
        };
    }
);
