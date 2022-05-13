import { useListitems } from "../../context/ShoppinglistProvider"

export default function Header() {
    const { listitems } = useListitems();
  return (
    <div>Header</div>
  )
}
