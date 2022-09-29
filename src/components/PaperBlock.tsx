import Paper from "@mui/material/Paper";
import * as React from "react";

interface IPaperBlock {
  content?: String
  children?: React.ReactNode
  isContentCenter?: Boolean
  clickable?: Boolean
  onClick?: () => void
}

export const PaperBlock = ({ content, children, isContentCenter,  clickable, onClick }: IPaperBlock) => {
  return(
    <Paper
      elevation={3}
      className={`
        my-5 py-5 px-5
        ${ clickable ? 'cursor-pointer' : ''}
        ${ isContentCenter ? 'flex justify-center' : ''}
      `}
      onClick={onClick}
    >
      <span>{ content }</span>
      { children }
    </Paper>
  )
}
