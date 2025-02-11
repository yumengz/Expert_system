# PDF Summary App
This project consists of a backend (Node.js) and a frontend (HTML, JavaScript) that allows users to upload a PDF file, extract its text, and summarize it using DeepSeek's AI API.

## Backend: server.js
The backend handles the file upload, extracts text from the PDF, and sends the extracted text to the DeepSeek API for summarization.

## Frontend: index.html (HTML + JavaScript)
The frontend allows users to upload a PDF file and displays the summary.

## Running the Application
#### Step 1: Start Ollama with DeepSeek 
ollama run deepseek-r1:1.5b

#### Step 2: Start the Backend
node server.js

#### Step 3: Open Frontend
Open the index.html file in a browser.

#### Step 4: Upload a PDF
Select a PDF file and click Summarize.
The extracted summary appears below.
