import React, { Component } from "react";
import ok from "../img/ok.png";
import notOk from "../img/Notok.png";
import "./css/starRate.css";

class StarRate extends Component {
  constructor() {
    super();
    this.updateJsonRate = this.updateJsonRate.bind(this);
  }

  updateJsonRate(e) {
    const { item, handler, data } = this.props;
    Object.assign(item, { rate: Number(e.target.id) + 1 });
    //console.log("item:", item, "data:", data, "state:", this.state);
    handler(data);
  }

  render() {
    const { data, handler, item } = this.props;
    var rows = [];
    console.log("item", item);
    for (let i = 0; i < item.rate; i++)
      //rows.push(item.rate);
      rows.push(<img src={ok} alt={ok} id={i} onClick={this.updateJsonRate} />);
    for (let i = item.rate; i < 5; i++)
      rows.push(
        <img src={notOk} alt={notOk} id={i} onClick={this.updateJsonRate} />
      );
    //console.log({ rows });
    return <div className="divStar">{rows}</div>;
  }
}
export default StarRate;
