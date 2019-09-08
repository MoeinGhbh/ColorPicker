import React, { Component } from "react";
import ButtonColor from "../component/ButtonColor";
import ColorPicker from "../component/ColorPicker";
import InputColor from "../component/InputColor";
import "./css/colorForm.css";

export default class ColorForm extends Component {
  constructor() {
    super();
    this.state = {
      key: 0,
      inputvalue: "",
      colorvalue: "#000",
      rate: 0
    };

    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.handleChangeRate  = this.handleChangeRate.bind(this);
    this.addColor          = this.addColor.bind(this);
  }

  handleChangeColor(e) {
    this.setState({ colorvalue: e.target.value });
  }

  handleChangeInput(e) {
    this.setState({ inputvalue: e.target.value });
  }

  handleChangeRate(e) {
    this.setState({ rate: e.target.value });
  }
  addColor() {
    const { data, handler } = this.props;
    data.items.push({
      key: this.state.key,
      title: this.state.inputvalue,
      color: this.state.colorvalue,
      rate: this.state.rate
    });
    this.state.key++;
    handler(data);
    console.log(data.items);
  }

  test(e){
      console.log("dddddddddddddddd"+e);
  }

  //   delColor() {
  //     const { data, handler } = this.props;
  //     delete data[ this.state.key];
  //   }

  render() {
    return (
      <div className="divMain">
        <table style={{ border: "1px solid black" }}>
          <tr>
            <td>
              <label>Write Title</label>
            </td>
            <td>
              <InputColor
                value={this.state.inputvalue}
                onChange={this.handleChangeInput}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Select Color</label>
            </td>
            <td>
              <ColorPicker
                value={this.state.colorvalue}
                onChange={this.handleChangeColor}
              />
            </td>
          </tr>
          {/*<tr>
            <td>
              <label>Give Rate</label>
            </td>
            <td>
              {/* <InputColor
                value={this.state.rate}
                onChange={this.handleChangeRate}
              /> 
            </td>
          </tr>*/}
          <tr>
            <td />
            <td>
              <ButtonColor onClick={this.addColor} />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
