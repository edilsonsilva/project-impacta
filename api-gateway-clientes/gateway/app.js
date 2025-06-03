 
//index.js
const httpProxy = require('express-http-proxy');
const express = require('express');
const app = express();
var logger = require('morgan');
 
app.use(logger('dev'));
 
function selectProxyHost(req) {
    if (req.path.startsWith('/produtos'))
        return 'http://localhost:3001/';
    else if (req.path.startsWith('/usuarios'))
        return 'http://localhost:3002/';
}
 
app.use((req, res, next) => {
    httpProxy(selectProxyHost(req))(req, res, next);
});
 
app.listen(3000, () => {
    console.log('API Gateway running!');
});