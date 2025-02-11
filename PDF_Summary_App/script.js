/**
 * Function: uploadPDF
 * Description: Handles the PDF upload process, sends it to the backend, and displays the summary.
 */
async function uploadPDF() {
    // Get the file input element
    const fileInput = document.getElementById("pdfFile");

    // Check if a file is selected
    if (!fileInput.files.length) {
        alert("Please select a PDF file.");
        return;
    }

    // Prepare the form data to send the file
    const formData = new FormData();
    formData.append("pdfFile", fileInput.files[0]);

    // Show the loading spinner
    document.getElementById("loading").style.display = "block";
    document.getElementById("summary").innerText = ""; // Clear previous summary

    try {
        // Send the PDF file to the backend via a POST request
        const response = await fetch("http://localhost:5001/upload", {
            method: "POST",
            body: formData
        });

        // Parse the JSON response
        const data = await response.json();

        // Display the generated summary
        document.getElementById("summary").innerText = data.summary;
    } catch (error) {
        console.error("Error:", error);
        document.getElementById("summary").innerText = "Failed to generate summary.";
    } finally {
        // Hide the loading spinner
        document.getElementById("loading").style.display = "none";
    }
}
