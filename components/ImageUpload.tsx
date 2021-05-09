import { useState, FormEvent, ChangeEvent } from 'react'
import { API_URL } from '@/config/index'
import styles from '@/styles/Form.module.scss'

const ImageUpload = ({
  songId,
  imageUploaded,
}: {
  songId: string
  imageUploaded: any
}): JSX.Element => {
  const [image, setImage] = useState(null)

  // const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('files', image)
    formData.append('ref', 'songs')
    formData.append('refId', songId)
    formData.append('field', 'image')

    const res = await fetch(`${API_URL}/upload`, {
      method: 'POST',
      body: formData,
    })

    if (res.ok) {
      imageUploaded()
    }
  }

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setImage(e.target.files[0])
  }

  return (
    <div className={styles.form}>
      <h1>Upload Event Image</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles.file}>
          <input type="file" onChange={handleFileChange} />
        </div>
        <input type="submit" value="Upload" className="btn" />
      </form>
    </div>
  )
}

export default ImageUpload
