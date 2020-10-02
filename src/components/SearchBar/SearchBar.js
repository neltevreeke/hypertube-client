import React from 'react'
import styles from './SearchBar.scss'
import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'
import Button from '../Button/Button'

const initialValues = {
  movieTitle: ''
}

const SearchBar = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  return (
    <div className={styles.component}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                // label='Search'
                id='movieTitle'
                name='movieTitle'
                type='text'
                component={Input}
                placeholder='Search'
              />

              <Button
                onClick={handleSubmit}
                type='submit'
                className={styles.submitButton}
              />
            </Form>
          )
        }}
      />
    </div>
  )
}

export default SearchBar
