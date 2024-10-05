import { useState } from "react";
import { ItemList } from "./ItemList";


export function Main({date, open, onOpen, onEdit, items, onAddItems}) {
  const [input, setInput] = useState('');


  function handleAddItems(item) {
    onAddItems(items => [...items, item]);
  }
  function handleToggleItem(id) {
    onAddItems(items => items.map(item => item.id === id ? {...item, checked: !item.checked} : item))
  }

  function handleSubmit(e) {
    e.preventDefault();
    // const id = crypto.randomUUID();

    const item = {
      id: crypto.randomUUID(),
      name: input,
      date: date.toDateString(),
      checked: false,
      assigned: '',
      status: 'Unassigned',
      description: 'Default Description...!'
    }
    // console.log(item);
    handleAddItems(item);
    setInput('');
    
  }

  return (
    <main className="main">
      <h3>
      Today: {date.toDateString()}
      </h3>
      <Form onSubmit={handleSubmit} onInput={setInput} input={input}/>
      <ItemList items={items} onToggle={handleToggleItem} open={open} onOpen={onOpen} onEdit={onEdit}/>
    </main>
  );
}

function Form({onSubmit, input, onInput}) {

  return(
      <form className="add-form" onSubmit={onSubmit}>
        <input type="text" placeholder="Enter to do item..." value={input} onChange={(e)=>onInput(e.target.value)}/>
        <button type="submit"><i className="fa-sharp fa-solid fa-plus"></i></button>
      </form>
  )
}