import React, { FC, useState, useCallback } from 'react'
import 'components/modals/NoteModal/styles.css'
import 'components/modals/styles.css'
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
  const [buttonText, setButtonText] = useState('Make Note ✓')

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

  return openModal === NOTE_OPEN ? (
    <div className='modal-container'>
      <div className='modal-body'>
        <input
          className='text-input'
          placeholder='Note Text'
          type='text'
          onChange={handleChange}
          value={text}
        />
        {error && (
          <div className='modal-error'>
            Something went wrong, please try again
          </div>
        )}
      </div>
      <div className='modal-buttons'>
        <button
          className='btn'
          onClick={(): void => {
            setOpenModal({ variables: { openModal: CLOSED } })
          }}>
          Cancel ✕
        </button>
        <button
          className='btn btn-success'
          onClick={handleSubmit}
          disabled={text === '' || loading}>
          {loading ? 'Sending...' : buttonText}
        </button>
      </div>
    </div>
  ) : (
    <></>
  )
}

export default NoteModal
