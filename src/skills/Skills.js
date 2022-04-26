import React from "react";
import s from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";

import reactIcon from '../assets/img/1126012.png'
import cssIcon from '../assets/img/CSSicon.png'
import jsIcon from '../assets/img/JSicon.png'
import htmlIcon from '../assets/img/HTMLIcon.png'
import reduxIcon from '../assets/img/reduxIcon.png'
import typeScriptIcon from '../assets/img/ts.png'


const Skills = () => {
    const htmlIconImg = {
        backgroundImage: `url(${htmlIcon})`,
    };
    const cssIconImg = {
        backgroundImage: `url(${cssIcon})`,
    };
    const jsIconImg = {
        backgroundImage: `url(${jsIcon})`,
    };

    const reactIconImg = {
        backgroundImage: `url(${reactIcon})`,
    };
    const typeScriptIc = {
        backgroundImage: `url(${typeScriptIcon})`,
    };
    const reduxIconImg = {
        backgroundImage: `url(${reduxIcon})`,
    };


    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} + ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill
                        style={htmlIconImg}
                        title={'HTML'}
                        description={'Le ptry. Lorem Ipsum has been the industry’s standard dummy text.'}
                    />
                    <Skill
                        style={cssIconImg}
                        title={'CSS'}
                        description={'Le ptry. Lorem Ipsum has been the industry’s standard dummy text.'}
                    />
                    <Skill
                        style={jsIconImg}
                        title={'JavaScript'}
                        description={'L the pri sdssdsssssd sds dsd sd ccccccccccccccccccccsd sd s ds dd d d d d dnting and typesetting industry. Lortandard dummy text.'}
                    />
                    <Skill
                        style={reactIconImg}
                        title={'React'}
                        description={'Le ptry. Lorem Ipsum has been the industry’s standard dummy text.'}
                    />
                    <Skill
                        style={reduxIconImg}
                        title={'Redux'}
                        description={'Le ptry. Lorem Ipsum has been the industry’s standard dummy text.'}
                    />
                    <Skill
                        style={typeScriptIc}
                        title={'TypeScript'}
                        description={'Lo printin been the industry’s standard dummy text.'}
                    />
                </div>
            </div>
        </div>
    )

}

export default Skills