# Instant Messaging Setup

The application uses **Socket.IO** for real-time negotiations. A minimal API route
initialises a Socket.IO server and bridges to Django Channels. Rooms are keyed by
the related order or service identifier so participants only receive messages for
their transaction.

Install dependencies:
```bash
npm install socket.io socket.io-client
```

Minimal API route:
```ts
// pages/api/socket.ts
// Generic handler creating a Socket.IO server
```

## Django Channel Layer
Add the following configuration to `settings.py` on the Django side:

```python
CHANNEL_LAYERS = {
    "default": {
        "BACKEND": "channels_redis.core.RedisChannelLayer",
        "CONFIG": {"hosts": [("redis", 6379)]},
    }
}
```

Messages should be stored in a `ChatMessage` model. Each message includes the
room ID, sender, content and timestamp.
