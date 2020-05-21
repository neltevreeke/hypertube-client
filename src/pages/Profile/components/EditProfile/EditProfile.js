import React, { useState } from 'react'
import styles from './EditProfile.scss'
import UpdateForm from './components/UpdateForm/UpdateForm'
import { useDispatch, useSelector } from 'react-redux'
import { update } from 'actions/user'
import { getUpdateIsLoading } from 'selectors/user'
import EditableImage from './components/EditableImage/EditableImage'
import {
  // getCloudinaryUrlFromPublicId,
  uploadImage
} from 'utils/cloudinary'

const EditProfile = () => {
  const dispatch = useDispatch()
  const updateIsLoading = useSelector(getUpdateIsLoading)
  const [isUploading, setIsUploading] = useState(false)

  const handleUpdateOnSubmit = (values) => {
    dispatch(update(values))
  }

  const handleAddImageChange = async event => {
    const [image] = event.target.files

    setIsUploading(true)

    const {
      public_id: cloudinaryPublicId
    } = await uploadImage({
      image
    })

    dispatch(update({
      photos: cloudinaryPublicId
    }))

    setIsUploading(false)
  }

  return (
    <div className={styles.component}>
      <EditableImage
        isUploading={isUploading || updateIsLoading}
        onChange={handleAddImageChange}
      />
      <UpdateForm
        onSubmit={handleUpdateOnSubmit}
        isSubmitting={updateIsLoading}
      />
    </div>
  )
}

export default EditProfile
