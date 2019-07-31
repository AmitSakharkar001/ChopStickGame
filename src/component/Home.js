import React from "react";
import { withRouter } from "react-router-dom";
import "../component/game.css";
class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneRightCurrentValue: 1,
      playerOneLeftCurrentValue: 1,
      playerTwoRightCurrentValue: 1,
      playerTwoLeftCurrentValue: 1,
      playerOneRightCurrentImage: "",
      playerOneLeftCurrentImage: "",
      playerTwoRightCurrentImage: "",
      playerTwoLeftCurrentImage: "",
      playerOneRightSelected: false,
      playerOneLeftSelected: false,
      playerTwoRightSelected: false,
      playerTwoLeftSelected: false
    };
  }
  componentWillMount() {
    if (this.state.playerOneRightCurrentValue === 1) {
      this.setState({ playerOneRightCurrentImage: "1-unselected.svg" });
    }
    if (this.state.playerOneLeftCurrentValue === 1) {
      this.setState({ playerOneLeftCurrentImage: "1-unselected.svg" });
    }
    if (this.state.playerTwoRightCurrentValue === 1) {
      this.setState({ playerTwoRightCurrentImage: "1-unselected.svg" });
    }
    if (this.state.playerTwoLeftCurrentValue === 1) {
      this.setState({ playerTwoLeftCurrentImage: "1-unselected.svg" });
    }
  }
  handlePlayerOneRightClick = () => {
    let temp = !this.state.playerOneRightSelected;
    let tempValue = this.state.playerOneRightCurrentValue;
    if (this.state.playerTwoLeftSelected === true) {
      tempValue += this.state.playerTwoLeftCurrentValue;
      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerOneRightCurrentImage: "0-selected.svg",
          playerOneRightCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerTwoLeftCurrentImage:
            this.state.playerTwoLeftCurrentValue + "-unselected.svg",
          playerOneRightCurrentImage: tempValue + "-selected.svg",
          playerOneRightCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }
    } else if (this.state.playerTwoRightSelected === true) {
      tempValue += this.state.playerTwoRightCurrentValue;
      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerOneRightCurrentImage: "0-selected.svg",
          playerOneRightCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerTwoRightCurrentImage:
            this.state.playerTwoRightCurrentValue + "-unselected.svg",
          playerOneRightCurrentImage: tempValue + "-selected.svg",
          playerOneRightCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }
    } else {
      if (temp === true) {
        this.setState({
          playerOneRightCurrentImage: tempValue + "-selected.svg",
          playerOneRightCurrentValue: tempValue
        });
      } else {
        this.setState({
          playerOneRightCurrentImage: tempValue + "-unselected.svg",
          playerOneRightCurrentValue: tempValue
        });
      }
    }
    this.setState({ playerOneRightSelected: temp });
    console.log(tempValue);
  };
  handlePlayerOneLeftClick = () => {
    //console.log("player two clicked");
    let temp = !this.state.playerOneLeftSelected;
    let tempValue = this.state.playerOneLeftCurrentValue;
    if (this.state.playerTwoLeftSelected === true) {
      tempValue += this.state.playerTwoLeftCurrentValue;
      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerOneLeftCurrentImage: "0-selected.svg",
          playerOneLeftCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerTwoLeftCurrentImage:
            this.state.playerTwoLeftCurrentValue + "-unselected.svg",
          playerOneLeftCurrentImage: tempValue + "-selected.svg",
          playerOneLeftCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }
    } else if (this.state.playerTwoRightSelected === true) {
      tempValue += this.state.playerTwoRightCurrentValue;

      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerOneLeftCurrentImage: "0-selected.svg",
          playerOneLeftCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerTwoRightCurrentImage:
            this.state.playerTwoRightCurrentValue + "-unselected.svg",
          playerOneLeftCurrentImage: tempValue + "-selected.svg",
          playerOneLeftCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }
    } else {
      if (temp === true) {
        this.setState({
          playerOneLeftCurrentImage:
            this.state.playerOneLeftCurrentValue + "-selected.svg",
          playerOneLeftCurrentValue: tempValue
        });
      } else {
        this.setState({
          playerOneLeftCurrentImage:
            this.state.playerOneLeftCurrentValue + "-unselected.svg",
          playerOneLeftCurrentValue: tempValue
        });
      }
    }
    this.setState({ playerOneLeftSelected: temp });
    //console.log(this.state.playerOneRightCurrentValue);
  };
  handlePlayerTwoRightClick = () => {
    let temp = !this.state.playerTwoRightSelected;
    let tempValue = this.state.playerTwoRightCurrentValue;
    if (this.state.playerOneLeftSelected === true) {
      tempValue += this.state.playerOneLeftCurrentValue;

      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerTwoRightCurrentImage: "0-selected.svg",
          playerTwoRightCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerOneLeftCurrentImage:
            this.state.playerOneLeftCurrentValue + "-unselected.svg",
          playerTwoRightCurrentImage: tempValue + "-selected.svg",
          playerOneRightCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }

      console.log(tempValue);
    } else if (this.state.playerOneRightSelected === true) {
      console.log(this.state.playerOneRightCurrentValue);
      tempValue += this.state.playerOneRightCurrentValue;

      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerTwoRightCurrentImage: "0-selected.svg",
          playerTwoRightCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerOneRightCurrentImage:
            this.state.playerOneRightCurrentValue + "-unselected.svg",
          playerTwoRightCurrentImage: tempValue + "-selected.svg",
          playerOneRightCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }
    } else {
      if (temp === true) {
        this.setState({
          playerTwoRightCurrentImage:
            this.state.playerOneLeftCurrentValue + "-selected.svg",
          playerOneRightCurrentValue: tempValue
        });
      } else {
        this.setState({
          playerTwoRightCurrentImage:
            this.state.playerTwoRightCurrentValue + "-unselected.svg",
          playerOneRightCurrentValue: tempValue
        });
      }
    }
    this.setState({ playerTwoRightSelected: temp });
    //console.log(this.state.playerOneRightCurrentValue);
  };
  handlePlayerTwoLeftClick = () => {
    //console.log("player two clicked");
    let temp = !this.state.playerTwoLeftSelected;
    let tempValue = this.state.playerTwoLeftCurrentValue;
    if (this.state.playerOneLeftSelected === true) {
      tempValue += this.state.playerOneLeftCurrentValue;
      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerTwoLeftCurrentImage: "0-selected.svg",
          playerTwoLeftCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerOneLeftCurrentImage:
            this.state.playerOneLeftCurrentValue + "-unselected.svg",
          playerTwoLeftCurrentImage: tempValue + "-selected.svg",
          playerTwoLeftCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }

      if (tempValue === 5) {
        this.setState({
          playerTwoLeftCurrentImage: "0-selected.svg",
          playerTwoLeftCurrentValue: 0
        });
      } else if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else {
        this.setState({
          playerOneLeftCurrentImage:
            this.state.playerOneLeftCurrentValue + "-unselected.svg",
          playerTwoLeftCurrentImage: tempValue + "-selected.svg",
          playerTwoLeftCurrentValue: tempValue
        });
      }
    } else if (this.state.playerOneRightSelected === true) {
      console.log(this.state.playerTwoRightCurrentValue);
      tempValue += this.state.playerOneRightCurrentValue;
      if (tempValue > 5) {
        alert("Incorrect Move!!!!!");
      } else if (tempValue === 5) {
        this.setState({
          playerTwoLeftCurrentImage: "0-selected.svg",
          playerTwoLeftCurrentValue: 0
        });
      } else if (tempValue < 5) {
        this.setState({
          playerOneRightCurrentImage:
            this.state.playerOneRightCurrentValue + "-unselected.svg",
          playerTwoLeftCurrentImage: tempValue + "-selected.svg",
          playerTwoLeftCurrentValue: tempValue
        });
      } else {
        console.log("Wrong Move");
      }
    } else {
      if (temp === true) {
        this.setState({
          playerTwoLeftCurrentImage:
            this.state.playerTwoLeftCurrentValue + "-selected.svg",
          playerTwoLeftCurrentValue: tempValue
        });
      } else {
        this.setState({
          playerTwoLeftCurrentImage:
            this.state.playerTwoLeftCurrentValue + "-unselected.svg",
          playerTwoLeftCurrentValue: tempValue
        });
      }
    }
    this.setState({ playerTwoLeftSelected: temp });
    //console.log(this.state.playerOneRightCurrentValue);
  };
  render() {
    // console.log("Chop Stick");
    const {
      playerOneRightCurrentValue,
      playerOneLeftCurrentValue,
      playerTwoRightCurrentValue,
      playerTwoLeftCurrentValue,
      playerOneRightCurrentImage,
      playerOneLeftCurrentImage,
      playerTwoRightCurrentImage,
      playerTwoLeftCurrentImage
    } = this.state;
    return (
      <div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "coloumn"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "50%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around"
            }}
          >
            <img
              src={playerOneLeftCurrentImage}
              width="150"
              height="100"
              onClick={this.handlePlayerOneLeftClick}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              height: "50%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around"
            }}
          >
            <img
              src={playerTwoRightCurrentImage}
              width="150"
              height="100"
              class="rotateimg180"
              onClick={this.handlePlayerTwoRightClick}
            />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            flexDirection: "coloumn"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around"
            }}
          >
            <img
              src={playerOneRightCurrentImage}
              width="150"
              height="100"
              onClick={this.handlePlayerOneRightClick}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "50%",
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "space-around"
            }}
          >
            <img
              src={playerTwoLeftCurrentImage}
              width="150"
              height="100"
              class="rotateimg180"
              onClick={this.handlePlayerTwoLeftClick}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withRouter(Home);
