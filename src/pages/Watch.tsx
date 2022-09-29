import {WatchForm} from "../components/forms/WatchForm";
import {useState} from "react";
import {CinemaBar} from "../components/CinemaBar";
import {PaperBlock} from "../components/PaperBlock";

export const Watch = () => {
  const [watchSource, setWatchSource] = useState<string>('');

  const submitFormHandler = (formData: string) => {
    setWatchSource(formData)
  }

  return (
    <>
      <PaperBlock>
        <WatchForm onSubmitForm={submitFormHandler}/>
      </PaperBlock>
      {watchSource &&
        <PaperBlock>
          <CinemaBar
            src={watchSource}
            isFullWidth={true}
          />
        </PaperBlock>
      }
    </>
  )
}
