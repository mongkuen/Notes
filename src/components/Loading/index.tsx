import React, { FC } from 'react'
import 'components/Loading/styles.css'

const Loading: FC = (): JSX.Element => {
  return (
    <div className='loading-container'>
      Loading...{' '}
      <span role='img' aria-label='loading' className='loading-icon'>
        🌀
      </span>
    </div>
  )
}

export default Loading
