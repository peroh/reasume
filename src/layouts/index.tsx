import * as React from 'react'

interface DefaultLayoutProps extends React.HTMLProps<HTMLDivElement> {
  location: {
    pathname: string
  }
  children: any
}

const DefaultLayout = (props: DefaultLayoutProps) => {
  return (
    <div>{props.children()}</div>
  )
}

export default DefaultLayout
