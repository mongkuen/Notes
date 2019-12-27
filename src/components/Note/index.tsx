import React, { FC } from 'react'
import 'components/Note/styles.css'
import { Note as NoteType } from 'queries'

const Note: FC<NoteType> = ({ id, text }: NoteType): JSX.Element => {
  return <div key={id}>{text}</div>
}

export default Note
