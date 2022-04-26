import React from "react";
import s from './Main.module.scss';
import styleContainer from '../common/styles/Container.module.css'


const Main = () => {

    return (
        <div className={s.mainBlock}>
            <div className={styleContainer.container}>
                <div className={s.textAndPhotoBlock}>
                    <div>
                        <div>
                            <h1>HI, I AM DMITRY.</h1>
                            <h2>
                                <span>FRONTEND DEVELOPER</span>
                            </h2>
                        </div>
                    </div>
                    <div className={s.photo}>
                    </div>
                </div>

            </div>

        </div>
    )

}

export default Main