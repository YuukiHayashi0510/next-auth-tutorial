import React from 'react'

type Props = { children: React.ReactNode }

const Layout = (props: Props) => {
  return (
    <div className='flex min-h-screen flex-col items-center justify-center text-3xl'>
      {props.children}
    </div>
  )
}

export default Layout
