import { useState } from 'react'

export default function GroceryList({ listitem, onUpdate, onDelete }) {
    const [change, setChange] = useState(false);

    let item;

    if (change) {
        item = (
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    setChange(false);
                }}>
                    <input
                    value={listitem.text}
                    aria-label='edit'
                    onChange={(event) => {
                        onUpdate({
                            ...listitem,
                            text: event.target.value,
                        });
                    }}
                    />
                </form>
        )
    } else {

    }
  return (
    <div>GroceryList</div>
  )
}
