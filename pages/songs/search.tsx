import qs from 'qs'

import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Link from 'next/link'

import Layout from '@/components/Layout'
import SongItem from '@/components/SongItem'

import { Song } from '@/types/index'
import { API_URL } from '@/config/index'

export const SearchPage = ({ songs }: { songs: Song[] }): JSX.Element => {
  const router = useRouter()

  return (
    <Layout title="Search Results">
      <Link href="/songs">Go Back</Link>
      <h1>Search Result for {router.query.term}</h1>
      {songs.length === 0 && <h3>No songs result</h3>}
      {songs.map((song) => (
        <SongItem key={song.slug} song={song} />
      ))}
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { term },
}) => {
  const query = qs.stringify({
    _where: {
      _or: [
        { name_contains: term },
        { artist_contains: term },
        { description_contains: term },
        { album_contains: term },
      ],
    },
  })

  const res = await fetch(`${API_URL}/songs?${query}`)
  const songs = await res.json()

  return {
    props: { songs },
  }
}

export default SearchPage
