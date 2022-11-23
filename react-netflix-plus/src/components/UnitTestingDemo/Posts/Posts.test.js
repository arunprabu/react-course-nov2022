import { render, screen } from "@testing-library/react";
import { mockFetch } from "./mocks/mockFetch";
import Posts from "./Posts";

describe('Posts', () => {

  // setting up spy
  beforeEach( () => {
    // prepare to attach a spy 
    jest.spyOn(window, 'fetch').mockImplementation(mockFetch)

  });

  afterEach( () => {
    jest.resetAllMocks();
  });

  it('renders blog posts properly [SPY]', async() => {
    render(<Posts />);

    expect(await screen.findByText('cricket match #1 result')).toBeInTheDocument();
  });

 
});