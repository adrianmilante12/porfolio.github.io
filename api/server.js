const express = require('express');
const path = require('path');
const fs = require('fs');
const serverless = require('serverless-http');  // Ensure this is imported

const app = express();

// Serve public files like HTML, CSS, JS
app.use(express.static(path.join(__dirname, '../public')));

// Serve static assets from the '_assets/static/' folder
app.use('/_assets/static', express.static(path.join(__dirname, '../_assets/static')));

// ✅ Route for static assets with validation (to block restricted file types like PHP)
app.get('/_assets/static/:filename', (req, res) => {
  const filePath = path.join(__dirname, '../', req.path);
  const allowedExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.svg', '.ico', '.webp', '.mp3', '.mp4'];

  // Block access to PHP files or folders named php
  if (filePath.includes('/php/') || path.extname(filePath) === '.php') {
    return res.status(403).send('Access to PHP is forbidden');
  }

  // Serve file if it exists and extension is allowed
  if (fs.existsSync(filePath) && allowedExtensions.includes(path.extname(filePath))) {
    return res.sendFile(filePath);
  }

  res.status(404).send('File not found or not allowed');
});

// Block direct access to _assets root
app.use('/_assets', (req, res) => {
  res.status(403).send('Direct access to _assets is restricted');
});

// Export the Express app as a serverless function
module.exports.handler = serverless(app);  // Use the handler method
