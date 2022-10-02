import React from 'react'
import Box from "@mui/material/Box";

interface IBoxBlock {
  componentType?: React.ElementType
  children?: React.ReactNode
}

export const BoxBlock = ({ componentType = 'div', children }: IBoxBlock) => {
  return(
    <Box
      component={componentType}
      sx={{'& .MuiTextField-root': {m: 1, width: '25ch'},}}
      noValidate
      autoComplete="off"
      className={'flex items-center'}
    >
      { children }
    </Box>
  )
}
