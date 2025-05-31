document.addEventListener('DOMContentLoaded', function() {
    const summarizeButton = document.getElementById('ai-summarize-button');
    if (summarizeButton) {
        summarizeButton.addEventListener('click', function() {
            const lessonTitleElement = document.querySelector('.lesson-content h2');
            const lessonTitle = lessonTitleElement ? lessonTitleElement.textContent : 'this lesson';

            // Get or create the summary output area
            let summaryArea = document.getElementById('ai-summary-output');
            if (!summaryArea) {
                summaryArea = document.createElement('div');
                summaryArea.id = 'ai-summary-output';
                summaryArea.style.marginTop = '20px';
                summaryArea.style.padding = '15px';
                summaryArea.style.backgroundColor = '#eef';
                summaryArea.style.border = '1px solid #ccd';
                summaryArea.style.borderRadius = '5px';
                summarizeButton.parentNode.insertBefore(summaryArea, summarizeButton.nextSibling);
            }
            summaryArea.innerHTML = `<p><i>Generating AI summary for "${lessonTitle}"... please wait.</i></p>`;
            summarizeButton.disabled = true;

            // Fetch API call to the backend
            fetch('/api/summarize_lesson', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    // In a real app, you might need CSRF tokens or other headers
                },
                // body: JSON.stringify({ lesson_title: lessonTitle }) // Example of sending data
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok: ' + response.statusText);
                }
                return response.json();
            })
            .then(data => {
                if (data.status === 'success') {
                    summaryArea.innerHTML = `<h4>${data.summary_title}</h4><p>${data.summary_content}</p>`;
                } else {
                    summaryArea.innerHTML = `<p>Error generating summary. Please try again.</p>`;
                }
            })
            .catch(error => {
                console.error('Error calling summarize API:', error);
                summaryArea.innerHTML = `<p>An error occurred while trying to generate the summary: ${error.message}. Please check the console.</p>`;
            })
            .finally(() => {
                summarizeButton.disabled = false; // Re-enable button
            });
        });
    }

    console.log('Zion Academy script.js loaded and updated for API call.');
});
