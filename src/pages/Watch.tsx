import {WatchForm} from "../components/forms/WatchForm";
import {useEffect, useState} from "react";
import {CinemaBar} from "../components/CinemaBar";
import {PaperBlock} from "../components/PaperBlock";
import {useSearchParams} from "react-router-dom";

export const Watch = () => {
  const [watchSource, setWatchSource] = useState<string>('');
  const [searchParams] = useSearchParams()

  const submitFormHandler = (formData: string) => {
    setWatchSource(formData)
  }

  useEffect(() => {
    if (searchParams.get('source') !== null) {
      setWatchSource(searchParams.get('source') || '')
      const el = document.getElementById('_cinemaBar')
      if (el !== null) {
        el.scrollIntoView(true)
      }
    }
  })

  return (
    <>
      <PaperBlock>
        <WatchForm onSubmitForm={submitFormHandler}/>
      </PaperBlock>
      {watchSource &&
        <PaperBlock>
          <div id={'_cinemaBar'}>
            <CinemaBar
              src={watchSource}
              isFullWidth={true}
            />
          </div>
        </PaperBlock>
      }
    </>
  )
}
