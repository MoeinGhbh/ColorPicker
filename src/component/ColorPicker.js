
import React,{Component} from 'react';

export default class ColorPicker extends Component{
    render(){

        const {value}=this.props;
        const {onChange}=this.props;

        return(
            <div>
                <input type="color" name="color" onChange={onChange} value={value} />
            </div>
        );
    }
}