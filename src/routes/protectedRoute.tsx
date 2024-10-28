import { Navigate } from "react-router-dom";
import { ReactNode } from "react";

export default function ProtectedRoute({ children }: { children: ReactNode }) {
    const isLogged = false; // 获取登录状态，这里假设为 false
    if (!isLogged) return <Navigate to="/login" />; // 如果未登录，跳转到首页
    return children; // 如果已登录，渲染子组件
}
