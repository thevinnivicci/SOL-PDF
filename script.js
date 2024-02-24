document.getElementById("passwordForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    var password = document.getElementById("password").value;
    if (password === "20345100778") { // Change "your_password" to your actual password
        document.getElementById("passwordForm").style.display = "none"; // Hide password form
        document.getElementById("pdfContainer").style.display = "block"; // Show PDF container
        loadPDF("provisional.pdf"); // Load your PDF, replace "your_pdf.pdf" with your PDF file path
    } else {
        alert("Incorrect password! Please try again."); // Show alert for incorrect password
    }
});

function loadPDF(pdfPath) {
    var pdfViewer = document.getElementById("pdfViewer");
    pdfViewer.src = pdfPath;
}
