import React, {Component, ReactNode} from 'react';
import lee from './lee.module.css'

interface IProps {
  name: string;
}

/**
 * component 第一个参数，定义props类型
 */
class Lee extends Component<IProps, any> {

  state = {
    count: 0
  }

  componentDidMount() {
    for (let i = 0; i < 100; i++) {
      // this.setState((state: { count: number; }, props: any) => ({ count: state.count + 1 }))
      this.setState({ count: this.state.count + 1 })
    }
  }

  clickHandler = (event: any):void => {
    console.log(event);
    this.setState({count: this.state.count + 1})
  }

  render(): ReactNode {
    return (
      <div>
        <button onClick={this.clickHandler}>+1</button>
        <span className={lee.red}>{ this.state.count }</span>
      </div>
    );
  }
}

export default Lee;
