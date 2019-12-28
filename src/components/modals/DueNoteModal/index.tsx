import React, { FC, useState, useCallback } from 'react'
import 'components/modals/NoteModal/styles.css'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_OPEN_MODAL, GetOpenModalQuery, ALL_NOTES } from 'apollo/queries'
import { SET_OPEN_MODAL, ADD_DUE_NOTE } from 'apollo/mutations'
import { DUE_NOTE_OPEN, CLOSED } from 'components/modals/modalStates'
import { inThreeDays, isPast, inputToLocalTimestamp } from 'helpers'

const DueNoteModal: FC = (): JSX.Element => {
  const {
    data: { openModal },
  } = useQuery(GET_OPEN_MODAL) as GetOpenModalQuery
  const [setOpenModal] = useMutation(SET_OPEN_MODAL)
  const [addDueNote, { loading, error }] = useMutation(ADD_DUE_NOTE, {
    refetchQueries: [
      {
        query: ALL_NOTES,
      },
    ],
  })
  const [text, setText] = useState('')
  const [date, setDate] = useState(inThreeDays())
  const [buttonText, setButtonText] = useState('Make Due Note')

  const handleTextChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      setText(e.currentTarget.value)
    },
    []
  )

  const handleDateChange = useCallback(
    (e: React.FormEvent<HTMLInputElement>): void => {
      const dateString = e.currentTarget.value
      setDate(dateString)
    },
    []
  )

  const handleSubmit = useCallback((): void => {
    const timestamp = inputToLocalTimestamp(date)
    addDueNote({ variables: { text, due_timestamp: timestamp } })
      .then((): void => {
        setOpenModal({ variables: { openModal: CLOSED } })
        setText('')
      })
      .catch((): void => {
        setButtonText('Retry Make Due Note')
      })
  }, [text, addDueNote, setOpenModal, date])

  const alreadyPast = isPast(date)

  return (
    <div>
      <label htmlFor='dueNoteText'>Note</label>
      <input
        id='dueNoteText'
        type='text'
        onChange={handleTextChange}
        value={text}
      />
      <label htmlFor='dueNoteDate'>Due Date</label>
      <input
        id='dueNoteDate'
        type='date'
        value={date}
        onChange={handleDateChange}
      />
      <p>OpenStatus: {`${openModal === DUE_NOTE_OPEN}`}</p>
      {error && 'Something went wrong, please try again'}
      {alreadyPast && 'Set due date sometime in the future'}
      <button
        onClick={(): void => {
          setOpenModal({ variables: { openModal: CLOSED } })
        }}>
        Cancel
      </button>
      <button onClick={handleSubmit} disabled={text === '' || alreadyPast}>
        {loading ? 'Sending...' : buttonText}
      </button>
    </div>
  )
}

export default DueNoteModal
