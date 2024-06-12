import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Header from './Header';
import Homepage from './Homepage';;
import Footer from './Footer';
import Form from './Form';


test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/little-lemon/i);
  expect(linkElement).toBeInTheDocument();
});

// Nav testing************************************************************
test('my Nav test', () => {
  render(<Nav />);
  const navlink1 = screen.getByText(/Home/i);
  const navlink2 = screen.getByText(/Reservations/i);
  expect(navlink1).toBeInTheDocument();
  expect(navlink2).toBeInTheDocument();
  
});



// Header testing**************************************************
test('my Header test', () => {
  render(<Header />);
  const linkElement = screen.getByText(/Little Lemon/i);
  expect(linkElement).toBeInTheDocument();

});


test('alt text tesing of image in Header', () => {
  render(<Header />);
  const img = screen.getByAltText("banner image");
  expect(img).toBeInTheDocument();

});


test('test click event of "Reserve Table" button', () => {
  //custom function to handle click
  function handleClick() {
    console.log('Button clicked!');
  }

  const { getByText } = render(<Header onClick={handleClick} />);
  
  const button = getByText('Reserve Table');
  fireEvent.click(button);
});




// Bookinform testing ****************************************
test("Booking form testing", () => {
  render(<Form />);

  // Define new values for each input field
  const newDate = '2024-06-15';
  const newTime = '12:30';


  // changing the values to new values.
  const dateInput = screen.getByLabelText('Date:');
  fireEvent.change(dateInput, { target: { value: newDate } });

  const timeInput = screen.getByLabelText('Time:');
  fireEvent.change(timeInput, { target: { value: newTime } });

  

  // checking that the values has been changed or not.
  expect(dateInput.value).toBe(newDate);
  expect(timeInput.value).toBe(newTime);
  expect(occasionInput.value).toBe(newOccasion);

});













