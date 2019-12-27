import React, { FC } from 'react'
import 'components/Loading/styles.css'
import appConfig from 'appConfig'
import { keys, capitalize } from 'helpers'
import { useMutation } from '@apollo/react-hooks'
import { SET_OPEN_MODAL } from 'apollo/mutations'

const AddButtons: FC = (): JSX.Element => {
  const [setOpenModal] = useMutation(SET_OPEN_MODAL)

  return (
    <>
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          return (
            <button
              key={configType}
              onClick={(): void => {
                setOpenModal({ variables: { openModal: configType } })
              }}>
              Add a new {capitalize(config.name)}
            </button>
          )
        }
      )}
    </>
  )
}

export default AddButtons
