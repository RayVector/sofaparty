import {BoxBlock} from "../BoxBlock";
import TextField from "@mui/material/TextField";
import {Button, Box } from "@mui/material";
import {useState} from "react";
import {ILibraryItem} from "../../configs/interfaces/ILibraryItem";

interface IFormProps {
  onSubmitForm?: (formData: ILibraryItem) => void
  onCancelForm?: () => void
}

export const LibraryItemForm = ({onCancelForm, onSubmitForm}: IFormProps) => {
  const [name, setName] = useState<string>('')
  const [source, setSource] = useState<string>('')

  const onSubmitHandler = (e: any) => {
    e.preventDefault()
    if (onSubmitForm) {
      onSubmitForm({name, source})
    }
  }

  const cancelFormHandler = () => {
    if (onCancelForm) {
      onCancelForm()
    }
  }

  return (
    <BoxBlock componentType={'form'}>
      <Box mr={5}>
        <TextField
          required
          label="Name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <TextField
          required
          label="Source"
          value={source}
          onChange={e => setSource(e.target.value)}
        />
      </Box>
      <Box mr={2}>
        <Button onClick={() => cancelFormHandler()}>
          Cancel
        </Button>
      </Box>
      <Button
        type="submit"
        variant="contained"
        onClick={onSubmitHandler}
      >
        Save
      </Button>
    </BoxBlock>
  )
}
