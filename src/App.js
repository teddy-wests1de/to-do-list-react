
import { useState } from "react";
import {Footer} from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
const users = [
  {
    name: "Elrico",
    age: 43
  },
  {
    name: "Basil",
    age: 42
  },
  {
    name: "Goofer",
    age: 40
  },
  {
    name: "Drakie",
    age: 42
  },

]
export function App() {
  const date = new Date();
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Main date={date}/>
        {/* <Users users={users} /> */}
        <Footer date={date} />
      </div>
    </div>
  );
}

// function Users({users}) {
//   const [userName, setUserName] = useState('---');
//   // console.log(userName);
//   return <div className="users">
//       <select value={userName} onChange={(e)=>setUserName(e.target.value)}>
//       {users.map(item => (
//           <option>{item.name}</option>
//         ))}
//       </select>
//   </div>
// }