const https = require('https');

https.get('https://host.docker.internal:3000', res => console.log(res.statusCode))
	.on('error', console.error);
