// Load environment variables from .env file (not needed for local Ollama use)
// require('dotenv').config();

// Import necessary modules
const express = require('express');  // Express.js for creating API endpoints
const multer = require('multer');    // Multer for handling file uploads
const pdfParse = require('pdf-parse');  // pdf-parse for extracting text from PDFs
const axios = require('axios');  // Axios for making HTTP requests (used to call Ollama)
const cors = require('cors');    // CORS to allow frontend and backend communication

// Initialize an Express application
const app = express();
const PORT = 5001;  // Define the port number where the backend server will run

// Middleware setup
app.use(express.json()); // Enables parsing of JSON request bodies
app.use(cors()); // Allows requests from different origins (Frontend to Backend)

// Set up file storage using multer (Stores uploaded PDFs in memory)
const upload = multer({ storage: multer.memoryStorage() });

/**
 * Route: POST /upload
 * Description: Handles PDF file uploads, extracts text, and summarizes it using DeepSeek (via Ollama).
 */
app.post('/upload', upload.single('pdfFile'), async (req, res) => {
    // Check if a file was uploaded
    if (!req.file) {
        return res.status(400).json({ error: 'No file uploaded' });
    }

    try {
        // Step 1: Extract text from the uploaded PDF
        const pdfData = await pdfParse(req.file.buffer);
        const extractedText = pdfData.text.substring(0, 3000); // Limit text size for performance

        // Step 2: Summarize the extracted text using DeepSeek (running locally via Ollama)
        const summary = await summarizeWithDeepSeekOllama(extractedText);
        
        // Step 3: Return the summarized text to the frontend
        res.json({ summary });
    } catch (error) {
        console.error('Error processing PDF:', error);
        res.status(500).json({ error: 'Failed to process PDF' });
    }
});

/**
 * Function: summarizeWithDeepSeekOllama
 * Description: Calls the locally running DeepSeek model using Ollama to summarize text.
 * @param {string} text - The extracted text from the PDF
 * @returns {Promise<string>} - The summarized text
 */
async function summarizeWithDeepSeekOllama(text) {
    try {
        // Send a request to the Ollama server (running locally at port 11434)
        const response = await axios.post('http://localhost:11434/api/generate', {
            model: "deepseek-r1:1.5b",  // The model name you installed in Ollama
            prompt: `Summarize the following text:\n\n${text}`, // Instruction to the model
            stream: false  // Set to false to receive the full response at once
        });

        // Return the summary response from DeepSeek
        return response.data.response;
    } catch (error) {
        console.error("Ollama (DeepSeek) error:", error);
        return "Summary generation failed."; // Default response in case of an error
    }
}

// Start the Express server on the defined port
app.listen(PORT, () => {
    console.log(`✅ Server is running at: http://localhost:${PORT}`);
});
