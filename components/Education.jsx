import { Grid } from '@mui/material'
import React from 'react'
import { AiFillCloseCircle } from 'react-icons/ai'

const Education = ({handleEducationModal}) => {
  return (
    <div className='popup'>
        <p onClick={handleEducationModal} className='close-popup'><AiFillCloseCircle fontSize='large'/></p>
        <h1 className='info-title' style={{textAlign: 'center'}}>Education</h1>
        <Grid container style={{display: 'flex', justifyContent: 'center', padding: '15px'}} spacing={2}>
          <Grid item xs={12} md={6}>
            <div className='education-container'>
              <p className='info-text'>Associate Degree in Computer Science at Orange Coast College 2020</p>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className='education-container'>
              <p className='info-text'>Bachelor Degree in Computer Science at California State Fullerton 2023 (expected)</p>
            </div>
          </Grid>
        </Grid>
    </div>
  )
}

export default Education