import Link from "next/link";
import { FaPencilRuler, FaTimesCircle } from "react-icons/fa";
import { Song } from "@/types/index";
import styles from '@/styles/DashboardSong.module.scss'

const DashboardSong = ({
  song,
  handleDelete,
}: {
  handleDelete: any,
  song: Song
}): JSX.Element => {
  return (
    <div className={styles.song}>
      <h4>
        <Link href={`/songs/${song.slug}`}>
          <a>{song.name}</a>
        </Link>
      </h4>
      <Link href={`/songs/edit/${song.id}`}>
        <a className={styles.edit}>
          <FaPencilRuler /> <span>Edit Song</span>
        </a>
      </Link>
      <a
        href="#"
        className={styles.delete}
        onClick={() => handleDelete(song.id)}
      >
        <FaTimesCircle /> <span>Delete</span>
      </a>
    </div>
  )
}

export default DashboardSong