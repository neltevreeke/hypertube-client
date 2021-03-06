import React from 'react'
import styles from './NewPasswordForm.scss'
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

const initialValues = {
  password: '',
  passwordRepeat: ''
}

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .min(7, 'Too short!')
    .required('Required'),
  passwordRepeat: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Please make sure that the passwords are matching')
    .required('Required')
})

const NewPasswordForm = ({
  onSubmit,
  isSubmitting,
  error
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
                label='Enter your new password'
                id='password'
                name='password'
                type='password'
                component={Input}
              />

              <Field
                label='Repeat your new password'
                id='passwordRepeat'
                name='passwordRepeat'
                type='password'
                component={Input}
              />

              <Button
                type='submit'
                onClick={handleSubmit}
                variant={Button.VARIANT_DEFAULT}
                isLoading={isSubmitting}
                className={styles.fullWidth}
              >
                set new password
              </Button>
            </Form>
          )
        }}
      />
    </div>
  )
}

export default NewPasswordForm
