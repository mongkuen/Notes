import React, { FC } from 'react'
import 'components/AddButtons/styles.css'
import appConfig from 'appConfig'
import { keys, capitalize } from 'helpers'
import { useMutation } from '@apollo/react-hooks'
import { SET_OPEN_MODAL } from 'apollo/mutations'

const AddButtons: FC = (): JSX.Element => {
  const [setOpenModal] = useMutation(SET_OPEN_MODAL)

  return (
    <div className='header-buttons'>
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          return (
            <button
              className='header-button'
              key={configType}
              onClick={(): void => {
                setOpenModal({ variables: { openModal: configType } })
              }}
              style={{
                backgroundColor: config.backgroundColor,
              }}>
              Add a new {capitalize(config.name)}
            </button>
          )
        }
      )}
    </div>
  )
}

export default AddButtons
