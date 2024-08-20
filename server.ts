import { createServer, IncomingMessage, ServerResponse } from 'http'
import { parse } from 'url'
import next from 'next'
import serverlessHttp from 'serverless-http'

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, dir: __dirname })
const handle = app.getRequestHandler()

const server = createServer((req: IncomingMessage, res: ServerResponse) => {
  const parsedUrl = parse(req.url!, true)
  handle(req, res, parsedUrl)
})

const handler = serverlessHttp(server)

export { handler }
