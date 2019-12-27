import { gql } from 'apollo-boost'

export const SET_OPEN_MODAL = gql`
  mutation SetOpenModal($openModal: string) {
    setOpenModal(openModal: $openModal) @client
  }
`
