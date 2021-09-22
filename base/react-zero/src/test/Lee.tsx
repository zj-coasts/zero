import React, {Component, ReactNode} from 'react';
import lee from './lee.module.css'

interface IProps {
  name: string;
}

interface IState {
  width?: number,
  count?: number;
}

/**
 * component 第一个参数，定义props类型
 */
class Lee extends Component<IProps, IState> {

  state = {
    count: 0,
    width: 200,
  }

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      // this.setState((state: { count: number; }, props: any) => ({ count: state.count + 1 }))
      this.setState({ count: this.state.count + 1 })
    }
  }

  clickHandler = (event: any):void => {
    this.setState({count: this.state.count + 1})
  }

  change = () => {
    this.setState({ width: this.state.width + 100 })
  }

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.clickHandler}>+1</button>
        <span className={lee.red}>{ this.state.count }</span>

        <div style={{
          width: `${this.state.width}px`,
          height: '200px',
          backgroundColor: "dimgray"
        }}>
          <button onClick={this.change}>change</button>
        </div>
      </div>
    );
  }
}

export default Lee;
