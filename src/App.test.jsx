/**
 * @jest-environment jsdom
 */

import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';
import { BrowserRouter } from 'react-router';

describe('App', () => {
  it('renders', () => {
    render(<BrowserRouter><App/></BrowserRouter>);
    expect(screen.getByText(/hello/i).localName).toEqual('h1')
    expect(screen.getAllByText(/moon/i)[0].localName).toEqual('a')
  });
});