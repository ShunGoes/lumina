import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  name: Yup.string().required('Name is required'),
  day: Yup.string().required('Day is required'),
  month: Yup.string().required('Month is required'),
  year: Yup.string().required('Year is required'),
  gender: Yup.string().required('Gender is required'),
  social_token: Yup.string().optional(),
  password: Yup.string().when("social_token",([social_token]) => {
    return social_token !== "" ? Yup.string().optional() : Yup.string().required('Password is required')
  }),
  passion: Yup.array(Yup.number().required()).required('Passions are required').min(4, 'Select at least four passions'),
  pictures: Yup.array(Yup.string().required()).required('Pictures are required').min(2, 'Select at least two pictures'),
  interested_in: Yup.array(Yup.string().required()).required('Interest is required').min(1, 'Select at least one interest'),
})

export const EmailSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
})

export const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  social_token: Yup.string().optional(),
  password: Yup.string().when("social_token",([social_token]) => {
    return social_token ? Yup.string().optional() : Yup.string().required('Password is required')
  }),
})