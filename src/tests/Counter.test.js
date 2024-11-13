import * as React from 'react';
import { render, screen, fireEvent  } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Counter from '../components/Counter';


//beforeEach(() => {
  //Renders the Counter
  //render(<Counter />);
//})

test('renders counter message', () => {
  render(<Counter />);
  //Finds the counter message and checks if it's in the document
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  render(<Counter />);
  //Finds the count ID and checks if it's 0
  const counterValue = screen.getByTestId("count");
  expect(counterValue).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  render(<Counter />);
  //Finds the count ID and increment button
  const counterIncr = screen.getByTestId('count');
  const incrementButton = screen.getByText("+");
  //Clicks the increment button and checks if it is updated to 1
  fireEvent.click(incrementButton);
  expect(counterIncr).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  render(<Counter />);
  //Finds the count ID and decrement button
  const counterDec = screen.getByTestId('count');
  const decrementButton = screen.getByText("-");
  //Clicks the decrement button and checks if it is updated to -1
  fireEvent.click(decrementButton);
  expect(counterDec).toHaveTextContent("-1");
});
