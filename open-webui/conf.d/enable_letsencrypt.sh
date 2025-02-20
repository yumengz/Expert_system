#!/bin/bash

# Description: Obtain and install Let's Encrypt SSL certificates on macOS using Certbot.

DOMAIN="yumeng.duckdns.org"
EMAIL="yumengz@umich.com"

# Install Certbot if not installed
if ! command -v certbot &> /dev/null; then
    echo "Certbot not found. Installing..."
    brew install certbot
fi

# Stop Nginx before using standalone mode
echo "Stopping Nginx..."
sudo brew services stop nginx

# Obtain SSL certificate using standalone mode
sudo certbot certonly --standalone -d "$DOMAIN" --non-interactive --agree-tos -m "$EMAIL"

# Start Nginx again
echo "Starting Nginx..."
sudo brew services start nginx

echo "Let's Encrypt SSL certificate has been installed and Nginx reloaded."
