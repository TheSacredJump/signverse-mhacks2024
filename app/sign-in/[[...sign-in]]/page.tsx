import React from 'react'
import { SignIn } from '@clerk/nextjs'

const Signin = () => {
  return (
    <main className='flex w-full h-screen items-center justify-center'>
      <SignIn />
    </main>
  )
}

export default Signin