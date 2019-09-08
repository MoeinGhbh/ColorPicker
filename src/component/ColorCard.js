import React, { Component } from "react";
import "./css/ColorCard.css";
import StartRate from "./StarRate";

export default class ColorCard extends Component {
  constructor() {
    super();
    this.handlerRemove = this.handlerRemove.bind(this);
  }
  handlerRemove() {
    const { item, data, handler } = this.props;
    delete data.items[item.key];
    handler(data);
  }

  render() {
    const { item, data, handler } = this.props;
    return (
      <div className="divCard">
        
        <table>
          <tr>
            <td>
              <h3>{item.title}</h3>
            </td>
          </tr>
          <tr>
            <td>
              <div
                style={{ backgroundColor: item.color }}
                className="colorShow"
              ></div>
            </td>
          </tr>
          <tr>
            <td>
              <StartRate item={item}  data={data} handler={handler} /> 
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="remove" onClick={this.handlerRemove}>
                Remove
              </button>
            </td>
          </tr>
        </table>
      </div>
      
      );
  }
}
