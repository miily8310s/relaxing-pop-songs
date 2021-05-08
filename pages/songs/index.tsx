import { GetStaticProps } from 'next'

import Layout from '@/components/Layout'
import SongItem from '@/components/SongItem'

import { Song } from '@/types/index'
import { API_URL } from '@/config/index'

export const SongsPage = ({ songs }: { songs: Song[] }): JSX.Element => {
  return (
    <Layout>
      <h1>All Recommend Songs</h1>
      {songs.length === 0 && <h3>No songs...</h3>}
      {songs.map((song) => (
        <SongItem key={song.slug} song={song} />
      ))}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${API_URL}/api/songs`)
  const songs = await res.json()

  return {
    props: { songs },
    revalidate: 1,
  }
}

export default SongsPage
