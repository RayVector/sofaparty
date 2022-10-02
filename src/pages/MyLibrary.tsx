import * as React from 'react';
import {
  Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {PaperBlock} from "../components/PaperBlock";
import {MyLibraryItem} from "../components/MyLibraryItem";

const libraryItems = [
  {
    title: 'Глухомань',
    source: '//kodik.info/seria/150254/beb20ce067ce6b44996c2465fc1b1cfa/720p'
  }
]

export const MyLibrary = () => {
  return (
    <Box sx={{flexGrow: 1}}>
      <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
        <Grid item xs={1} sm={1} md={1}>
          <PaperBlock content={'+'} clickable={true} isContentCenter={true}/>
        </Grid>
        {libraryItems.map((libraryItem, libraryItemIndex) => (
          <Grid item xs={2} sm={2} md={4} key={libraryItemIndex}>
            <Link to={`/watch?source=${libraryItem.source}#_cinemaBar`}>
              <PaperBlock
                clickable={true}
                isContentCenter={true}
              >
                <MyLibraryItem title={libraryItem.title}/>
              </PaperBlock>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}
