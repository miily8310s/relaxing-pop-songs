import Link from 'next/link'

export const Footer = (): JSX.Element => {
  return (
    <footer>
      <p>This is an app to find the relaxing pop songs...</p>
      <p>
        <Link href="/about">About This Project</Link>
      </p>
    </footer>
  )
}

export default Footer
