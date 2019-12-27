import React, { FC } from 'react'
import 'components/App/styles.css'
import AddButtons from 'components/AddButtons'
import AllNotes from 'components/AllNotes'
import AddModals from 'components/AddModals'

const App: FC = (): JSX.Element => {
  return (
    <>
      <AddButtons />
      <AllNotes />
      <AddModals />
    </>
  )
}

export default App
