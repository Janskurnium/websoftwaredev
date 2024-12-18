# Use the official Deno image
FROM denoland/deno:latest

# Set the working directory
WORKDIR /app

# Copy the application file to the container
COPY . .

# Allow network access and run the app
CMD ["deno", "run", "--unstable-kv", "--allow-net", "app-run.js"]