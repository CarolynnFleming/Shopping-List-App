import { render, screen } from '@testing-library/react';
import App from './App';

test('it should add a listitem delete a listitem and display a listitem', async () => {
    render(
        <App />
    )
screen.getByPlaceholderText('Add a new item');
// screen.getByRole('checkbox', { checked: true })
screen.getByLabelText('Edit Grab some milk')
screen.getByLabelText('Delete Grab some milk')
})