import React from "react";
import styles from "./Lmenu.module.css"
export default class LMenu extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className={styles.lmenu}>
                <div className={styles.lmenuel}>Главная</div>
                <div className={styles.lmenuel}>Компоненты ПК</div>
                <div className={styles.lmenuel}>Сборки</div>
                <div className={styles.lmenuel}>CvR?</div>
                <div className={styles.lmenuel}>FAQ</div>
            </div>
        )
    }
}