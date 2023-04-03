import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import HomePage from '@pages/Home.page';

describe('HomePage', () => {
  it('renders', () => {
    render(<HomePage />);
  });

  it('contains the correct text', async () => {
    render(<HomePage />);

    expect(await screen.findByText('Home Page')).toBeInTheDOM();
  });
});
