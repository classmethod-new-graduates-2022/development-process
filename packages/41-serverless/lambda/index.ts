import 'source-map-support'
import * as zod from 'zod'
import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

const { TABLE_NAME, ENDPOINT } = process.env
const documentClient = DynamoDBDocument.from(
  new DynamoDBClient({ endpoint: ENDPOINT })
)

const eventSchema = zod.object({
  id: zod.number(),
  name: zod.string(),
  age: zod.number(),
})

type Result = { ok: true; data: unknown } | { ok: false; error: unknown }
export const handler = async (event: unknown): Promise<Result> => {
  const validationResult = eventSchema.safeParse(event)
  if (!validationResult.success) {
    return { ok: false, error: validationResult.error }
  }

  const { id, name, age } = validationResult.data

  const result = await documentClient.update({
    TableName: TABLE_NAME,
    Key: { id },
    ExpressionAttributeNames: { '#name': 'name', '#age': 'age' },
    ExpressionAttributeValues: { ':name': name, ':age': age },
    UpdateExpression: 'SET #name=:name, #age=:age',
    ReturnValues: 'ALL_NEW',
  })

  return { ok: true, data: result.Attributes }
}
