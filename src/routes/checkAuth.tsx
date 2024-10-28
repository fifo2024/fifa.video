import { useEffect } from "react";
import { matchRoutes, useLocation, useNavigate } from "react-router-dom";
import { routes } from "./index";

// meta 里的属性类型
interface metaType {
    auth?: boolean; // auth：是否需要路由守卫进行身份验证
}
// 扩展 react-router-dom 的 RouteObject 类型
declare module "react-router-dom" {
    interface IndexRouteObject {
        meta?: metaType;
    }
    interface NonIndexRouteObject {
        meta?: metaType;
    }
}

export default () => {
    const location = useLocation(); // 获取当前位置信息
    const nav = useNavigate(); // 获取路由跳转方法
    // 使用 useEffect 监听当前位置
    useEffect(() => {
        const matches = matchRoutes(routes, location); // 使用当前位置匹配的路由
        const user = sessionStorage.getItem("user");
        const isLogged = !!user; // 获取登录状态，这里假设为 false

        if (Array.isArray(matches)) {
            matches.forEach((match) => {
                // 如果 meta.auth 为 true，且未登录，则跳转到首页
                if (match.route.meta?.auth && !isLogged) {
                    nav("/login");
                }
            });
        }
    }, [location, nav]);
};
