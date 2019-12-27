import React, { FC } from 'react'
import 'components/NoteModal/styles.css'

export interface DueNoteModalProps {
  open: boolean
}

const DueNoteModal: FC<DueNoteModalProps> = ({
  open = false,
}: DueNoteModalProps): JSX.Element => {
  return (
    <div>
      <p>Due Note Modal</p>
      <p>OpenStatus: {`${open}`}</p>
    </div>
  )
}

export default DueNoteModal
