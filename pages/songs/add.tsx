import parseCookies from '@/helpers/index'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import React, { useState } from 'react'
import { GetServerSideProps } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'

import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.scss'

export const AddSongPage = ({ token }): JSX.Element => {
  const [values, setValues] = useState({
    name: '',
    artist: '',
    label: '',
    album: '',
    date: '',
    description: '',
    youtube: '',
    spotify: '',
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

    const res = await fetch(`${API_URL}/songs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(values),
    })

    if (!res.ok) {
      if (res.status === 403 || res.status === 401) {
        toast.error('No token included')
        return
      }
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
      <h1>Add Song</h1>
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
              value={values.date}
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
          <input type="submit" value="Add Song" className="btn" />
        </div>
      </form>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async({ req }) => {
  const { token } = parseCookies(req)

  return {
    props: {
      token,
    },
  }
}

export default AddSongPage
