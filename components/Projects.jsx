import React from 'react'
import { AiFillCloseCircle, AiTwotoneFile } from 'react-icons/ai'
import { Grid } from '@mui/material'
import { projects } from '../utils/constant'
import { Button } from '@mui/material'

const Projects = ({ handleProjectModal }) => {
  return (
    <div className='popup'>
        <p onClick={handleProjectModal} className='close-popup'><AiFillCloseCircle fontSize='large'/></p>
        <h1 className='info-title' style={{textAlign: 'center'}}>Projects</h1>
        <Grid container spacing={2} style={{display: 'flex', justifyContent: 'center', padding: '15px'}}>
            { projects.map((val, i) =>                 
                <Grid item xs={12} md={6} key={i}>
                    <div className='project-container'>
                        <p className='info-text' style={{textAlign: 'center'}}><AiTwotoneFile/>&nbsp;{val.title}</p>
                        <p className='project-description' style={{textAlign: 'center', padding: '5px'}}>{val.description}</p>
                        <div style={{display: 'flex', justifyContent: 'center', gap: '5px', paddingBottom: '10px'}}>
                            <Button size='small' variant='outlined' color='warning' href={val.source} target="_blank"><b>code</b></Button>
                            <Button size='small' variant='outlined' color='error' href={val.demo}><b>demo</b></Button>
                            <Button size='small' variant='outlined' color='primary' href={val.visit}><b>site</b></Button>
                        </div>
                    </div>
                </Grid>
            )}
        </Grid>
    </div>
  )
}

export default Projects