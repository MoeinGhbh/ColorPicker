import React, { Component } from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/bs4Custome.css';
import {Button} from "react-bootstrap"
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
                {/* <Button variant="outline-warning" onClick={()=>{alert("sad")}}>saassx</Button> */}
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
