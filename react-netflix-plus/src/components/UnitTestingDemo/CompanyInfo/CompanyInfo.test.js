import { render, screen, fireEvent } from "@testing-library/react";
import CompanyInfo from "./CompanyInfo";
import renderer from 'react-test-renderer';

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

  // test for inline styles 
  it('has css style with text color green', () => {
    render(<CompanyInfo employeeCount="350000"/>);
    expect(screen.getByTestId('employeeCountEl')).toHaveStyle('color: rgb(0, 255, 0)');
  });

  // test for css class
  it('has a button with css class btn-primary', () => {
    render(<CompanyInfo />);
    expect(screen.getByTestId('joinCognizantBtn')).toHaveClass('btn-primary')
  });

  // testing events and states 
  it('displays countryName by default and updates UI onChange', () => {
    render(<CompanyInfo />);
    // find the input element
    const countryInput = screen.getByPlaceholderText('Enter Your Country Name');
    // now checking whether onChange is working or not
    // let's trigger the event  -- using fireEvent 
    const mockEventObj = { // preparing the mock event object with target value being Italy
      target: {
        value: 'Italy'
      }
    }
    fireEvent.change(countryInput, mockEventObj);
    // finally checking if the input element is showing the entered country
    expect(countryInput.value).toBe('Italy');
    expect(screen.getByTestId('visitWebsiteEl')).toHaveTextContent('Visit Cognizant Italy website');
  });

  it('sets right relocation after entering relocationBranchName and click on Relocate Button', () => {
    render(<CompanyInfo />);

    // find the input element
    const relocationInput = screen.getByPlaceholderText('Enter the location you want to relocate to');
    // now checking whether onChange is working or not
    // let's trigger the event  -- using fireEvent 
    const mockEventObj = { // preparing the mock event object with target value being Italy
      target: {
        value: 'Chennai'
      }
    }
    fireEvent.change(relocationInput, mockEventObj);
    // finally checking if the input element is showing the entered relocation
    expect(relocationInput.value).toBe('Chennai');

    // find the button by data-testid 
    //trigger the click event of relocateBtn
    fireEvent.click(screen.getByTestId('relocateBtn'));

    // find the paragraph in which working Location Info is displayed and assert
    expect(screen.getByTestId('workingLocationInfo')).toHaveTextContent('I am working in Chennai');
  });

  it('has default working location - bangalore', () => {
    render(<CompanyInfo />);

    expect(screen.getByTestId('workingLocationInfo')).toHaveTextContent('I am working in Bangalore');
  });

  // snapshot testing 
  it('has right snapshot of CompanyInfo Component', () => {
    // to take a snapshot -- we need a tool -- react-test-renderer 
    // taking a snapshot and converting it to JSON
    // [RECOMMENDED]: take snapshot with all necessary props
    const snapshotJSON = renderer.create(<CompanyInfo 
      name='Google Inc' 
      foundedYear='1996' 
      employeeCount='350000'/>).toJSON();

    // let's assert with the matcher -- toMatchSnapshot()
    expect(snapshotJSON).toMatchSnapshot();
  });

})