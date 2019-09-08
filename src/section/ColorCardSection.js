import React, { Component } from "react";
import ColorCard from "../component/ColorCard";
import "./css/colorCard.css";

export default class ColorCardSection extends Component {
  render() {
    const { data, handler } = this.props;
    return (
      <div className="divclrCard">
        {data.items.map((item) => {
          return (
            <ColorCard item={item} data={data} handler={handler} />
          )
        })}
      </div>
    );
  }
}
