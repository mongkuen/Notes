import React, { FC } from 'react'
import 'components/DueNote/styles.css'
import { DueNote } from 'apollo/queries'
import { dateFromTimestamp, timeFromTimestamp } from 'helpers'

const Note: FC<DueNote> = ({
  id,
  text,
  due_timestamp,
}: DueNote): JSX.Element => {
  return (
    <div key={id}>
      {text}
      <div>
        {dateFromTimestamp(due_timestamp)} {timeFromTimestamp(due_timestamp)}
      </div>
    </div>
  )
}

export default Note
