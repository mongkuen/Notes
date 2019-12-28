import { gql } from 'apollo-boost'

export const SET_OPEN_MODAL = gql`
  mutation SetOpenModal($openModal: string) {
    setOpenModal(openModal: $openModal) @client
  }
`

export const ADD_NOTE = gql`
  mutation AddNote($text: String!) {
    insert_notes(objects: { text: $text }) {
      returning {
        id
      }
    }
  }
`

export const ADD_DUE_NOTE = gql`
  mutation AddDueNote($text: String!, $due_timestamp: numeric!) {
    insert_due_notes(objects: { text: $text, due_timestamp: $due_timestamp }) {
      returning {
        id
      }
    }
  }
`

export const DELETE_NOTE = gql`
  mutation DeleteNote($id: uuid) {
    delete_notes(where: { id: { _eq: $id } }) {
      affected_rows
    }
  }
`
