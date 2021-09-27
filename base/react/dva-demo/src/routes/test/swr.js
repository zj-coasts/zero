const {useState} = require("react");
import { useUser } from "../../api/index"


function Swr() {
  const [ users, setUsers ] = useState(null)

  const { user, isLoading, isError } = useUser(id)

  console.log(user, isLoading, isError)
  return (
    <div>嗯哼{ users }</div>
  )
}
