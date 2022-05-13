import { useState } from "react";
import GroceryList from "../../components/Groceries/GroceryList";
import { useListitems } from "../../context/ShoppinglistProvider";

export default function List() {
    const [newItem, setNewItem] = useState('');
    const { listitems, controlAddListitems, controlUpdateListitem, controlDeleteListitem } =
    useListitems();

    const controlSubmit = (event) => {
        event.preventDefault();
        controlAddListitems(newItem);
        setNewItem('');
    };
  return (
    <div>List</div>
  )
}
