# Use Node.js 16 base image
FROM node:18-bullseye

# Set working directory in container
WORKDIR /usr/src/app

# Copy package.json and .env file for environment variables
COPY package.json ./
COPY .env ./

# Set environment to production
ENV NODE_ENV=production

# Install dependencies without dev packages and with frozen lockfile
RUN npm install --production --quiet --frozen-lockfile

# Install libvips for Strapi image processing
RUN apt-get update && apt-get install -y libvips-dev && rm -rf /var/lib/apt/lists/*

# Copy the rest of the application code
COPY . .

# Set permissions for Cloud Run to handle file uploads and modules
RUN chmod -R 777 /usr/src/app/node_modules
RUN mkdir -p /usr/src/app/public/uploads && chmod -R 777 /usr/src/app/public/uploads

# Build the Strapi admin UI
RUN npm run build

# Expose ports (1337 for Strapi, 5432 if using PostgreSQL)
EXPOSE 1337
EXPOSE 5432

# Switch to a non-root user for security
USER 1000

# Start Strapi in production mode
CMD ["npm", "start"]
