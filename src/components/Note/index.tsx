import React, { FC, useCallback, useState } from 'react'
import 'components/Note/styles.css'
import { Note as NoteType, ALL_NOTES } from 'apollo/queries'
import { DELETE_NOTE } from 'apollo/mutations'
import { useMutation } from '@apollo/react-hooks'

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
    <div key={id}>
      {text}
      {(error || queryError) && 'Something went wrong, please try again'}
      <button onClick={handleDelete} disabled={loading}>
        {loading ? '...' : 'X'}
      </button>
    </div>
  )
}

export default Note
