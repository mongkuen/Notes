import React, { FC } from 'react'
import 'components/modals/AddModals/styles.css'
import appConfig from 'appConfig'
import { keys } from 'helpers'
import { useQuery } from '@apollo/react-hooks'
import { GET_OPEN_MODAL, GetOpenModalQuery } from 'apollo/queries'
import { CLOSED } from 'components/modals/modalStates'

const AddModals: FC = (): JSX.Element => {
  const {
    data: { openModal },
  } = useQuery(GET_OPEN_MODAL) as GetOpenModalQuery

  return (
    <>
      {openModal !== CLOSED && <div>Modal Overlay</div>}
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          const ModalComponent = config.modalComponent
          return <ModalComponent key={configType} />
        }
      )}
    </>
  )
}

export default AddModals
