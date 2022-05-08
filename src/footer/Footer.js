import React from "react";
import s from './Footer.module.scss'
import styleContainer from "../common/styles/Container.module.css";



import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faFacebook, faInstagram, faVk, faYoutube} from '@fortawesome/free-brands-svg-icons'



const Footer = () => {

    return (
        <div className={s.footerBlock}>
            <div className={`${styleContainer.container} + ${s.footerContainer}`}>
                <span className={s.footerTitle}>Stoyanov Dmitry</span>
                <div className={s.boxInFooterContainer}>
                    <ul>
                        <li>
                            <a href={"https://www.vk.com/"} target={"_blank"}>
                                <FontAwesomeIcon icon={faVk} />
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.facebook.com/"} target={"_blank"}>
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.instagram.com/"} target={"_blank"}>
                                <FontAwesomeIcon icon={faInstagram}  />
                            </a>
                        </li>
                        <li>
                            <a href={"https://www.youtube.com/"} target={"_blank"}>
                                <FontAwesomeIcon icon={faYoutube} />
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