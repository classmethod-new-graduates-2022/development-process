#!/bin/bash

# テーブルを作成
awslocal dynamodb create-table \
  --table-name=todos \
  --key-schema='AttributeName=id,KeyType=HASH' \
  --attribute-definitions='AttributeName=id,AttributeType=S' \
  --provisioned-throughput='ReadCapacityUnits=10,WriteCapacityUnits=5'

# テーブル一覧を表示
awslocal dynamodb list-tables
