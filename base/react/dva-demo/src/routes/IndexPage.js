import React, {Component} from 'react';
import Products  from "./Products";
import styles from './IndexPage.css';
import { Tabs } from 'antd'
const { TabPane } = Tabs;


export default class IndexPage extends Component {
  state = {
    count: 0
  }

  callback = (key) => {
    console.log(key);
    console.log(document.getElementById('~!@$%^&*()_+-=,./ ;:?><\\[]{}|`#'))
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
    <div className={styles.normal} id='~!@$%^&*()_+-=,./ ;:?><\[]{}|`#'>
      <Products/>
      <Tabs defaultActiveKey="1" onChange={this.callback}>
        <TabPane tab="Tab 1" key="1">
          Content of Tab Pane 1
        </TabPane>
        <TabPane tab="Tab 2" key="2">
          Content of Tab Pane 2
        </TabPane>
        <TabPane tab="Tab 3" key="3">
          Content of Tab Pane 3
        </TabPane>
      </Tabs>
    </div>
    )
  }
}


IndexPage.propTypes = {
};



// export default connect()(IndexPage);
