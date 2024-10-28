import React, { FC } from "react";
import { GiCoffeeCup } from "react-icons/gi";
import styles from "./style.module.less";

const Page404: FC = () => {
    return (
        <div className={styles.main}>
            <GiCoffeeCup />
            <span>404</span>
        </div>
    );
};

export default Page404;
