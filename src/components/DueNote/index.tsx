import React, { FC, useCallback, useState } from 'react'
import 'components/DueNote/styles.css'
import 'components/AllNotes/styles.css'
import { DueNote as DueNoteType, ALL_NOTES } from 'apollo/queries'
import { dateFromTimestamp, capitalizeFirst } from 'helpers'
import { DELETE_DUE_NOTE } from 'apollo/mutations'
import { useMutation } from '@apollo/react-hooks'

const DueNote: FC<DueNoteType> = ({
  id,
  text,
  due_timestamp,
}: DueNoteType): JSX.Element => {
  const now = Date.now()
  const overdue = now > due_timestamp

  const [queryError, setQueryError] = useState(false)
  const [deleteDueNote, { loading, error }] = useMutation(DELETE_DUE_NOTE, {
    refetchQueries: [
      {
        query: ALL_NOTES,
      },
    ],
  })

  const handleDelete = useCallback((): void => {
    if (window.confirm('Delete Due Note? This cannot be undone.')) {
      deleteDueNote({ variables: { id } })
        .then((): void => {
          setQueryError(false)
        })
        .catch((): void => {
          setQueryError(true)
        })
    }
  }, [deleteDueNote, id])

  return (
    <div key={id} className='note-item'>
      {(error || queryError) && (
        <div className='note-error'>Error, please try again.</div>
      )}
      {capitalizeFirst(text)}
      <div className='due-note-dates'>
        {overdue && <div className='due-note-overdue'>Overdue</div>}
        <div className='due-note-date'>{dateFromTimestamp(due_timestamp)}</div>
        <button
          className='note-item-delete'
          onClick={handleDelete}
          disabled={loading}>
          {loading ? '...' : '✕'}
        </button>
      </div>
    </div>
  )
}

export default DueNote
