import { useState } from "react";

export function Main({date}) {
  const [input, setInput] = useState('');
  const [items, setItems] = useState([])

  function handleSubmit(e) {
    e.preventDefault();
    const id = crypto.randomUUID();

    const item = {
      id,
      name: input,
      date: date.toDateString(),
      checked: false,
    }
    // console.log(item);
    setItems(items => [...items, item]);
    setInput('');
    console.log(items);
  }

  return (
    <main className="main">
      <h4>
      Today: {date.toDateString()}
      </h4>
      <form className="add-form" onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter to do item..." value={input} onChange={(e)=>setInput(e.target.value)}/>
        <button type="submit"><i className="fa-sharp fa-solid fa-plus"></i></button>
      </form>
      <div className="list-items">
        <ul>
          {items.map(item => {
            <li key={item.id}><span><input type="checkbox" value={item.checked}></input>{item.name}</span><span>{item.date}</span></li>
          })}
        </ul>
      </div>
    </main>
  );
}
