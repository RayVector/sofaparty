import TextField from '@mui/material/TextField';
import {useState} from "react";
import {Button} from "@mui/material";
import {BoxBlock} from "../BoxBlock";

interface IFormProps {
  onSubmitForm: (formData: string) => void
}

export const WatchForm = ({onSubmitForm}: IFormProps) => {
  const [watchCode, setWatchCode] = useState('')

  const onSubmitHandler = (e: any) => {
    e.preventDefault()
    onSubmitForm(watchCode)
  }

  return (
    <BoxBlock componentType={'form'}>
      <TextField
        required
        label="Video URL"
        value={watchCode}
        onChange={e => setWatchCode(e.target.value)}
      />
      <Button
        type="submit"
        variant="contained"
        onClick={onSubmitHandler}
      >
        Watch
      </Button>
    </BoxBlock>
  )
}
