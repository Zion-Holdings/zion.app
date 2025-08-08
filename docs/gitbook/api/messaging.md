# Messaging API

## POST /threads
Create a message thread for a job/quote.

```json
{
  "topic": "j_123",
  "members": ["u_123", "u_789"]
}
```

## POST /messages
Send a message.

```json
{
  "threadId": "th_999",
  "body": "Can you share the wireframes?"
}
```

## GET /threads/{id}/messages
Paginated messages.