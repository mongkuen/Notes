import React, { FC, useState, useCallback } from 'react'
import 'components/modals/NoteModal/styles.css'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_OPEN_MODAL, GetOpenModalQuery, ALL_NOTES } from 'apollo/queries'
import { SET_OPEN_MODAL, ADD_NOTE } from 'apollo/mutations'
import { NOTE_OPEN, CLOSED } from 'components/modals/modalStates'

const NoteModal: FC = (): JSX.Element => {
  const {
    data: { openModal },
  } = useQuery(GET_OPEN_MODAL) as GetOpenModalQuery
  const [setOpenModal] = useMutation(SET_OPEN_MODAL)
  const [addNote, { loading, error }] = useMutation(ADD_NOTE, {
    refetchQueries: [
      {
        query: ALL_NOTES,
      },
    ],
  })
  const [text, setText] = useState('')
  const [buttonText, setButtonText] = useState('Make Note')

  const handleChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setText(e.currentTarget.value)
    },
    []
  )

  const handleSubmit = useCallback((): void => {
    addNote({ variables: { text } })
      .then((): void => {
        setOpenModal({ variables: { openModal: CLOSED } })
        setText('')
      })
      .catch((): void => {
        setButtonText('Retry Make Note')
      })
  }, [text, addNote, setOpenModal])

  return (
    <div>
      <label htmlFor='noteText'>Note</label>
      <input id='noteText' type='text' onChange={handleChange} value={text} />
      <p>OpenStatus: {`${openModal === NOTE_OPEN}`}</p>
      {error && 'Something went wrong, please try again'}
      <button
        onClick={(): void => {
          setOpenModal({ variables: { openModal: CLOSED } })
        }}>
        Cancel
      </button>
      <button onClick={handleSubmit} disabled={text === ''}>
        {loading ? 'Sending...' : buttonText}
      </button>
    </div>
  )
}

export default NoteModal
