
import { useEffect } from 'react';
// import {Footer} from "./Footer";
import { Header } from "./Header";
import { Main } from "./Main";
import { useState } from "react";
import itemImg from './logoipsum-245.svg';
import { Users } from "./Users";

// import { Users } from "./Users";
// const users = [
//   {
//     name: "Elrico",
//     age: 43,
//     id: 1,
//   },
//   {
//     name: "Basil",
//     age: 42,
//     id: 2,
//   },
//   {
//     name: "Goofer",
//     age: 40,
//     id: 3,
//   },
//   {
//     name: "Drakie",
//     age: 42,
//     id: 4,
//   },

// ];
export function App() {
  const [items, setItems] = useState([])
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [selectedUser, setSelectedUser] = useState({});

  const date = new Date();
  function handleEditItem(item, open) {
    setSelectedItem(item); 
    setModalOpen(open)
    console.log(selectedItem)
  }
  function handleAssignTask(user) {
    setSelectedUser(user)//Dropdown value
    console.log(user)
    const updatedItem = {
      ...selectedItem,
      assigned: user,
      status: selectedItem.assigned ? 'Assigned' : 'Unassigned',
    };
    setSelectedItem({...selectedItem, assigned: user, status: selectedItem.assigned ? 'Assigned' : 'Incompleted'});
    // setItems(items=> [...items, {...selectedItem, assigned: user, status: selectedItem.assigned ? 'Assigned' : 'Unassigned'}])
    setItems(prevItems => 
      prevItems.some(({ id }) => id === updatedItem.id)
        ? prevItems.map(item => item.id === updatedItem.id ? updatedItem : item)
        : [...prevItems, updatedItem]
    );
  }
    
    function closeModal() {
      setModalOpen(false)
      // setSelectedItem(null);
  }
  return (
    <div className="App">
      <div className="app-container">
        <Header />
        <Main date={date} open={modalOpen} onOpen={setModalOpen} onEdit={handleEditItem} items={items} onAddItems={setItems}/>
        {/* {modalOpen && (<Modal onOpen={setModalOpen} open={modalOpen} onEdit={handleEditItem} items={items} selectedItem={selectedItem} onCloseModal={closeModal}  onAssign={assignTask} user={selectedUser} onChangeUser={setSelectedUser}/>)} */}
        {modalOpen && (<Modal onOpen={setModalOpen} open={modalOpen} items={items} selectedItem={selectedItem} onCloseModal={closeModal}  onAssign={handleAssignTask} user={selectedUser} onChangeUser={setSelectedUser}/>)}
        {/* <Users users={users} /> */}
        {/* <Footer date={date} /> */}
        
      </div>
    </div>
  );
}

function Modal({open, selectedItem, onCloseModal, user, onChangeUser, onAssign}) {

  return(
    <div className={open ? "modal-screen" : "modal-screen hidden"}>
      <div><i className="fa-solid fa-xmark" onClick={onCloseModal }></i></div>
      <div className="edit-box">
        <div className="box-header">
          <div className="box-img"><img src={itemImg} alt="Item"/></div>
          <div className="box-heading">
            <div className="box-title">{selectedItem.name}</div>
            {/* <div className="box-description">{selectedItem.description}</div> */}
            <div className="box-description"><span>Assigned To:</span><span>{selectedItem.assigned}</span></div>
          </div>
        </div>
        <div className="item-status"><span>Status: </span><span>{selectedItem.status}</span></div>
        <div className="item-details">
          <h5>Details</h5>
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas necessitatibus suscipit magni molestiae fugit.
          </p>
        </div>
        <div className="assign-to">
          <h5>Assign To:</h5>
         <Users index={selectedItem} user={user} onChangeUser={onChangeUser} onAssign={onAssign}/>
        </div>
        <div className='buttons'>
          <button className='btn'>Remove</button>
          <button className='btn'>Complete</button>
        </div>
      </div>
    </div>
  )
}