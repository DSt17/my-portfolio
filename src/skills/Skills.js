import React from "react";
import s from './Skills.module.css'
import styleContainer from '../common/styles/Container.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {

    return (
        <div className={s.skillsBlock}>
            <div className={`${styleContainer.container} + ${s.skillsContainer}`}>
                <h2>Skills</h2>
                <div className={s.skills}>
                    <Skill
                        title={'JS'}
                        description={'Le ptry. Lorem Ipsum has been the industry’s standard dummy text.'
                        }
                    />
                    <Skill
                        title={'CSS'}
                        description={'Lo printin been the industry’s standard dummy text.'
                        }
                    />
                    <Skill
                        title={'React'}
                        description={'L the pri sdssdsssssd sds dsd sd ccccccccccccccccccccsd sd s ds dd d d d d dnting and typesetting industry. Lortandard dummy text.'}
                    />


                  {/*  <div className={s.c100}>
                        <span>25%</span>
                        <div className={s.slice}>
                            <div className={s.bar}></div>
                            <div className={s.fill}></div>
                        </div>
                        <div>
                            <h6>HTML</h6>
                        </div>
                    </div>
                    <div className={s.c100}>
                        <span>25%</span>
                        <div className={s.slice}>
                            <div className={s.bar}></div>
                            <div className={s.fill}></div>
                        </div>
                        <div>
                            <h6>CSS</h6>
                        </div>
                    </div>
                    <div className={s.c100}>
                        <span>25%</span>
                        <div className={s.slice}>
                            <div className={s.bar}></div>
                            <div className={s.fill}></div>
                        </div>
                        <div>
                            <h6>JS</h6>
                        </div>
                    </div>
                    <div className={s.c100}>
                        <span>25%</span>
                        <div className={s.slice}>
                            <div className={s.bar}></div>
                            <div className={s.fill}></div>
                        </div>
                        <div>
                            <h6>React</h6>
                        </div>
                    </div>
                    <div className={s.c100}>
                        <span>25%</span>
                        <div className={s.slice}>
                            <div className={s.bar}></div>
                            <div className={s.fill}></div>
                        </div>
                        <div>
                            <h6>Redux</h6>
                        </div>
                    </div>*/}
                </div>
            </div>
        </div>
    )

}

export default Skills