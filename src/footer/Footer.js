import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";
import vkIcon from "../assets/img/vk-icon.png";
import facebookIcon from "../assets/img/facebook-icon.png";
import instagramIcon from "../assets/img/instagram-icon.png";
import youtubeIcon from "../assets/img/youtube-icon.png";


const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} + ${s.footerContainer}`}>
                <span className={s.footerTitle}>Stoyanov Dmitry</span>
                <div className={s.boxInFooterContainer}>
                    <ul>
                        <li>
                            <a href={"https://www.vk.com/"} target={"_blank"}>
                                <img src={vkIcon}/>
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.facebook.com/"} target={"_blank"}>
                                <img src={facebookIcon}/>
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.instagram.com/"} target={"_blank"}>
                                <img src={instagramIcon}/>
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.youtube.com/"} target={"_blank"}>
                                <img src={youtubeIcon}/>
                            </a>
                        </li>
                    </ul>
                </div>
                <p className={s.footerBottomText}> © 2022 All rights reserved.</p>
            </div>
        </div>
    )
}
export default Footer