import React from "react";

export default class Good extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            img: props.img,
            props: props.props.map(el=>
                <tr>
                    <td>{el.name}</td>
                    <td>{el.value}</td>
                </tr>
            )
        }
    }
    render(){
        return <div className="good-container embla__slide">
        <img alt="Нету изображения, есть букавы. Не хочется букавы читать. Картинки лучше глядеть. Какие букавы, на кой это надо - читать букавы? Их много, букав."src={this.state.img}/>
        <table>
            {this.state.props}
        </table>
        </div>;
    }
}