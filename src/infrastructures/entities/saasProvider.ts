/* eslint-disable no-undef */

import DynamoDB from '@aw/dynamodb';
import { Table, Entity } from 'dynamodb-toolbox';

const client = new DynamoDB();
const tableName = process.env.SAAS_PROVIDERS_TABLE;

const saasProvidersTable = new Table({
  name: tableName,
  partitionKey: 'pk',
  DocumentClient: client.dynamoDBClient(),
});

export const saasProviderEntity = new Entity({
  name: tableName,
  attributes: {
    pk: { partitionKey: true },
    name: { type: 'string' },
    api_key: { type: 'string' },
    auth_type: { type: 'string' },
    client_id: { type: 'string' },
    client_secret: { type: 'string' },
    description: { type: 'string' },
    is_active: { type: 'boolean' },
    is_deleted: { type: 'boolean' },
    logo: { type: 'string' },
    redirect_url: { type: 'string' },
    scopes: { type: 'list' },
  },
  table: saasProvidersTable,
} as const);
