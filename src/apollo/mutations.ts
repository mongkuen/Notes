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
        text
        created_at
        updated_at
      }
    }
  }
`
