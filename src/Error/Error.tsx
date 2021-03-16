import styled from 'styled-components'

export const Error = styled('p').attrs(({ role }) => ({
  role: 'alert',
}))`
  background-color: #b91c21;
  padding: 1rem;
  color: #fff;
`
