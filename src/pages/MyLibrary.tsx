import * as React from 'react';
import {
  Link
} from "react-router-dom";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import {PaperBlock} from "../components/PaperBlock";
import {MyLibraryItem} from "../components/MyLibraryItem";
import {useState} from "react";
import {LibraryItemForm} from "../components/forms/LibraryItemForm";
import {ILibraryItem} from "../configs/interfaces/ILibraryItem";
const libraryItemsStorage = [
  {
    name: 'Глухомань',
    source: '//kodik.info/seria/150254/beb20ce067ce6b44996c2465fc1b1cfa/720p'
  }
]

export const MyLibrary = () => {
  const [libraryItems, setLibraryItems] = useState<ILibraryItem[]>(libraryItemsStorage)
  const [itemToUpdate, setItemToUpdate] = useState<any>(null)

  const clearItemToUpdate = () => {
    setItemToUpdate(null)
  }

  const onCancelFormHandler = () => {
    clearItemToUpdate()
  }

  const onSubmitItemFormHandler = (itemData: ILibraryItem) => {
    const newData = [itemData, ...libraryItems]
    setLibraryItems(newData)
    clearItemToUpdate()
  }

  return (
    <Box sx={{flexGrow: 1}}>
      { itemToUpdate == null ?
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
          <Grid item xs={1} sm={1} md={1}>
            <PaperBlock
              content={'+'}
              clickable={true}
              isContentCenter={true}
              onClick={() => setItemToUpdate({ name: '', source: '' })}
            />
          </Grid>
          {libraryItems.map((libraryItem, libraryItemIndex) => (
            <Grid item xs={2} sm={2} md={4} key={libraryItemIndex}>
              <Link to={`/watch?source=${libraryItem.source}#_cinemaBar`}>
                <PaperBlock
                  clickable={true}
                  isContentCenter={true}
                >
                  <MyLibraryItem title={libraryItem.name}/>
                </PaperBlock>
              </Link>
            </Grid>
          ))}
        </Grid>
        :
        <LibraryItemForm
          onCancelForm={() => onCancelFormHandler()}
          onSubmitForm={(itemData: ILibraryItem) => onSubmitItemFormHandler(itemData)}
        />
      }
    </Box>
  )
}
