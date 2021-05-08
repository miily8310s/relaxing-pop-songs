import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/SongItem.module.scss'
import { Song } from '@/types/index'

const SongItem = ({ song }: { song: Song }): JSX.Element => (
  <div className={styles.event}>
    <div className={styles.img}>
      <Image
        src={
          song.image
            ? song.image.formats.thumbnail.url
            : '/images/air-balloons.jpg'
        }
        width={170}
        height={100}
      />
    </div>
    <div className={styles.info}>
      <span>Release Date: {song.date}</span>
      <h3>{song.name}</h3>
      <h4>{song.artist}</h4>
    </div>

    <div className={styles.link}>
      <Link href={`/songs/${song.slug}`}>
        <a className="btn">Details</a>
      </Link>
    </div>
  </div>
)

export default SongItem
