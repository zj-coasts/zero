import React, {Component} from 'react';
import styles from './IndexPage.css';
import{ connect } from 'dva'
import { Tabs } from 'antd'
import { useUser } from '../api'
const { TabPane } = Tabs;

@connect(item => {
  console.log(item)
  return item.example
})
export default class IndexPage extends Component {

  state = {
    count: 0
  }


  render() {
    console.log(this.props.name)

    return (
    <div className={styles.normal}>
    </div>
    )
  }
}


IndexPage.propTypes = {
};



// export default connect()(IndexPage);
