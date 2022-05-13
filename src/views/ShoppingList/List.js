import { useState } from "react";
import GroceryList from "../../components/Groceries/GroceryList";
import { useListitems } from "../../context/ShoppinglistProvider";

export default function List() {
    const [newItem, setNewItem] = useState('');
    const { listitems, controlAddListitem, controlUpdateListitem, controlDeleteListitem } =
    useListitems();

    const controlSubmit = (event) => {
        event.preventDefault();
        controlAddListitem(newItem);
        setNewItem('');
    };
  return (
   <>
   <h1>List Item</h1>
   <form onSubmit={controlSubmit}>
       <input type="text"
       name="newItem"
       placeholder="Add a new item"
       value={newItem}
       onChange={(event) => setNewItem(event.target.value)} />
   </form>
   <ul>
       {listitems.map((listitem) => (
           <li key={listitem.id}>
               <GroceryList
               listitem={listitem}
               onUpdate={controlUpdateListitem}
               onDelete={controlDeleteListitem} />
           </li>
       ))}
   </ul>
   </>
  );
}
