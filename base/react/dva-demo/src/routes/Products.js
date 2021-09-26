import React, {Component} from 'react';



export default class IndexPage extends Component {
  shouldComponentUpdate(props) {
    console.log(props)
    return false
  }

  state = {
    name: 'liuzj'
  }

  clickHandle = () => {
    this.setState({name: '张三'})
  }

 render() {
   console.log('从新渲染')
    return (
      <div>
        <h2>List of Products</h2>

        <button onClick={this.clickHandle}>List { this.state.name }</button>
      </div>
    )
 }
}

