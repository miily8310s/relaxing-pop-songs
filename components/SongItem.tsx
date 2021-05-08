import Link from 'next/link'
import styles from '@/styles/SongItem.module.scss'

const SongItem = ({ song }): JSX.Element => (
  <div className={styles.event}>
    <div className={styles.info}>
      <span>
        {song.date} at {song.time}
      </span>
      <h3>{song.name}</h3>
    </div>

    <div className={styles.link}>
      <Link href={`/songs/${song.slug}`}>
        <a className="btn">Details</a>
      </Link>
    </div>
  </div>
)

export default SongItem
