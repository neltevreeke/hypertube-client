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
                // label='Email'
                id='firstName'
                name='firstName'
                type='text'
                component={Input}
                placeholder='First name'
              />

              <Field
                // label='Email'
                id='lastName'
                name='lastName'
                type='text'
                component={Input}
                placeholder='Last name'
              />

              <Field
                // label='Email'
                id='emailSignUp'
                name='emailSignUp'
                type='email'
                component={Input}
                placeholder='Email'
              />

              <Field
                // label='Password'
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
