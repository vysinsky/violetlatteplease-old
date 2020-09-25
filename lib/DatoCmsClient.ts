import { GraphQLClient } from 'graphql-request'
import { getSdk } from '../generated/sdk'

const client = new GraphQLClient(process.env.DATOCMS_ENDPOINT, {
  headers: {
    authorization: `Bearer ${process.env.DATOCMS_TOKEN}`,
  },
})

export default getSdk(client)
