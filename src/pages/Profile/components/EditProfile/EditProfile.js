import React from 'react'
import styles from './EditProfile.scss'
import UpdateForm from './components/UpdateForm/UpdateForm'
import { useDispatch, useSelector } from 'react-redux'
import { update } from 'actions/user'
import { getUpdateIsLoading } from 'selectors/user'

const EditProfile = () => {
  const dispatch = useDispatch()
  const updateIsLoading = useSelector(getUpdateIsLoading)

  const handleUpdateOnSubmit = (values) => {
    dispatch(update(values))
  }

  return (
    <div className={styles.component}>
      <UpdateForm
        onSubmit={handleUpdateOnSubmit}
        isSubmitting={updateIsLoading}
      />
    </div>
  )
}

export default EditProfile
