import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import NavLink from '@/components/NavLink'

vi.mock('next/link', () => {
  return {
    default: ({ href, children, ...props }: any) => (
      <a href={href} {...props}>{children}</a>
    ),
  }
})

const useRouterMock = vi.fn()
vi.mock('next/router', () => ({ useRouter: () => useRouterMock() }))

describe('NavLink', () => {
  it('adds active classes when pathname matches', () => {
    useRouterMock.mockReturnValue({ pathname: '/dashboard' })
    render(<NavLink href="/dashboard">Dash</NavLink>)
    const link = screen.getByRole('link', { name: /dash/i })
    expect(link.className).toMatch('border-b-2')
    expect(link.className).toMatch('border-green-500')
    expect(link.className).toMatch('focus-visible:ring-2')
    expect(link.className).toMatch('focus-visible:ring-zion-purple')
  })

  it('does not add active classes when pathname differs', () => {
    useRouterMock.mockReturnValue({ pathname: '/other' })
    render(<NavLink href="/dashboard">Dash</NavLink>)
    const link = screen.getByRole('link', { name: /dash/i })
    expect(link.className).not.toMatch('border-b-2 border-green-500')
  })
})
