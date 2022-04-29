import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import List from './List';

describe('Futurama List - component test', () => {
  it('should render character images', async () => {
    // rendered component to the screen
    render(<List />);

    // find and check for all rendered images by the alt tag
    await screen.findAllByAltText(/character/i);
    //alternative test:
    // await screen.findAllByRole('img', { alt: 'character' });
  });
});

describe('Futurama List - behavioral test', () => {
  it("should render a list of character's quotes that are filterable", async () => {
    render(<List />);

    // Find an element with the text of "Loading..."
    screen.getByText(/loading/i);

    // find and check for all rendered images by the alt tag
    await screen.findAllByAltText(/character/i);

    // wait and see if search bar appears
    const searchInput = await screen.findByPlaceholderText(
      'Search quotes by character'
    );

    // type the word "Fry" into the search input
    userEvent.type(searchInput, 'Fry');
    screen.debug();

    // check that only "Fry" quotes render
    const result = await screen.findAllByAltText(/fry/i);
    expect(result).toHaveLength(2);
    // expect(result.textContent).toEqual('Fry:');
  });
});
