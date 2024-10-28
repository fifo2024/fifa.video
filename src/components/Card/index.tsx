import { FC, ReactNode, CSSProperties } from "react";
import cardStyles from "./style.module.less";

export interface CardProps {
    title?: string | ReactNode;
    style?: CSSProperties;
    styles?: {
        titleStyle?: CSSProperties;
        bodyStyle?: CSSProperties;
    };
    children?: ReactNode;
}

const Card: FC<CardProps> = ({ title, style = {}, styles, children }) => {
    const { titleStyle = {}, bodyStyle = {} } = styles || {};

    return (
        <div className={cardStyles.card} style={style}>
            <div className={cardStyles.title} style={titleStyle}>
                {title}
            </div>
            <div className={cardStyles.body} style={bodyStyle}>
                {children}
            </div>
        </div>
    );
};

export default Card;
