import { DynamoDB } from '@aws-sdk/client-dynamodb'
import { DynamoDBDocument } from '@aws-sdk/lib-dynamodb'

export const fetchProductPriceWithTax = async (productId: string) => {
  const ddb = new DynamoDB({
    credentials: {
      accessKeyId: 'DUMMY',
      secretAccessKey: 'DUMMY',
    },
  })
  const ddbDoc = DynamoDBDocument.from(ddb)

  ddbDoc.get({
    TableName: 'products',
    Key: {
      id: productId,
    },
  })
}
