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
            <p style={{ textDecoration: listitem.done ? 'line-through' : null }}>
                {listitem.text}
            </p>
            <button 
            type="button"
            onClick={() => setChange(true)}
            aria-label={`Edit ${listitem.text}`}>
                Edit
            </button>
            </>
        );

    }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        <input
        type="checkbox"
        aria-checked="true"
        checked={listitem.done}
        onChange={(event) => {
        onUpdate({
            ...listitem,
            done: event.target.checked,

        });
        }}
        />
        {item}
        <button
        type="button"
        onClick={() => onDelete(listitem.id)}
        aria-label={`Delete ${listitem.text}`}>
            Delete
        </button>
        </div>
  );
}
