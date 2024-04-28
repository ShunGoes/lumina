import * as Yup from "yup";

export const RegisterSchema = Yup.object().shape({
  email: Yup.string().email('Invalid Email').required('Email is required'),
  firstName: Yup.string().required('Name is required'),
  day: Yup.string().required('Day is required'),
  month: Yup.string().required('Month is required'),
  year: Yup.string().required('Year is required'),
  gender: Yup.string().required('Gender is required'),
  password: Yup.string().optional(),
  passion: Yup.array(Yup.number().required()).required('Passions are required').min(4, 'Select at least four passions'),
  pictures: Yup.array(Yup.string().required()).required('Pictures are required').min(2, 'Select at least two pictures'),
})