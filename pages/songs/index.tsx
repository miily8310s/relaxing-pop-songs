import { GetServerSideProps } from 'next'

import Layout from '@/components/Layout'
import SongItem from '@/components/SongItem'
import Pagination from '@/components/Pagination'

import { Song } from '@/types/index'
import { API_URL, PER_PAGE } from '@/config/index'

export const SongsPage = ({
  songs,
  page,
  total,
}: {
  songs: Song[]
  page: number
  total: number
}): JSX.Element => {
  return (
    <Layout>
      <h1>All Recommend Songs</h1>
      {songs.length === 0 && <h3>No songs...</h3>}
      {songs.map((song) => (
        <SongItem key={song.slug} song={song} />
      ))}
      <Pagination page={page} total={total} />
    </Layout>
  )
}

// "query" key of context keys is only available for GetServerSideProps
// unavailable for GetStaticProps
export const getServerSideProps: GetServerSideProps = async ({
  query: { page = 1 },
}) => {
  // Calculate start page
  const start = +page === 1 ? 0 : (+page - 1) * PER_PAGE

  // Fetch total/count
  const totalRes = await fetch(`${API_URL}/songs/count`)
  const total = await totalRes.json()

  // Fetch songs
  const res = await fetch(
    `${API_URL}/songs?_sort=date:ASC&_limit=${PER_PAGE}&_start=${start}`
  )
  const songs = await res.json()

  return {
    props: { songs, page: +page, total },
  }
}

export default SongsPage
