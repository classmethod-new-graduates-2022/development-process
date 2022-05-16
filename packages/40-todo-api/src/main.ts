import express from 'express'
import cors from 'cors'
import { v4 as uuidV4 } from 'uuid'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

const { AWS_ENDPOINT } = process.env
const documentClient = DynamoDBDocument.from(
  new DynamoDBClient({ endpoint: AWS_ENDPOINT })
)

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('', async (_, res) => {
  res.send('ok')
})

app.get('/todos', async (_, res) => {
  const { Items: todos } = await documentClient.scan({ TableName: 'todos' })
  res.json({ todos })
})

app.post('/todos', async (req, res) => {
  const todo = { ...req.body, id: uuidV4() }
  await documentClient.put({ TableName: 'todos', Item: todo })
  res.json({ message: 'Success!' })
})

app.delete('/todos/:id', async (req, res) => {
  const { id } = req.params
  await documentClient.delete({ TableName: 'todos', Key: { id } })
  res.json({ message: 'Success!' })
})

app.listen(3001, () => {
  console.info('Server is running on http://localhost:3001')
})
