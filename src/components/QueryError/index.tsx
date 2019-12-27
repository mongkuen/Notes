import React, { FC } from 'react'
import 'components/QueryError/styles.css'

const QueryError: FC = (): JSX.Element => {
  return <p>Error fetching notes. Please retry.</p>
}

export default QueryError
