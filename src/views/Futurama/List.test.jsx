import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { futuramaApiData } from '../../tests/futuramaData';
import List from './List';

const server = setupServer(
  rest.get('https://futuramaapi.herokuapp.com/api/quotes', (req, res, ctx) => {
    return res(ctx.json(futuramaApiData));
  })
);

describe('List', () => {
  // Listen for server start
  beforeAll(() => server.listen());
  // Close server when complete
  afterAll(() => server.close());

  test("should render a list of character's quotes that are filterable - behavioral test", async () => {
    render(<List />);

    // Find an element with the text of "Loading..."
    screen.getByText(/loading/i);
    await waitForElementToBeRemoved(await screen.findByText(/loading/i));

    // find and check for all rendered images by the alt tag
    await screen.findAllByAltText(/character/i);

    // // wait and see if search bar appears
    const searchInput = await screen.findByPlaceholderText(
      'Search quotes by character'
    );

    // // type the word "Fry" into the search input
    userEvent.type(searchInput, 'Fry');

    // // check that only "Fry" quotes render
    waitFor(() => {
      const result = screen.getAllByAltText(/fry/i);
      expect(result).toHaveLength(2);
      expect(result.textContent).toEqual('Fry');
    });
  });

  test('should render the header - component test', async () => {
    render(<List />);

    await waitForElementToBeRemoved(screen.getByText(/loading.../i));
    const header = await screen.findByText(
      /Can't get enough Futurma!!! See what the characters have to say!/i
    );
    expect(header).toBeInTheDocument();
  });
});
