import renderer from 'react-test-renderer';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

import App from './App';

const Heading = 'Math Magicians';
const home = 'Math Magicians';
const quote = 'Mathematics is not about numbers, equations, computations, or algorithems: it is about understanding. -William Paul Thurston';
const calculatorHeading = 'Lets do some math!';

describe('test rendering', () => {
  test('Test for page rendering', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('navigation test', () => {
  test('test if home is displayed', () => {
    render(<App />);
    const titles = screen.getAllByRole('heading');
    expect(titles[0]).toHaveTextContent(Heading);
    expect(titles[1]).toHaveTextContent(home);
    expect(titles.indexOf(quote)).toBe(-1);
    expect(titles.indexOf(calculatorHeading)).toBe(-1);
  });

  test('test if the quotes page works', () => {
    render(<App />);
    const btnQuote = screen.getByText('Quote');
    fireEvent.click(btnQuote);
    const titles = screen.getAllByRole('heading');
    expect(titles[1]).toHaveTextContent(quote);
    expect(titles.indexOf(home)).toBe(-1);
    expect(titles.indexOf(calculatorHeading)).toBe(-1);
  });

  test('test naviation to calculator', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const titles = screen.getAllByRole('heading');
    expect(titles[1]).toHaveTextContent(calculatorHeading);
    expect(titles.indexOf(quote)).toBe(-1);
    expect(titles.indexOf(home)).toBe(-1);
  });
});

describe('Test basic computations', () => {
  test('test additions to results div', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText('0')[0];
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('3'));

    expect(result).toHaveTextContent('9 + 23');
  });

  test('test additions to results div second try', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText('0')[0];
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('9'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('1'));

    expect(result).toHaveTextContent('9921');
  });

  test('test basic addition results', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText('0')[0];
    fireEvent.click(screen.getByText('AC'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('='));

    expect(result).toHaveTextContent((11 + 2).toString());
  });

  test('test basic addition results', () => {
    render(<App />);
    const btnCalculator = screen.getByText('Calculator');
    fireEvent.click(btnCalculator);
    const result = screen.getAllByText('0')[0];
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('1'));
    fireEvent.click(screen.getByText('+'));
    fireEvent.click(screen.getByText('2'));
    fireEvent.click(screen.getByText('AC'));

    expect(result).toHaveTextContent('0');
  });
});
