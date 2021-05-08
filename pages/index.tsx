import { GetStaticProps } from 'next'
import Link from 'next/link'

import Layout from '@/components/Layout'
import SongItem from '@/components/SongItem'

import { Song } from '@/types/index'
import { API_URL } from '@/config/index'

export const HomePage = ({ songs }: { songs: Song[] }): JSX.Element => (
  <Layout>
    <h1>Home</h1>
    {songs.length === 0 && <h3>No songs...</h3>}
    {songs.map((song) => (
      <SongItem key={song.slug} song={song} />
    ))}
    {songs.length > 0 && (
      <Link href="/songs">
        <a className="btn-secondary">View All Songs</a>
      </Link>
    )}
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/songs`)
  const songs = await res.json()

  return {
    props: { songs },
    revalidate: 1,
  }
}

export default HomePage
