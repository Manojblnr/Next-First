import { AppBar, Stack, styled, Toolbar, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'


const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  background: 'black',
  textDecoration: 'none'
})
const Navbar = () => {
  return (
    <>
    <AppBar>
      <StyledToolbar>
        <Typography variant='h5'>Next</Typography>
        <Stack direction='row' justifyContent='space-between' width='20%' >
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/nested/contacts'>Contact</Link>
        </Stack>
      </StyledToolbar>
    </AppBar>
    </>
  )
}

export default Navbar