import { Container, Paper, Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

function Blog() {
  return (
    <div>
        <Navbar/>
        <Container maxWidth='lg' style={{marginTop: '30px'}}>
            <Typography variant='h3' style={{color: 'gray', textAlign: 'center'}}>No blogs yet !!</Typography>
            {/* <Paper style={{padding: '15px', backgroundColor: 'rgb(64,64,64)'}}>
                <Typography variant='h2' style={{color: 'white', textAlign: 'center'}}>My Blog</Typography><br/>
                <Typography variant='body1' style={{color: 'white'}}>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                    standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a 
                    type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially 
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with 
                    desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
                </Typography>
            </Paper> */}
        </Container>
        {/* <Footer/> */}
    </div>
  )
}

export default Blog