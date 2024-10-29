import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { Layout, Menu, theme } from "antd";
// import { IoIosFootball } from "react-icons/io";
import { Card } from "src/components";
import WorldCup from "src/assets/3901a01c4d76ef57fa641b37bf09d297.png";
import EuropeCup from "src/assets/5327c6d554c3a39099cdec6f558f9c72.png";
import AmericaCup from "src/assets/473399d6daa5d209f1e803083b7853b9.png";
import AfricaCup from "src/assets/africa.png";
import AsiaCup from "src/assets/994a2188cb333e4b485e6ff2976710e6.png";
import EPL from "src/assets/d3cd84441d4de605d84a14521ef56920.png";
import Liga from "src/assets/e6ee784bdd6af4694075206cd069387e.png";
import Lega from "src/assets/e481bc102a38742e6abfafd2f8873ea9.png";
import Ligue1 from "src/assets/d1569394723b61d7aa6b0aee530945fe.png";
import BL from "src/assets/0c6a25cd746e802296d9064b4504179d.png";
import UCL from "src/assets/ac05535bde17129cb598311242b3afba.png";
import ACL from "src/assets/acl.png";
import CSL from "src/assets/c5c201512031b5950e58c1f8ca04b47e.png";
import RSL from "src/assets/rsl.png";
import styles from "./style.module.less";

const { Header, Content, Sider, Footer } = Layout;
const items = [
    {
        key: "world-cup",
        label: "世界杯",
        img: WorldCup,
    },
    {
        key: "europe-cup",
        label: <Link to="/europe-cup">欧洲杯</Link>,
        img: EuropeCup,
    },
    {
        key: "america-cup",
        label: <Link to="/america-cup">美洲杯</Link>,
        img: AmericaCup,
    },
    {
        key: "africa-cup",
        label: "非洲杯",
        img: AfricaCup,
    },
    {
        key: "asia-cup",
        label: "亚洲杯",
        img: AsiaCup,
    },
    {
        key: "epl",
        label: "英超",
        img: EPL,
    },
    {
        key: "la-liga",
        label: "西甲",
        img: Liga,
    },
    {
        key: "lega",
        label: "意甲",
        img: Lega,
    },
    {
        key: "ligue1",
        label: "法甲",
        img: Ligue1,
    },
    {
        key: "erediv",
        label: "荷甲",
        img: Ligue1,
    },
    {
        key: "bl",
        label: "德甲",
        img: BL,
    },
    {
        key: "ucl",
        label: "欧冠",
        img: UCL,
    },
    {
        key: "acl",
        label: "亚冠",
        img: ACL,
    },
    {
        key: "csl",
        label: "中超",
        img: CSL,
    },
    {
        key: "rsl",
        label: "沙特联",
        img: RSL,
    },
];

const contentStyle: React.CSSProperties = {
    paddingRight: "24px",
    minHeight: "calc(100vh - 128px)",
};

const siderStyle: React.CSSProperties = {
    textAlign: "center",
    backgroundColor: "#fff",
};

const App: React.FC = () => {
    const navigate = useNavigate();
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    return (
        <Layout>
            <Header
                style={{
                    display: "flex",
                    alignItems: "center",
                    padding: "0 24px",
                    backgroundColor: "#003eb3",
                }}
            >
                <div className={styles.logo}>
                    <a href="/">
                        <img src="/fifa.svg" alt="fifa video logo" />
                    </a>
                </div>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={[]}
                    items={items}
                    style={{ flex: 1, minWidth: 0, backgroundColor: "#003eb3" }}
                />
            </Header>
            <Layout style={{ padding: "16px 48px", background: "#fff" }}>
                <Content style={contentStyle}>
                    <Outlet />
                </Content>
                <Sider width="25%" style={siderStyle}>
                    <Card title="热门联赛" style={{ marginBottom: "16px" }}>
                        <div className={styles.league}>
                            {items.map((item, index) => (
                                <div className={styles.leagueItem} key={index}>
                                    <Link to={`/${item.key}`}>
                                        <img src={item.img} />
                                    </Link>
                                    <span
                                        onClick={() => navigate(`/${item.key}`)}
                                    >
                                        {item.label}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </Card>
                    {/* <Card title="最新新闻">
                        <div>暂无</div>
                    </Card> */}
                </Sider>
            </Layout>
            <Footer style={{ textAlign: "center", background: "#fafafa" }}>
                FIFA Video ©{new Date().getFullYear()} Created by ZhiFou
                Corporation.
            </Footer>
        </Layout>
    );
};

export default App;
