import React from "react";
import { ConfigProvider, theme } from "antd";
// 由于 antd 组件的默认文案是英文，所以需要修改为中文
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import zhCN from "antd/locale/zh_CN";
import Router from "src/routes";
import "./App.less";
import "antd/dist/reset.css";

dayjs.locale("zh-cn");

(window as any).global = window;

function App() {
    return (
        <ConfigProvider
            locale={zhCN}
            button={{ autoInsertSpace: false }}
            theme={
                {
                    // 1. 单独使用暗色算法
                    // algorithm: theme.darkAlgorithm,
                    // 2. 组合使用暗色算法与紧凑算法
                    // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
                }
            }
        >
            <Router />
        </ConfigProvider>
    );
}

export default App;
