import React, { FC, useCallback, useState } from 'react'
import 'components/Note/styles.css'
import 'components/AllNotes/styles.css'
import { Note as NoteType, ALL_NOTES } from 'apollo/queries'
import { DELETE_NOTE } from 'apollo/mutations'
import { useMutation } from '@apollo/react-hooks'
import { capitalizeFirst } from 'helpers'

const Note: FC<NoteType> = ({ id, text }: NoteType): JSX.Element => {
  const [queryError, setQueryError] = useState(false)
  const [deleteNote, { loading, error }] = useMutation(DELETE_NOTE, {
    refetchQueries: [
      {
        query: ALL_NOTES,
      },
    ],
  })

  const handleDelete = useCallback((): void => {
    if (window.confirm('Delete Note? This cannot be undone.')) {
      deleteNote({ variables: { id } })
        .then((): void => {
          setQueryError(false)
        })
        .catch((): void => {
          setQueryError(true)
        })
    }
  }, [deleteNote, id])

  return (
    <div key={id} className='note-item'>
      {capitalizeFirst(text)}
      {(error || queryError) && (
        <div className='note-error'>Error, please try again.</div>
      )}
      <button
        className='note-item-delete'
        onClick={handleDelete}
        disabled={loading}>
        {loading ? '...' : '✕'}
      </button>
    </div>
  )
}

export default Note
