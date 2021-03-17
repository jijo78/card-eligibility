import React, { FC } from 'react'

import styled from 'styled-components'
import { Error } from '../Error'

type InputProps = {
  name: string
  placeholder?: string
  label?: string
  min?: string
  max?: string
  onChange: (e: React.ChangeEvent<any>) => void
  type?: string
  error: boolean
  options?: Array<any>
}

const InputWrapper = styled.input`
  appearance: none;
  box-sizing: border-box;
  width: 100%;
  margin: 1rem 0;
  padding: 14px 16px;
  font-size: 1.6rem;
  border: 1px solid rgb(156, 155, 165);
  border-radius: 4px;
  transition: all 0.1s ease 0s;
`
export const DOBWrapper = styled('div')`
  display: flex;
  position: relative;
  flex: 1 1 0%;
  div {
    margin: 0 1rem 0 0;
    &:last-child {
      margin: 0;
    }
  }
`
export const Button = styled('button')`
  position: relative;
  box-sizing: border-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  min-height: 4.8rem;
  width: 100%;
  margin: 0px;
  padding: 0px 24px;
  border-radius: 9999px;
  font-weight: bold;
  user-select: none;
  cursor: pointer;
  color: rgb(255, 255, 255);
  background-color: rgb(38, 26, 145);
  border-color: rgb(38, 26, 145);
`

const SelectWrapper = styled('select')`
  box-sizing: border-box;
  width: 100%;
  margin: 1rem 0;
  padding: 14px 16px;
  font-size: 1.6rem;
  border: 1px solid rgb(156, 155, 165);
  border-radius: 4px;
  transition: all 0.1s ease 0s;
`

const Label = styled('label')`
  padding: 0.5rem 0 0.1rem;
  display: inline-block;
  font-weight: bold;
  font-size: 1.4rem;
  color: #fff;
`
export const FormWrapper = styled('form')`
  box-sizing: border-box;
  width: 100%;
  max-width: 486px;
  margin: auto;
`
const ElWrapper = styled('div')`
  position: relative;
`
const CheckboxWrapper = styled('div')`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
`
export const Input: FC<InputProps> = ({
  name,
  placeholder,
  onChange,
  label,
  type = 'text',
  error,
}) => {
  return (
    <ElWrapper>
      <Label htmlFor={name}>{label}</Label>

      <InputWrapper
        id={name}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        type={type}
      />
      {error ? <Error>{error}</Error> : null}
    </ElWrapper>
  )
}
export const Checkbox = ({ name, label, checked, onClick, ...rest }) => {
  return (
    <CheckboxWrapper>
      <input type="checkbox" id={name} name={name} checked={checked} onChange={onClick} {...rest} />
      <Label htmlFor={name}>{label}</Label>
    </CheckboxWrapper>
  )
}
export const Select: FC<InputProps> = ({
  options = [],
  onChange,
  label,
  placeholder,
  name,
  error,
}) => {
  return (
    <ElWrapper>
      <Label htmlFor={name}>{label}</Label>
      <SelectWrapper onChange={onChange} name={name} placeholder={placeholder} id={name}>
        <option defaultValue="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.name}>
            {option.name}
          </option>
        ))}
      </SelectWrapper>
      {error ? <Error>{error}</Error> : null}
    </ElWrapper>
  )
}
