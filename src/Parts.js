import React, { Component } from "react";
import Yazar from "./Yazar";
import Eser from "./Eser";
import diagram from "./diagram.png";
export default class Parts extends Component {
  state = {
    currentCategory: "",
  };
  changeCategory = (writer) => {
    this.setState({ currentCategory: writer.donemId });
  };
usewind
  render() {
    console.log(this.props.currentCategory);
    return (
      <div className="parts">
        <img id="diag" src={diagram} alt={"logo"} style={{height:"auto" ,width:"80%" ,maxWidth:"800px"}}>
        </img>

        {/*           
            <h1>
              Dönemler
            </h1> */}
        <Yazar changeCategory={this.changeCategory} />
        {/* <Eser currentCategory={this.state.currentCategory} changeCategory={this.props.changeCategory} title='bababbab' /> */}
      </div>
    );
  }
}
