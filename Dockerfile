FROM public.ecr.aws/lambda/nodejs:18

WORKDIR /var/task

# Copy package.json and package-lock.json
COPY package*.json ./

# Install production dependencies
RUN npm ci --only=production

# Copy rest of the application
COPY . .

# Build the Next.js application
RUN npm run build

# Set the CMD to your handler
CMD [ "lambda.handler" ]