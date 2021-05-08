import { FaPencilAlt, FaTimes } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'
import { GetStaticProps, GetStaticPaths } from 'next'

import Layout from '@/components/Layout'

import { Song } from '@/types/index'
import { API_URL } from '@/config/index'
import styles from '@/styles/Song.module.scss'

export const SongPage = ({ song }: { song: Song }): JSX.Element => {
  const deleteEvent = () => {
    // console.log('delete')
  }

  const youtubeURL = song.youtube !== '' ? song.youtube : '#'
  const spotifyURL = song.spotify !== '' ? song.spotify : '#'

  return (
    <Layout>
      <div className={styles.song}>
        <div className={styles.controls}>
          <Link href={`/songs/edit/${song.slug}`}>
            <a>
              <FaPencilAlt /> Edit Event
            </a>
          </Link>
          <a href="#" className={styles.delete} onClick={deleteEvent}>
            <FaTimes /> Delete Event
          </a>
        </div>

        <span>{song.date}</span>
        <h1>{song.name}</h1>
        {song.image && (
          <div className={styles.image}>
            <Image
              src={song.image.formats.medium.url}
              width={960}
              height={600}
            />
          </div>
        )}

        <h3>Artist:</h3>
        <p>{song.artist}</p>
        <h3>Description:</h3>
        <p>{song.description}</p>
        <h3>Youtube: </h3>
        <Link href={youtubeURL}>
          <a target="_blank">Youtube Video Link</a>
        </Link>
        <h3>Spotify: </h3>
        <Link href={spotifyURL}>
          <a target="_blank">Spotify Truck Link</a>
        </Link>

        <Link href="/songs">
          <a className={styles.back}>{'<'} Go Back</a>
        </Link>
      </div>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`${API_URL}/songs/`)
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
  const res = await fetch(`${API_URL}/songs?slug=${slug}`)
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
