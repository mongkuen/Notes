import React, { FC } from 'react'
import 'components/QueryError/styles.css'

const QueryError: FC = (): JSX.Element => {
  return (
    <div className='query-error'>
      Error fetching notes. Please refresh to retry.
    </div>
  )
}

export default QueryError
