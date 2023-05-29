import styled from '@emotion/styled'
import { Box, Button, Paper, Typography } from '@mui/material'
import React from 'react'

const Product = () => {

    const Img = styled("img")({
        width: "200",
        heigth: "100%",
        objectFit: "Cover",
        objetPosition: "center",
    })

  return (
    <Paper
    sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        overflow: "hidden",
        mt: 5,
    }}
    >
    <Img src="https://via.placeholder.com/300"/>
    <Box sx={{ flexGrow: 1, display: "grid", gap: 4}}>
        <Typography variant='h4'>Product Name</Typography>
        <Typography variant='body1'>Product Description</Typography>
        <Button variant='contained'> Add Cart </Button>
    </Box>
    <Box sx={{ mr : 3}} component="p">$19.99</Box>
    </Paper>
  )
}

export default Product