import React from 'react'
import ReactDOM from 'react-dom'
import 'index.css'
import App from 'components/App'
import { client } from 'apollo/client'
import { ApolloProvider } from '@apollo/react-hooks'

const ApolloApp = (): JSX.Element => {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  )
}

ReactDOM.render(<ApolloApp />, document.getElementById('root'))
