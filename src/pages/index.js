import { Link } from 'gatsby'
import React from 'react'
import Image from '../components/image'
import { H1, H2, P } from '../components/page-elements'
import SEO from '../components/seo'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <H1>Hi people</H1>
    <P>Check out the link for the TOC and smooth scroll</P>
    <Link to="/toc-example/">
      <H2>Go To TOC Example</H2>
    </Link>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </>
)

export default IndexPage
