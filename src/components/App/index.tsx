import React, { FC } from 'react'
import 'components/App/styles.css'
import { useQuery } from '@apollo/react-hooks'
import { ALL_NOTES, AllNotesQuery } from 'queries'
import QueryError from 'components/QueryError'
import Loading from 'components/Loading'
import { dateFromTimestamp, timeFromTimestamp } from 'helpers'

const App: FC = (): JSX.Element => {
  const allNotes: AllNotesQuery = useQuery(ALL_NOTES)
  const { loading, error, data } = allNotes

  if (loading) return <Loading />
  if (error) return <QueryError />
  return data === undefined ? (
    <QueryError />
  ) : (
    <div>
      <h1>Notes</h1>
      {data.notes.map(
        ({ id, text }): JSX.Element => {
          return <div key={id}>{text}</div>
        }
      )}
      <h2>Due Notes</h2>
      {data.due_notes.map(
        ({ id, text, due_timestamp }): JSX.Element => {
          return (
            <div key={id}>
              {text}
              <div>
                {dateFromTimestamp(due_timestamp)}{' '}
                {timeFromTimestamp(due_timestamp)}
              </div>
            </div>
          )
        }
      )}
    </div>
  )
}

export default App
