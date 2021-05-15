import Layout from '@/components/Layout'
import DashboardSong from '@/components/DashboardSong'
import { GetServerSideProps } from 'next'
import parseCookies from '@/helpers/index'
import { API_URL } from '@/config/index'
import { Song } from "@/types/index";
import styles from '@/styles/Dashboard.module.scss'

const DashboardPage = ({ songs }: { songs: Song[] }): JSX.Element => {
  const deleteSong = (id: string) => {
    console.log(id)
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
    },
  }
}

export default DashboardPage
