import React from 'react'
import styled from 'styled-components'
import { AutoLink } from './heading-link'

export const StyledH3 = styled.h3`
  font-size: ${({ theme }) => theme.fontSize['2xl']};
  font-family: ${({ theme }) => theme.font.serif};
  margin-top: ${({ theme }) => theme.spacing[6]};
  line-height: ${({ theme }) => theme.lineHeight.none};
  ${AutoLink}
`

export const H3 = props => {
  return <StyledH3 {...props}>{props.children}</StyledH3>
}
