// Testing Pattern: AAA

// Arrange
import { render, screen } from "@testing-library/react";
import UnitTestingDemo from "./UnitTestingDemo";

describe('UnitTestingDemo', () => {

  it(`has 'Unit Testing Examples' text`, () => {
    
    // Act 
    render(<UnitTestingDemo />);
    // using regex to find the text with case insensitive
    const h1Element = screen.getByText(/Unit Testing/i); // partial search is also possible

    // Assert
    expect(h1Element).toBeInTheDocument();
  });


})