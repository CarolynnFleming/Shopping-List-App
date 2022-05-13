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

                    <button type="submit" aria-label='save changes'>
                        Save
                    </button>
                </form>
        );
    } else {
        item = (
            <>
            <p style={{ textDecoration: listitem.don ? 'line-through' : null }}>
                {listitem.text}
            </p>
            </>
        )

    }
  return (
    <div>GroceryList</div>
  )
}
