import { Box, Grid } from '@mui/material'
import React from 'react'
import { useState } from "react";


function CardCategory(props) {
    const [Path, setPath] = useState(null);
  return (
    <>
        <Grid item xs={3} className="CardCategory" >
            <img src={props.Path} style={{width: "100%" }} />
        </Grid>
    </>
  )
}

export default CardCategory