import React, { Component, ReactNode } from 'react';
import Lee from "./test/Lee";

class App extends Component {
  render(): ReactNode {
    return (
      <div>
        嗯哼
        <Lee name={'liuzj'}/>
      </div>
    );
  }
}

export default App;
