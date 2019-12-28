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
    <div className='all-notes-container'>
      {keys(appConfig).map(
        (configType): JSX.Element => {
          const config = appConfig[configType]
          const typeData: Array<Note | DueNote> = data[config.dataSource]
          return (
            <div className='notes-container' key={configType}>
              <h2 className='collection-header'>
                {capitalize(config.name)} Collection
              </h2>
              {typeData.map(
                (note): JSX.Element => {
                  const DisplayComponent = config.displayComponent
                  /* eslint-disable-next-line */
                  return <DisplayComponent key={note.id} {...(note as any)} />
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
