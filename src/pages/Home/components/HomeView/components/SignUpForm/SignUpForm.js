import React from 'react'
import styles from './SignUpForm.scss'
import Button from 'components/Button/Button'
import * as Yup from 'yup'

import {
  Formik,
  Form
} from 'formik'

import {
  Field,
  Input
} from 'components/FormElements'

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too short')
    .max(8, 'Too long')
    .required('Required'),
  firstName: Yup.string()
    .required('Required'),
  lastName: Yup.string()
    .required('Required'),
  emailSignUp: Yup.string()
    .email('Invalid email')
    .required('Required'),
  passwordSignUp: Yup.string()
    .min(7, 'Too short')
    .required('Required'),
  passwordRepeatSignUp: Yup.string()
    .oneOf([Yup.ref('passwordSignUp'), null], 'Passwords are not matching')
    .required('Required')
})

const initialValues = {
  username: '',
  firstName: '',
  lastName: '',
  emailSignUp: '',
  passwordSignUp: '',
  passwordRepeatSignUp: ''
}

const SignUpForm = ({
  onSubmit,
  isSubmitting,
  error
}) => {
  return (
    <div className={styles.component}>
      <Formik
        onSubmit={onSubmit}
        validationSchema={validationSchema}
        initialValues={initialValues}
        render={({ handleSubmit }) => {
          return (
            <Form>
              <Field
                id='username'
                name='username'
                type='text'
                component={Input}
                placeholder='Username'
              />

              <Field
                id='firstName'
                name='firstName'
                type='text'
                component={Input}
                placeholder='First name'
              />

              <Field
                id='lastName'
                name='lastName'
                type='text'
                component={Input}
                placeholder='Last name'
              />

              <Field
                id='emailSignUp'
                name='emailSignUp'
                type='email'
                component={Input}
                placeholder='Email'
              />

              <Field
                id='passwordSignUp'
                name='passwordSignUp'
                type='password'
                component={Input}
                placeholder='Password'
              />

              <Field
                // label='Password repeat'
                id='passwordRepeatSignUp'
                name='passwordRepeatSignUp'
                type='password'
                component={Input}
                placeholder='Repeat password'
              />

              <Button
                onClick={handleSubmit}
                type='submit'
                variant={Button.VARIANT_DEFAULT}
                isLoading={isSubmitting}
                className={styles.fullWidthButton}
              >
                sign up
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

export default SignUpForm
