import Link from 'next/link'

export const Header = (): JSX.Element => {
  return (
    <header>
      <div>
        <Link href="/">
          <a>Relaxing Songs</a>
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/songs">Songs</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
