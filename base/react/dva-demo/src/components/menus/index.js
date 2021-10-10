import { getMenus } from '../../api/index'
import { connect, dva  } from 'dva'
import { Component } from 'react'
import { useHistory, withRouter, routerRedux }  from 'dva/router'

function Menus(props) {

  const toPage = path => {
    props.history.push(path)
  }
  let  data = getMenus()
  return (
    <aside>
      <ul>
        { data && data.map(item =>
          <li key={ item.id } onClick={ () => toPage(item.path) }>
            { item.name }
          </li>
        )}
      </ul>
    </aside>
  )
}
export default withRouter(Menus)

// export default class Menus extends Component {
//   state = {
//     data: [
//       {id: 1, name: '首页', path: '/home'},
//       {id: 2, name: '用户', path: '/user'},
//     ]
//   }
//
//   render() {
//     const { data } = this.state
//     return (
//       <aside>
//         <ul>
//           { data && data.map(item =>
//             <li key={ item.id }>
//               <Link to={item.path} key={item.id}>{ item.name }</Link>
//             </li>
//           )}
//         </ul>
//       </aside>
//     )
//   }
// }
