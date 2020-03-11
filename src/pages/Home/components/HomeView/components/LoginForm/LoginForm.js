import React from 'react'
import styles from './LoginForm.scss'
import Button from 'components/Button/Button'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'

const initialValues = {
  email: '',
  password: ''
}

const LoginForm = ({
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
                label='Email'
                id='email'
                name='email'
                type='email'
                component={Input}
                placeholder='Email'
              />

              <Field
                label='Password'
                id='password'
                name='password'
                type='password'
                component={Input}
                placeholder='Password'
              />

              <Button
                onClick={handleSubmit}
                type='submit'
                variant={Button.VARIANT_DEFAULT}
                isLoading={isSubmitting}
              >
                log in
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default LoginForm
