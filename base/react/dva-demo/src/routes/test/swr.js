import React, {Component, useState} from 'react';
import { useUser } from "../../api/index"


export default function Swr() {
  const [ users, setUsers ] = useState(null)

  const { user, isLoading, isError } = useUser()

  return (
    <div>嗯哼{ user?.datas?.name }</div>
  )
}
