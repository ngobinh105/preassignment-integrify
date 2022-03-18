import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
} from '@mui/material'
import { useEffect } from 'react'
import axios from 'axios'

const BreweryDetail = ({ breweries, setBreweries }) => {
  const { id } = useParams()
  const breweryById = breweries.find((i) => i.id === id)
  const navigate = useNavigate()
  useEffect(() => {
    const getAllBreweries = () => {
      axios
        .get('https://api.openbrewerydb.org/breweries')
        .then((res) => {
          setBreweries(res.data)
        })
        .catch((err) => console.log('error', err))
    }
    getAllBreweries()
  }, [setBreweries])
  return (
    <Card
      className='card-detail'
      variant='outlined'
      style={{ backgroundColor: 'beige', borderRadius: '10px' }}
    >
      <CardContent>
        <Typography>Name: {breweryById?.name}</Typography>
        <Typography>Brewery Type: {breweryById?.brewery_type}</Typography>
        <Typography>Street: {breweryById?.street}</Typography>
        <Typography>
          Address2: {breweryById?.address_2 ? breweryById?.address_2 : 'N/A'}
        </Typography>
        <Typography>
          Address3: {breweryById?.address_3 ? breweryById?.address_3 : 'N/A'}
        </Typography>
        <Typography>City: {breweryById?.city}</Typography>
        <Typography>State: {breweryById?.state}</Typography>
        <Typography>County/Province: {breweryById?.county_province}</Typography>
        <Typography>Postal Code: {breweryById?.postal_code}</Typography>
      </CardContent>
      <CardActions
        style={{ justifyContent: 'center', backgroundColor: 'white' }}
      >
        <Button
          onClick={() => {
            navigate('/')
          }}
        >
          Go Back
        </Button>
      </CardActions>
    </Card>
  )
}

export default BreweryDetail
