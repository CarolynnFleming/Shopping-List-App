import Header from './components/Layout/Header';
import { ShoppinglistProvider } from './context/ShoppinglistProvider';
import List from './views/ShoppingList/List';

export default function App() {
  return(
    <>
    <ShoppinglistProvider>
        <Header />
        <List />
    </ShoppinglistProvider>
    </>
  )
}
