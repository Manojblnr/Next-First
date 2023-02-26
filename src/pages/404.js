import { Box, Button, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const PageNotFound = () => {

  const router = useRouter()

  useEffect(() => {
    const id = setTimeout(() => {
      router.push('/')
    }, 3000)
    return () => clearTimeout(id)
  },[])
  return (
    <>
    <Head>
        <title>Next | 404</title>
        <meta name='keyword' content='Page not found'/>
    </Head>
    <Box sx= {{margin:20}}>
        <Typography>Whoops! Page Not Found</Typography>
        <Link href='/'><Button variant='text'>Go To Home Page</Button></Link>
    </Box>
    </>
  )
}

export default PageNotFound