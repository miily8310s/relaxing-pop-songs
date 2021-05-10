import Link from 'next/link'
import { PER_PAGE } from '@/config/index'

export const Pagination = ({
  page,
  total,
}: {
  page: number
  total: number
}): JSX.Element => {
  const lastPage = Math.ceil(total / PER_PAGE)
  return (
    <>
      {page > 1 && (
        <Link href={`/songs?page=${page - 1}`}>
          <a className="btn-secondary">Prev</a>
        </Link>
      )}

      {page < lastPage && (
        <Link href={`/songs?page=${page + 1}`}>
          <a className="btn-secondary">Next</a>
        </Link>
      )}
    </>
  )
}

export default Pagination
