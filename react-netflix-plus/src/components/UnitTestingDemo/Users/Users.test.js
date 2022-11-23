// API Testing 
import { render, screen } from "@testing-library/react";
import Users from "./Users";

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


