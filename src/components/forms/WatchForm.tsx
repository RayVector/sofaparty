import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {useState} from "react";
import {Button} from "@mui/material";

interface IFormProps {
  onSubmitForm: (formData: string) => void
}

export const WatchForm = ({ onSubmitForm }: IFormProps) => {
  const [watchCode, setWatchCode] = useState('')

  const onSubmitHandler = () => {
    onSubmitForm(watchCode)
  }

  return(
    <>
      <Box
        component="form"
        sx={{'& .MuiTextField-root': { m: 1, width: '25ch' },}}
        noValidate
        autoComplete="off"
        className={'flex items-center'}
      >
        <TextField
          id="outlined-multiline-static"
          label="Video URL"
          value={watchCode}
          onChange={e => setWatchCode(e.target.value)}
        />
        <Button
          disabled={!watchCode}
          variant="contained"
          onClick={onSubmitHandler}
        >
          Watch
        </Button>
      </Box>
      <code>
        {/*for dev*/}
        //kodik.info/seria/150254/beb20ce067ce6b44996c2465fc1b1cfa/720p
      </code>
    </>
  )
}
