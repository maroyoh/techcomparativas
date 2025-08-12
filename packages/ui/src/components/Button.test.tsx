import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  it('renders with default variant', () => {
    render(<Button>Hola</Button>);
    const btn = screen.getByRole('button');
    expect(btn).toHaveTextContent('Hola');
  });
});