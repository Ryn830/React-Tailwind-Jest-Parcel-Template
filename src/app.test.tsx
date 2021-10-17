import * as React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import { App } from './app'

test('renders App heading', () => {
  render(<App />)
  expect(screen.getByRole('heading', { name: 'App' })).toBeInTheDocument()
})
