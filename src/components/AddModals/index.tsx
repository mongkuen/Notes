import React, { FC } from 'react'
import 'components/AddModals/styles.css'
import appConfig from 'appConfig'
import { keys } from 'helpers'

const AddModals: FC = (): JSX.Element => {
  return (
    <>
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          const ModalComponent = config.modalComponent
          return <ModalComponent key={configType} open={false} />
        }
      )}
    </>
  )
}

export default AddModals
