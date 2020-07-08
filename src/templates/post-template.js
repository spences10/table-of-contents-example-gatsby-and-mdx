import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import styled from 'styled-components'
import { H1, H2, P } from '../components/page-elements'

const Toc = styled.ul`
  position: fixed;
  left: calc(50% + 400px);
  top: 110px;
  max-height: 70vh;
  width: 310px;
  display: flex;
  li {
    line-height: ${({ theme }) => theme.lineHeight.tight};
    margin-top: ${({ theme }) => theme.spacing[3]};
  }
`

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`

export default ({ data }) => {
  const { body, frontmatter, tableOfContents } = data.mdx

  return (
    <>
      <H1>{frontmatter.title}</H1>
      <P>{frontmatter.date}</P>
      {typeof tableOfContents.items === 'undefined' ? null : (
        <Toc>
          <InnerScroll>
            <H2>Table of contents</H2>

            {tableOfContents.items.map(i => (
              <li key={i.url}>
                <a href={i.url} key={i.url}>
                  {i.title}
                </a>
              </li>
            ))}
          </InnerScroll>
        </Toc>
      )}
      <MDXRenderer>{body}</MDXRenderer>
    </>
  )
}

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      tableOfContents
      timeToRead
      fields {
        slug
      }
    }
  }
`
