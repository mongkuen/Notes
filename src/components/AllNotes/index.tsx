import React, { FC } from 'react'
import 'components/AllNotes/styles.css'
import { useQuery } from '@apollo/react-hooks'
import { ALL_NOTES, AllNotesQuery, Note, DueNote } from 'apollo/queries'
import QueryError from 'components/QueryError'
import Loading from 'components/Loading'
import { keys, capitalize } from 'helpers'
import appConfig from 'appConfig'

const AllNotes: FC = (): JSX.Element => {
  const allNotes: AllNotesQuery = useQuery(ALL_NOTES)
  const { loading, error, data } = allNotes

  if (loading) return <Loading />
  if (error) return <QueryError />
  return data === undefined ? (
    <QueryError />
  ) : (
    <div>
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          const typeData: Array<Note | DueNote> = data[config.dataSource]
          return (
            <div key={configType}>
              <h1>{capitalize(config.name)}</h1>
              {typeData.map(
                (note): JSX.Element => {
                  const DisplayComponent = appConfig.note.displayComponent
                  return <DisplayComponent key={note.id} {...note} />
                }
              )}
            </div>
          )
        }
      )}
    </div>
  )
}

export default AllNotes
