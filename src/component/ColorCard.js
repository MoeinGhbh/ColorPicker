import React, { Component } from "react";
import './css/ColorCard.css';

export default class ColorCard extends Component {
  constructor(){
    super();
    
  }
  render() {
     const { item } = this.props;

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
              <div style={{ backgroundColor: item.color }} className="colorShow" />
            </td>
          </tr>
          <tr>
            <td>
              <label> {item.rate}  </label>
            </td>
          </tr>
          <tr>
            <td>
              <button type="button" name="remove">Remove</button>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
