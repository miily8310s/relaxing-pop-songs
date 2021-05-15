import { useRouter } from 'next/router'
import Layout from '@/components/Layout'
import DashboardSong from '@/components/DashboardSong'
import { GetServerSideProps } from 'next'

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import parseCookies from '@/helpers/index'
import { API_URL } from '@/config/index'
import { Song } from "@/types/index";
import styles from '@/styles/Dashboard.module.scss'

const DashboardPage = ({ songs, token }: { songs: Song[], token: any }): JSX.Element => {
  const router = useRouter()
  const deleteSong = async(id: string) => {
    if (confirm('Are you really delete song?')) {
      const res = await fetch(`${API_URL}/songs/${id}`, {
        method: 'DELETE',
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      const data = await res.json()
      if (!res.ok) {
        toast.error(data.message)
      } else {
        router.push('/songs')
      }
    }
  }
  return (
    <Layout title="User Dashboard">
      <div className={styles.dash}>
        <h1>Dashboard</h1>
        <h3>My Songs</h3>
        {songs.map((song) => (
          <DashboardSong key={song.id} song={song} handleDelete={deleteSong} />
        ))}
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const { token } = parseCookies(req)
  const res = await fetch(`${API_URL}/songs/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
  const songs = await res.json()
  return {
    props: {
      songs,
      token
    },
  }
}

export default DashboardPage
