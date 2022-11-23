// API Testing 
import { render, screen, waitFor } from "@testing-library/react";
import { fetchApi } from "../../../utils/fetchApi";
import Users from "./Users";

// setting up mock for fetchApi 
// mocking a module with an auto-mocked version when it is needed
jest.mock('../../../utils/fetchApi'); 

/* The following is NOT RECOMMENDED */
// it('fetches users via api call', async() => {
//   render(<Users />);

//   const userNameEl = await screen.findByText('Ervin Howell');
//   expect(userNameEl).toBeInTheDocument();
// });

/* 3 Disadv / Challenges in testing the API calls in the above way*/
/*
  1. Time Consuming
  2. Data Inconsistency (no guarantee for the sample data like Ervin Howell to be available)
  3. Availability of REST API (may be down or still in dev)
*/

// Solution: Mocking REST API Data
// Note: The above test spec should be removed. Only then, the following can be tested
// POSTIVE TEST SPEC
it('fetches userList properly via API Call [MOCKING]', async() => {
  // prepare the mock data for users
  const mockUserList = [
    {
      id: 1,
      name: 'Steve',
      email: 's@t.com',
      phone: '2342342353'
    },
    {
      id: 453,
      name: 'John',
      email: 'j@k.com',
      phone: '76585676'
    }
  ];
  fetchApi.mockResolvedValue(mockUserList);
  render(<Users />);

  expect(await screen.findByText(/Steve/i)).toBeInTheDocument();
});

// NEGATIVE TEST SPEC
it('renders error properly during API Call [MOCKING]', async () => {
  fetchApi.mockRejectedValue({
    errorCode: '101',
    errorMessage: 'Some Error Occurred! Try again later.'
  });
  
  render(<Users />);
  expect(await screen.findByText(/Some Error Occurred! Try again later./i)).toBeInTheDocument();
});


