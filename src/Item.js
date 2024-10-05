// import { useState } from "react";

export function Item({ item, onToggle, open, onOpen, onEdit }) {

  return (
    <li className="list-item">
      {/* <input type="checkbox" value={item.checked} onChange={()=>onToggle(item.id)}/> */}
      <i className={item.checked ? "fa-solid fa-square-full" : "fa-regular fa-square-full"} onClick={() => onToggle(item.id)}></i>
      <div className="item-body">
        <span className={item.checked ? "completed" : ""}>{item.name}</span>
        {/* <span className="small-text">{item.date.slice(4)}</span> */}
      </div>
      <div className="item-actions">
        <i className="fa-solid fa-pencil" onClick={()=>onEdit(item, true)}></i>
        <i className="fa-solid fa-xmark"></i>
      </div>
    </li>
  );
}


