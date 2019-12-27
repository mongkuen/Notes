import { gql, ApolloError } from 'apollo-boost'

export interface Note {
  id: string
  text: string
  created_at: string
  updated_at: string
}

export interface DueNote {
  id: string
  text: string
  due_timestamp: number
  created_at: string
  updated_at: string
}

export interface AllNotesData {
  notes: Note[]
  due_notes: DueNote[]
}

export interface AllNotesQuery {
  loading?: boolean
  error?: ApolloError | undefined
  data: AllNotesData | undefined
}

export const ALL_NOTES = gql`
  {
    notes {
      id
      text
      created_at
      updated_at
    }
    due_notes {
      id
      text
      due_timestamp
      created_at
      updated_at
    }
  }
`
