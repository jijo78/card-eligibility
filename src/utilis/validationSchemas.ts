import * as yup from 'yup'

const postCodeRegEx = /^(([A-Z]{1,2}\d[A-Z\d]?|ASCN|STHL|TDCU|BBND|[BFS]IQQ|PCRN|TKCA) ?\d[A-Z]{2}|BFPO ?\d{1,4}|(KY\d|MSR|VG|AI)[ -]?\d{4}|[A-Z]{2} ?\d{2}|GE ?CX|GIR ?0A{2}|SAN ?TA1)$/
const spaceInBetweenPostCode = /^(([A-Z][0-9]{1,2})|(([A-Z][A-HJ-Y][0-9]{1,2})|(([A-Z][0-9][A-Z])|([A-Z][A-HJ-Y][0-9]?[A-Z])))) [0-9][A-Z]{2}$/

export const validationSchema = yup.object().shape({
  title: yup.string().required(),
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  day: yup.number().positive().min(1).max(31).required(),
  month: yup.number().min(1).max(12).required(),
  year: yup
    .number()
    .min(1900)
    .max(new Date().getFullYear() - 18)
    .required(),
  employment: yup.string().required(),
  postcode: yup.string().required(),
  houseNumber: yup.number().required(),
  income: yup.number().min(0).required(),
})
