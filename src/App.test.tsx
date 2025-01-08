import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './App'

describe('App Component', () => {
  it('renders the Hello message', () => {
    render(<App />)
    const messageElement = screen.getByText('Hello')
    expect(messageElement).toBeInTheDocument()
  })
})
