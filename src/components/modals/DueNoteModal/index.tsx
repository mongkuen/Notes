import React, { FC, useState, useCallback } from 'react'
import 'components/modals/DueNoteModal/styles.css'
import 'components/modals/styles.css'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_OPEN_MODAL, GetOpenModalQuery, ALL_NOTES } from 'apollo/queries'
import { SET_OPEN_MODAL, ADD_DUE_NOTE } from 'apollo/mutations'
import { DUE_NOTE_OPEN, CLOSED } from 'components/modals/modalStates'
import { inThreeDays, isPast, inputToLocalTimestamp } from 'helpers'
import appConfig from 'appConfig'

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
  const [buttonText, setButtonText] = useState('Make Due Note ✓')

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

  const handleSubmit = useCallback(
    (e: React.FormEvent): void => {
      e.preventDefault()
      const timestamp = inputToLocalTimestamp(date)
      addDueNote({ variables: { text, due_timestamp: timestamp } })
        .then((): void => {
          setOpenModal({ variables: { openModal: CLOSED } })
          setText('')
        })
        .catch((): void => {
          setButtonText('Retry Make Due Note')
        })
    },
    [text, addDueNote, setOpenModal, date]
  )

  const alreadyPast = isPast(date)

  return openModal === DUE_NOTE_OPEN ? (
    <form className='modal-container due-note-modal'>
      <h1
        className='modal-header'
        style={{
          color: appConfig.dueNote.backgroundColor,
        }}>
        Add a new Due Note
      </h1>
      <div className='modal-body'>
        <input
          className='text-input'
          placeholder='Note text'
          type='text'
          onChange={handleTextChange}
          value={text}
        />
        <label className='due-note-label' htmlFor='dueNoteDate'>
          Due Date
        </label>
        <input
          className='text-input'
          id='dueNoteDate'
          type='date'
          value={date}
          onChange={handleDateChange}
        />
      </div>
      {error && (
        <div className='modal-error due-note-modal-error'>
          Something went wrong, please try again
        </div>
      )}
      {alreadyPast && (
        <div className='modal-error due-note-modal-error'>
          Set due date sometime in the future
        </div>
      )}
      <div className='modal-buttons'>
        <button
          type='button'
          className='btn'
          onClick={(): void => {
            setOpenModal({ variables: { openModal: CLOSED } })
          }}>
          Cancel ✕
        </button>
        <button
          type='submit'
          className='btn btn-success'
          onClick={handleSubmit}
          disabled={text === '' || alreadyPast || loading}>
          {loading ? 'Sending...' : buttonText}
        </button>
      </div>
    </form>
  ) : (
    <></>
  )
}

export default DueNoteModal
