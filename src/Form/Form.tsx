import React, { FC, useState } from 'react'

import styled from 'styled-components'
import { validationSchema } from '../utilis/validationSchemas'
import { Input, DOBWrapper, Button, Select, FormWrapper } from '../FormElement'

type Props = {
  fetchCards: (data: Record<string, any>) => void
}

const Search = styled('section')`
  margin-top: 2rem;
`

const defaultDataProps = {
  title: '',
  firstName: '',
  lastName: '',
  day: '',
  month: '',
  year: '',
  employment: '',
  postcode: '',
  houseNumber: '',
  income: '',
}

export const Form: FC<Props> = ({ fetchCards }) => {
  const [errors, setErrors] = useState({})
  const [data, setData] = useState(defaultDataProps)

  const handleChange = ({ currentTarget: input }) => {
    const newData = { ...data }
    newData[input.name] = input.value
    setData(newData)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Validate
    validationSchema
      .validate(data, { abortEarly: false })
      .then(() => {
        setErrors({})
        return fetchCards(data)
      })
      .catch((error) => {
        const errors = {}
        error.errors.map((err) => {
          const label = err.split(' ')[0]
          return (errors[label] = `invalid ${label}`)
        })
        setErrors(errors)
      })
  }

  const titleOptions = [
    { id: 'mr', name: 'Mr' },
    { id: 'mrs', name: 'Mrs' },
    { id: 'ms', name: 'Ms' },
    { id: 'miss', name: 'Miss' },
  ]

  const employmentOptions = [
    { id: 'fulltime', name: 'Full Time' },
    { id: 'parttime', name: 'Part Time' },
    { id: 'selfemployed', name: 'Self Employed' },
    { id: 'student', name: 'Student' },
    { id: 'unemployed', name: 'Unemployed' },
  ]
  return (
    <Search>
      <FormWrapper
        onSubmit={(e: React.ChangeEvent<any>) => {
          e.preventDefault()
          handleSubmit(e)
        }}
        placeholder="Card eligibility"
      >
        <h2>Totally Money</h2>

        <Select
          onChange={handleChange}
          name="title"
          options={titleOptions}
          error={errors['title']}
          placeholder="Select a title"
          label="Select a title"
        />

        <Input
          onChange={handleChange}
          placeholder="First name"
          name="firstName"
          error={errors['firstName']}
          label="First name"
        />
        <Input
          onChange={handleChange}
          placeholder="Last Name"
          data-testid="lastNameInput"
          name="lastName"
          error={errors['lastName']}
          label="Last Name"
        />
        <DOBWrapper>
          <Input
            name="day"
            placeholder="DD"
            onChange={handleChange}
            error={errors['day']}
            label="Select a day"
          />

          <Input
            name="month"
            placeholder="MM"
            onChange={handleChange}
            error={errors['month']}
            label="Select a month"
          />
          <Input
            name="year"
            placeholder="YYYY"
            onChange={handleChange}
            error={errors['year']}
            label="Select a year"
          />
        </DOBWrapper>
        <Select
          onChange={handleChange}
          name="employment"
          options={employmentOptions}
          error={errors['employment']}
          placeholder="Select an employment status"
          label="Select an employment status"
        />

        <Input
          onChange={handleChange}
          placeholder="Postcode"
          name="postcode"
          error={errors['postcode']}
          label="Postcode"
        />
        <Input
          onChange={handleChange}
          placeholder="House Number"
          name="houseNumber"
          error={errors['houseNumber']}
          label="House Number"
        />
        <Input
          onChange={handleChange}
          placeholder="Annual Income"
          name="income"
          error={errors['income']}
          label="Annual Income"
        />
        <Button type="submit">Submit</Button>
      </FormWrapper>
    </Search>
  )
}
