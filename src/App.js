import * as React from "react";
import { Footer } from "components/footer";
import { Header } from "components/header";
import { MessageBlock } from "components/message_block";
import { createMessageHash } from "util/hash";
import { generateFakeTimes } from "util/time";
import { Divider } from "./components/divider";

const { Component, Fragment } = React;

const messagesWrapperStyle = {
  marginTop: 60,
  marginBottom: 50,
  padding: "0 15px 15px",
  backgroundColor: "#ffffff",
};


class App extends Component {
  constructor() {
    super();
    this.state = {
      fakeTimes: this.createFakeTimes(),
    };
    this.touchTimeout = null;
    window.addEventListener("focus", this.refreshMessages);
  }

  componentWillUnmount() {
    window.removeEventListener("focus", this.refreshMessages);
  }

  refreshMessages = () => {
    this.setState({
      fakeTimes: this.createFakeTimes(),
    });
  };

  createFakeTimes = () =>
    generateFakeTimes().map((fakeTime) => ({
      ...fakeTime,
      messageHash: createMessageHash(),
    }));

  render() {
    return (
      <Fragment>
        <Header />
        <div style={messagesWrapperStyle}>
          {this.state.fakeTimes.map((fakeTime) => (
            <MessageBlock {...fakeTime} key={fakeTime.messageHash} />
          ))}
          <Divider
          />
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
