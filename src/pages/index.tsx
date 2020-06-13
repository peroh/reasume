import * as React from 'react'
import Link from 'gatsby-link'

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        title: string
      }
    }
  }
}


const Main = (props: IndexPageProps, context: any) => {
  return (
    <div>
        <strong>{props.data.site.siteMetadata.title}</strong>
    </div>
  )
}

export default Main;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
