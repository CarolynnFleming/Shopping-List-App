import { useListitems } from "../../context/ShoppinglistProvider"

export default function Header() {
    const { listitems } = useListitems();
  return
    <div>Number of List Items left: {listitems.length}</div>;
  
}
