const env = process.env.NODE_ENV;

const client = {
 type: 'client',
 app: {
   port: process.env.PORT || 3000,
   backendIp: process.env.BACKEND_IP || '127.0.0.1'
 }
};

const server = {
 type: 'server',
 app: {
   port: process.env.PORT || 3000,
   frontendPort: process.env.FRONTEND_PORT || 8080
 }
};

const config = {
 client,
 server
};

module.exports = config[env];
