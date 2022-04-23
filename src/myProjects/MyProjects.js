import React from "react";
import s from './MyProjects.module.css'
import styleContainer from "../common/styles/Container.module.css";
import Project from "./Project";


const MyProjects = () => {

    return (
        <div className={s.MyProjectsBlock}>
            <div className={`${styleContainer.container} + ${s.projectsContainer}`}>
                <h2 className={s.title}>
                    My
                    <span> projects</span>
                </h2>
                <div className={s.projects}>
                    <Project
                        title={'TO-DO LIST'}
                        text={'Af  ds sds 8sd s ssd dsd sd fsd fds fss dsdfsd Asdas sdsds sdsdsdfsd sd sd ad sdsd sds'}/>
                    <Project
                        title={'SOCIAL NETWORK'}
                        text={'Asdas sdsds sdsdsdfsd d f sdf zd fsdf sds ssd sds sds ds dd ad sdsd  sd sddf sd f sdf zd fsdf sds ssd sds sds ds dd ad sdsd sds'}/>
                </div>
            </div>
        </div>
    )
}

export default MyProjects