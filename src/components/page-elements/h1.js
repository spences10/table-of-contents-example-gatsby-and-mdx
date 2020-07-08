import React from 'react'
import styled from 'styled-components'

export const StyledH1 = styled.h1`
  font-size: ${({ theme }) => theme.fontSize['4xl']};
  font-family: ${({ theme }) => theme.font.serif};
  margin-top: ${({ theme }) => theme.spacing[8]};
  line-height: ${({ theme }) => theme.lineHeight.none};
`

export const H1 = props => {
  return <StyledH1 {...props}>{props.children}</StyledH1>
}
