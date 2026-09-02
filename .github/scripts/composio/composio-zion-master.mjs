import { Composio } from '@composio/core';

const composio = new Composio({ apiKey: process.env.COMPOSIO_API_KEY });
const userId = process.env.ZION_USER_ID || 'zion-master';
