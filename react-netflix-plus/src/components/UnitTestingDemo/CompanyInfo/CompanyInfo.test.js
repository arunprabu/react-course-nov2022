import { render, screen } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";

describe('CompanyInfo', () => { 
  // testing props
  it('receives name prop and displays in JSX', () => {
    render(<CompanyInfo name="ABC Inc" />);
    const companyName = screen.getByTestId('companyNameHeading').textContent;
    expect(companyName).toBe('ABC Inc');
  });

  // test foundedYear prop
  it('receives foundedYear prop and displays in JSX', () => {
    render(<CompanyInfo foundedYear="1996" />);
    // expect(screen.getByTestId('foundedYear').textContent).toBe('Founded In: 1996');
    expect(screen.getByTestId('foundedYear')).toHaveTextContent('Founded In: 1996');
  });

  // test by placeholder
  it(`has an input with 'Enter Your Country Name' as placeholder text`, () => {
    render(<CompanyInfo />);
    expect(screen.getByPlaceholderText('Enter Your Country Name')).toBeTruthy();
  });


})