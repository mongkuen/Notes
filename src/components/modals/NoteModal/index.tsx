import React, { FC } from 'react'
import 'components/modals/NoteModal/styles.css'
import { useQuery, useMutation } from '@apollo/react-hooks'
import { GET_OPEN_MODAL, GetOpenModalQuery } from 'apollo/queries'
import { SET_OPEN_MODAL } from 'apollo/mutations'
import { NOTE_OPEN, CLOSED } from 'components/modals/modalStates'

const NoteModal: FC = (): JSX.Element => {
  const {
    data: { openModal },
  } = useQuery(GET_OPEN_MODAL) as GetOpenModalQuery
  const [setOpenModal] = useMutation(SET_OPEN_MODAL)

  return (
    <div>
      <p>Note Modal</p>
      <p>OpenStatus: {`${openModal === NOTE_OPEN}`}</p>
      <button
        onClick={(): void => {
          setOpenModal({ variables: { openModal: CLOSED } })
        }}>
        Close
      </button>
    </div>
  )
}

export default NoteModal
