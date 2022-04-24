import React from "react";
import s from './Project.module.scss'


const Project = (props) => {

    return (
        <div className={s.project}>
            <div className={s.ProjectImgContainer} style={props.style}>
                <a href={''} className={s.projectBottom}>Watch</a>
            </div>
            <div className={s.descriptionBlock}>
                <h3 className={s.titleProject}>  {props.title} </h3>
                <p className={s.textProject}>{props.text}</p>
            </div>

        </div>
    )

}

export default Project