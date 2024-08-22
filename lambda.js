const { createServer, proxy } = require('@vendia/serverless-express');
const express = require('express');
const next = require('next');

const app = next({ dev: false });
const handle = app.getRequestHandler();

let serverHandler;

async function prepareServer() {
    await app.prepare();
    const server = express();

    server.all('*', (req, res) => {
        return handle(req, res);
    });

    return createServer(server);
}

exports.handler = async (event, context) => {
    if (!serverHandler) {
        serverHandler = await prepareServer();
    }
    return proxy(serverHandler, event, context);
};