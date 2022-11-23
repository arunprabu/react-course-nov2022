// Testing Pattern: AAA 

//Arrange
import { render, screen } from '@testing-library/react';
import App from './App'; // What comp are we taking up for testing?

// Test Suite = Group of related test specs
xdescribe('App', () => {

  // #1 test spec
  test('has proper App comp', () => {
    expect(App).toBeTruthy();
  });

  // #2 test spec / test case
  it('has Welcome to React Netflix Plus!!! text', () => {
    // Act
    render(<App />); // This will render the App comp in doc body
    // Let's find the following text in element
    const welcomeTextEl = screen.getByText('Welcome to React Netflix Plus!!!');

    // Assert
    expect(welcomeTextEl).toBeInTheDocument();
  });
});


