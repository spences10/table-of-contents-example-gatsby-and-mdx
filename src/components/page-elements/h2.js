import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './heading-link'

export const StyledH2 = styled.h2`
  font-size: ${({ theme }) => theme.fontSize['3xl']};
  font-family: ${({ theme }) => theme.font.serif};
  margin-top: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  ${AutoLink}
`

export const H2 = props => {
  return <StyledH2 {...props}>{props.children}</StyledH2>
}
