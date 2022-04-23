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
                </div>
            </div>
        </div>
    )

}

export default Skills