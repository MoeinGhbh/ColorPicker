import React,{Component} from 'react';

export default class ButtonColor extends Component{
    render(){

        const {onClick}=this.props;

        return(
            <div>
                <button type="button" onClick={onClick} >Add</button>
            </div>
        );
    }
}