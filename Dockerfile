FROM node:16-alpine

# Install dependencies
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

# Copy source files
COPY . .

# Run the tests
CMD ["npm", "test"]
