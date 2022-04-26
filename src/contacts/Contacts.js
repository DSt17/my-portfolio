import React from "react";
import s from './Contacts.module.scss';
import styleContainer from "../common/styles/Container.module.css";


const Contacts = () => {

    return (
        <div className={s.contactsBlock}>
            <div className={`${styleContainer.container} + ${s.contactsContainer}`}>
                <h2 className={s.contactsTitle}>Contacts</h2>
                <form className={s.formBox}>
                    <input type='text' placeholder={"YOUR NAME"}/>
                    <input type='text' placeholder={"YOUR EMIL"}/>
                    <textarea placeholder={"YOUR MESSAGE"}></textarea>
                </form>
                <button type={"submit"} >send</button>
            </div>
        </div>
    )

}

export default Contacts