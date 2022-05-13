import { useState } from "react";
import GroceryList from "../../components/Groceries/GroceryList";
import { useListitems } from "../../context/ShoppinglistProvider";

export default function List() {
    const [newItem, setNewItem] = useState('');
    const { listitems, controlAddListitems, controlUpdateListitem, controlDeleteListitem } =
    useListitems();
  return (
    <div>List</div>
  )
}
