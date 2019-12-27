import React, { FC } from 'react'
import 'components/Loading/styles.css'
import appConfig from 'appConfig'
import { keys, capitalize } from 'helpers'

const AddButtons: FC = (): JSX.Element => {
  return (
    <>
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          return (
            <button key={configType}>
              Add a new {capitalize(config.name)}
            </button>
          )
        }
      )}
    </>
  )
}

export default AddButtons
