import React, {Component} from 'react';
import{ connect } from 'dva'
import { Tabs } from 'antd'
import { useUser } from '../api'
import Swr from "./test/swr";
import Header from "../components/head/index"
import Menus from "../components/menus/index"
import { Router, Route, Switch } from 'dva/router';
import Home from './Home'
import User from './User'

import style from "../styles/layout/index.css"


const { TabPane } = Tabs;

@connect(item => {
  return item.example
})
export default class IndexPage extends Component {
  render() {
    return (
    <div className={style.page}>
      <Menus/>
      <div className={style.pageContent}>
        <Header/>
        <div className={style.content}>
          <Route path="/home" exact component={Home}></Route>
          <Route path="/user" exact component={User}></Route>
        </div>
      </div>
    </div>
    )
  }
}


// export default connect()(IndexPage);
