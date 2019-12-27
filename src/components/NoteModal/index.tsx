import React, { FC } from 'react'
import 'components/NoteModal/styles.css'

export interface NoteModalProps {
  open: boolean
}

const NoteModal: FC<NoteModalProps> = ({
  open = false,
}: NoteModalProps): JSX.Element => {
  return (
    <div>
      <p>Note Modal</p>
      <p>OpenStatus: {`${open}`}</p>
    </div>
  )
}

export default NoteModal
