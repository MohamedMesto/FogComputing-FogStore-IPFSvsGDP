# Fog Computing

An application built for the fog computing use case using NodeJs and ZeroMQ.

## Getting Started

### Prerequisites

```
NodeJs >= v8
```
```
Docker
```

### Start

#### Server
```
npm run server
```

#### Client
```
npm run client
```
```
docker run -p 4225:4225 -it langleu/tfstubserver
```

#### Environment Variables
- PORT
- BACKEND_IP
- NODE_ENV
- FRONTEND_PORT