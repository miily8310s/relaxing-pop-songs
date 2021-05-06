import { GetStaticProps } from 'next'
import Link from 'next/link'

import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'

export const HomePage = ({ songs }): JSX.Element => (
  <Layout>
    <h1>Home</h1>
    {songs.length === 0 && <h3>No songs...</h3>}
    {songs.map((song) => (
      <p key={song.id}>{song.name}</p>
    ))}
    {songs.length > 0 && (
      <Link href="/songs">
        <a className="btn-secondary">View All Songs</a>
      </Link>
    )}
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/songs`)
  const songs = await res.json()

  return {
    props: { songs: songs.slice(0, 3) },
    revalidate: 1,
  }
}

export default HomePage
