import { Component } from "react";
import "./App.css";

class App extends Component {
  state = {
    isDarkMode: true,
  };

  onClickBtn = () => {
    this.setState((prevState) => ({ isDarkMode: !prevState.isDarkMode }));
  };

  render() {
    const { isDarkMode } = this.state;
    const modeClassName = isDarkMode ? "dark-mode" : "light-mode";
    const buttonText = isDarkMode ? "Light Mode" : "Dark Mode";

    return (
      <div className={`container ${modeClassName}`}>
        <h1 className="heading">Click to Change {buttonText}</h1>
        <button type="button" className="button" onClick={this.onClickBtn}>
          {buttonText}
        </button>
      </div>
    );
  }
}

export default App;
