import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '@/components/Layout'
import { API_URL } from '@/config/index'
import styles from '@/styles/Song.module.scss'

export const SongPage = ({ song }): JSX.Element => {
  const deleteEvent = (e: MouseEvent<HTMLAnchorElement>) => {
    console.log('delete')
  }

  return (
    <Layout>
      <div className={styles.song}>
        <div className={styles.controls}>
          <Link href={`/songs/edit/${song.id}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>
          {song.date} at {song.time}
        </span>
        <h1>{song.name}</h1>

        <h3>Performers:</h3>
        <p>{song.performers}</p>
        <h3>Description:</h3>
        <p>{song.description}</p>
        <h3>Venue: {song.venue}</h3>
        <p>{song.address}</p>

        <Link href="/songs">
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/api/songs/`)
  const songs = await res.json()

  const paths = songs.map((song) => {
    return {
      params: { slug: song.slug },
    }
  })

  return {
    paths,
    fallback: true,
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const slug = context.params.slug
  const res = await fetch(`${API_URL}/api/songs/${slug}`)
  const songs = await res.json()

  if (!songs) {
    return {
      notFound: true,
    }
  }
  return {
    props: {
      song: songs[0],
    },
    revalidate: 1,
  }
}

export default SongPage
