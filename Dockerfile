# Use the official Node.js 14 image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the entire project to the working directory
COPY . .

# Build the React app
RUN npm run build

# Set environment variables if needed
# ENV REACT_APP_API_URL=https://api.example.com

# Expose the container port (change 3000 if your React app uses a different port)
EXPOSE 3000

# Start the React app
CMD [ "npm", "start" ]
