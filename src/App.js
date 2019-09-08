import React, { Component } from "react";
import './App.css';
import ColorForm from './section/ColorForm';
import ColorCardSection from './section/ColorCardSection';
import data from './data.json';

export default class App extends Component {
  constructor() {
    super();
    this.state = { data };
    this.handler = this.handler.bind(this);
  }

   handler(data) {
     this.setState(data);
   }

  render() {
    return (
      <div className="App">
        <table>
          <tr>
            <td>
              <header className="App-header">
                Let's see there Cards
              </header>
              <ColorForm data={data} handler={this.handler} />
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <ColorCardSection data={data} handler={this.handler} />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <div className="divFooter">
                <h5>
                  This component design by Moien Ghobbeh For peresent Card Components
                </h5>
              </div>
            </td>
          </tr>
        </table>
      </div>
    );
  }
}
