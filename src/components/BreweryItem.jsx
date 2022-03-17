import React from 'react'
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'
import { Link } from 'react-router-dom'

const BreweryItem = ({ brewery }) => {
  return (
    <Card
      className='Card'
      variant='outlined'
      style={{ backgroundColor: 'beige', borderRadius: '10px' }}
    >
      <CardContent>
        <Typography variant='h6'>{brewery.name}</Typography>
        <Typography variant='subtitle1'>{brewery.brewery_type}</Typography>
        <Typography variant='subtitle1'>{brewery.city}</Typography>
      </CardContent>
      <CardActions
        style={{ justifyContent: 'center', backgroundColor: 'white' }}
      >
        <Button variant='text'>
          <Link to={`/${brewery.id}`}>View Detail</Link>
        </Button>
      </CardActions>
    </Card>
  )
}

export default BreweryItem
