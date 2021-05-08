import { FormEvent, useState } from 'react'
import { useRouter } from 'next/router'
import styles from '@/styles/Search.module.scss'

const Search = (): JSX.Element => {
  const [term, setTerm] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/songs/search?term=${term}`)
    setTerm('')
  }
  return (
    <div className={styles.search}>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          placeholder="Search Songs"
        />
      </form>
    </div>
  )
}

export default Search
