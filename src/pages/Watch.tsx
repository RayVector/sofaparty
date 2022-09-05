import {WatchForm} from "../components/forms/WatchForm";
import {Paper} from "@mui/material";
import {useState} from "react";
import {CinemaBar} from "../components/CinemaBar";

export const Watch = () => {
  const [watchSource, setWatchSource] = useState<string>('');

  const submitFormHandler = (formData: string) => {
    setWatchSource(formData)
  }

  return (
    <div>
      <Paper elevation={3} className={'my-5 py-5 px-5'}>
        <WatchForm onSubmitForm={submitFormHandler}/>
      </Paper>
      {watchSource &&
        <Paper elevation={3} className={'py-5 px-5'}>
          <CinemaBar
            src={watchSource}
            isFullWidth={true}
          />
        </Paper>
      }
    </div>
  )
}
