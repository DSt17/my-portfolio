import React from "react";
import s from './Footer.module.css'
import styleContainer from "../common/styles/Container.module.css";

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} + ${s.footerContainer}`}>
                <span className={s.footerTitle}>Stoyanov Dmitry</span>
                <div className={s.boxInFooterContainer}>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                <div className={s.icon}></div>
                </div>
                <p className={s.footerBottomText}> © 2022 All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer