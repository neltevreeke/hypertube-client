import React from 'react'
import styles from './EditCommentForm.scss'

import * as Yup from 'yup'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'
import Button from 'components/Button/Button'

const validationSchema = Yup.object().shape({
  commentContent: Yup.string()
    .min(2, 'Too short!')
    .max(75, 'Too long!')
    .required('Required')
})

const EditCommentForm = ({
  onSubmit,
  isSubmitting,
  initialValues
}) => {
  return (
    <div className={styles.component}>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                // label='Place new comment'
                id='commentContent'
                name='commentContent'
                type='text'
                placeholder='Place a new comment'
                autoFocus
                component={Input}
              />

              <Button
                className={styles.button}
                onClick={handleSubmit}
                isLoading={isSubmitting}
                type='submit'
              >
                place
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default EditCommentForm
