// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SparkHelix title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SparkHelix/i);
    expect(titleElement).toBeInTheDocument();
});
