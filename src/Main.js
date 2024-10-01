import { useState } from "react";


export function Main({date}) {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([])

  function handleAddItems(item) {
    setItems(items => [...items, item]);
  }
  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const item = {
      id,
      name: input,
      date: date.toDateString(),
      checked: false,
      assigned: '',
    }
    // console.log(item);
    handleAddItems(item);
    setInput('');
    console.log(item);
  }

  function handleToggleItem(id) {
    setItems(items => items.map(item => item.id === id ? {...item, checked: !item.checked} : item))
  }
  return (
    <main className="main">
      <h3>
      Today: {date.toDateString()}
      </h3>
      <form className="add-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter to do item..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit"><i className="fa-sharp fa-solid fa-plus"></i></button>
      </form>

      <div className="item-list">
        <ul className="list-items">
        {items.map(item => (
          <Item item={item} onToggle={handleToggleItem}  key={item.id}/>
        ))}
        </ul>
      </div>
    </main>
  );
}


function Item({item, onToggle}) {

  return (
    <li className="list-item">
      {/* <input type="checkbox" value={item.checked} onChange={()=>onToggle(item.id)}/> */}
      <i className={item.checked ? "fa-solid fa-square-full" : "fa-regular fa-square-full"} onClick={()=>onToggle(item.id)}></i>
      <div class="item-body">
        <span className={item.checked ? "completed" : ""}>{item.name}</span>
        {/* <span className="small-text">{item.date.slice(4)}</span> */}
      </div>
      <div className="item-actions">
      <i class="fa-solid fa-pencil"></i>
      <i class="fa-solid fa-xmark"></i>
      </div>
    </li>
  )
}