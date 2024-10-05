import { Item } from "./Item";


export function ItemList({ items, onToggle, open, onOpen, onEdit }) {

  return (
    <div className="item-list">
      <ul className="list-items">
        {items.map(item => (
          <Item item={item} onToggle={onToggle} key={item.id} open={open} onOpen={onOpen} onEdit={onEdit}/>
        ))}
      </ul>
    </div>
  );
}
