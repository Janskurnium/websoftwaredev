# Use the official Deno image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Copy the application file to the container
COPY app.js .

# Allow network access and run the app
CMD ["run", "--allow-net", "--watch", "app.js"]