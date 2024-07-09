document.addEventListener('DOMContentLoaded', function() {
    const quoteElement = document.getElementById('quote');
    const refreshButton = document.getElementById('refresh-button');
  
    // Fetch a quote initially
    fetchQuote();
  
    // Add event listener for refresh button
    refreshButton.addEventListener('click', function() {
      fetchQuote();
    });
  
    function fetchQuote() {
      fetch('https://api.quotable.io/random')
        .then(response => {
          if (!response.ok) {
            throw new Error('Failed to fetch quote');
          }
          return response.json();
        })
        .then(data => {
          quoteElement.textContent = data.content;
        })
        .catch(error => {
          console.error('Error fetching quote:', error);
          quoteElement.textContent = "Failed to fetch quote. Please try again later.";
        });
    }
  
    // Dark mode toggle
    const body = document.body;
    const darkModeToggle = document.getElementById('dark-mode-toggle');
  
    darkModeToggle.addEventListener('change', function() {
      body.classList.toggle('dark-mode');
    });
  });
  