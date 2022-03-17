import { Grid } from '@mui/material'
import React from 'react'
import BreweryItem from './BreweryItem'

const BreweryList = ({ breweries, text }) => {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      {breweries
        .filter(
          (i) =>
            i.city?.toLowerCase().includes(text.toLowerCase()) ||
            i.state?.toLowerCase().includes(text.toLowerCase())
        )
        .map((brewery) => (
          <Grid item xs={2} sm={4} md={4} key={brewery.id}>
            <BreweryItem brewery={brewery} />
          </Grid>
        ))}
    </Grid>
  )
}

export default BreweryList
