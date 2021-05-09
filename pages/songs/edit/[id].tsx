import dayjs from 'dayjs'
// import { FaImage } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from 'react'

import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'

import { Song } from '@/types/index'

import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.scss'

export const EditSongPage = ({ song }: { song: Song }): JSX.Element => {
  const [values, setValues] = useState({
    name: song.name,
    artist: song.artist,
    label: song.label,
    album: song.album,
    date: song.date,
    description: song.description,
    youtube: song.youtube,
    spotify: song.spotify,
  })

  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const hasEmptyFields = Object.values(values).some(
      (element) => element === ''
    )

    if (hasEmptyFields) {
      toast.error('Please set values in all fields...')
    }

    const res = await fetch(`${API_URL}/songs/${song.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      toast.error('Something Went Wrong')
    } else {
      const song = await res.json()
      router.push(`/songs/${song.slug}`)
    }
  }

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  return (
    <Layout title="Add New Song">
      <Link href="/songs">Go Back</Link>
      <h1>Edit Song</h1>
      <ToastContainer />
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.grid}>
          <div>
            <label htmlFor="name">Song Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={values.name}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="artist">Artist</label>
            <input
              type="text"
              id="artist"
              name="artist"
              value={values.artist}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="label">Label</label>
            <input
              type="text"
              id="label"
              name="label"
              value={values.label}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="album">album</label>
            <input
              type="text"
              id="album"
              name="album"
              value={values.album}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Release Date</label>
            <input
              type="date"
              id="date"
              name="date"
              value={dayjs(values.date).format('YYYY-MM-DD')}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Description</label>
            <textarea
              // type="text"
              id="description"
              name="description"
              value={values.description}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Youtube Link</label>
            <input
              type="text"
              id="youtube"
              name="youtube"
              value={values.youtube}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <label htmlFor="name">Spotify Link</label>
            <input
              type="text"
              id="spotify"
              name="spotify"
              value={values.spotify}
              onChange={handleInputChange}
            />
          </div>
          <input type="submit" value="Edit Event" className="btn" />
        </div>
      </form>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const id = context.params.id
  const res = await fetch(`${API_URL}/songs/${id}`)
  const song = await res.json()

  return {
    props: {
      song,
    },
  }
}

export default EditSongPage
