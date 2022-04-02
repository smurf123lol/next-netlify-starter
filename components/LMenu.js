import React from "react";

export default class LMenu extends React.Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="lmenu">
                <div className="lmenuel">Главная</div>
                <div className="lmenuel">Компоненты ПК</div>
                <div className="lmenuel">Сборки</div>
                <div className="lmenuel">CvR?</div>
                <div className="lmenuel">FAQ</div>
            </div>
        )
    }
}