import { Typography } from '@mui/material'
import { Stack } from '@mui/system'
import Head from 'next/head'
import React from 'react'

const about = () => {
  return (
    <>
    <Head>
        <title>Next | About</title>
        <meta name='keyword' content='about'/>
    </Head>
    <Stack spacing={5} mt={10} mb={20}>
      <Typography variant='h3'>About</Typography>
      <Typography color='gray'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore autem ratione laborum. Voluptatem quisquam architecto pariatur officiis aliquid provident maxime iste non nobis in temporibus fuga voluptatum, ducimus quasi eum?</Typography>
    </Stack>
    </>
  )
}

export default about