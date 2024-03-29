document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searchInput").addEventListener("input", function() {
        let input = this.value.trim();
        if (input.length > 2) {
            let xhr = new XMLHttpRequest();
            xhr.open("GET", "http://localhost:3000/api/comments?query=" + input, true); 
            xhr.onreadystatechange = function() {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    let response = JSON.parse(xhr.responseText);
                    displayResults(response);
                }
            };
            xhr.send();
        }
    });
});

function displayResults(comments) {
    let input = document.getElementById("searchInput").value.trim().toLowerCase();
    let resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = ""; 
    comments.forEach(function(comment) {
        if (comment.body.toLowerCase().includes(input) || comment.name.toLowerCase().includes(input)) {
            let resultDiv = document.createElement("div");
            resultDiv.textContent = comment.body;
            resultsContainer.appendChild(resultDiv);
        }
    });
}
