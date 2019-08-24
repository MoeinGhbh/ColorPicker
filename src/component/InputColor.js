import React,{Component} from 'react';
//import './InputColor.css';

export default class InputColor extends Component{
    render(){
        const {value}=this.props;
        const {onChange}=this.props;
        return(
            <div>
                <input type="text"  placeholder="ColorTitle"
                 name="Title" onChange={onChange} value={value}   />
            </div>
        );
    }
}