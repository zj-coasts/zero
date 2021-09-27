import React, {Component, useState} from 'react';
import { useUser } from "../../api/index"


export default function Swr() {
  const [ users, setUsers ] = useState(null)
  const { user } = useUser()
  // console.trace(user)


  const clickHandler = () => {
    const  data = user
    setUsers(data)
    console.trace(clickHandler)
  }

  return (
    <div>
      嗯哼{ users?.datas?.name }
      <button onClick={clickHandler}>重新加载</button>
    </div>
  )
}
