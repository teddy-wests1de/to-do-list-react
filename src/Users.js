import {useState } from "react";
const userList = [
  {
    name: 'Elrico',
    age: 42,
    id: 1,
  },
  {
    name: 'Andrico',
    age: 41,
    id: 2,
  },
  {
    name: 'Basil',
    age: 41,
    id: 3,
  },
  {
    name: 'Mauritz',
    age: 40,
    id: 4,
  },
]
export function Users({user, onChangeUser, onAssign, index}) {
  const [users, setUsers] = useState(userList);
  
  function handleChange(e) {
    onAssign(e.target.value)
    console.log(index);
  }
  // useEffect(()=> console.log(currentUser.name), [currentUser])
  return <div className="users">
    <select className="select-box" value={index.assigned} onChange={handleChange}>
      {users.map(user => (
        <User user={user} key={user.id} />
      ))}
    </select>
  </div>;
}

function User({user}) {

  return (
    <option value={user.name}>{user.name}</option>
  )
}