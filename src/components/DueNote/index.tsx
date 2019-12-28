import React, { FC } from 'react'
import 'components/DueNote/styles.css'
import { DueNote as DueNoteType } from 'apollo/queries'
import { dateFromTimestamp } from 'helpers'

const DueNote: FC<DueNoteType> = ({
  id,
  text,
  due_timestamp,
}: DueNoteType): JSX.Element => {
  const now = Date.now()
  const overdue = now > due_timestamp

  return (
    <div key={id}>
      {text}
      {overdue && 'Overdue'}
      <div>{dateFromTimestamp(due_timestamp)}</div>
    </div>
  )
}

export default DueNote
