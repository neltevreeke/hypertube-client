import React from 'react'
import styles from './UpdateForm.scss'
import Button from 'components/Button/Button'
import { useSelector } from 'react-redux'
import { getUser } from '../../../../../../selectors/user'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'

const setInitialValues = user => {
  return {
    firstName: user.firstName,
    lastName: user.lastName,
    logInEmail: user.logInEmail,
    email: user.email,
    username: user.username
  }
}

const UpdateForm = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  // todo: add photo upload area

  const user = useSelector(getUser)
  const initialValues = setInitialValues(user)

  return (
    <div className={styles.component}>
      <Formik
        onSubmit={onSubmit}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                label='Login email'
                id='logInEmail'
                name='logInEmail'
                type='email'
                component={Input}
                disabled
              />

              <Field
                label='General email (this will be used to send you emails)'
                id='email'
                name='email'
                type='email'
                component={Input}
              />

              <Field
                label='Username'
                id='username'
                name='username'
                type='text'
                component={Input}
              />

              <Field
                label='First name'
                id='firstName'
                name='firstName'
                type='text'
                component={Input}
              />

              <Field
                label='Last name'
                id='lastName'
                name='lastName'
                type='text'
                component={Input}
              />

              <Button
                onClick={handleSubmit}
                type='submit'
                variant={Button.VARIANT_DEFAULT}
                isLoading={isSubmitting}
                className={styles.fullWidthButton}
              >
                update
              </Button>

              {error &&
                <div className={styles.submitError}>
                  {error.message}
                </div>}
            </Form>
          )
        }}
      />
    </div>
  )
}

export default UpdateForm
