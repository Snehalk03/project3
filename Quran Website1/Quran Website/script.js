document.addEventListener('DOMContentLoaded', function () {
    // Function to load translations
    function loadTranslations(surahId) {
        fetch(`translations/${surahId}_hindi.txt`)
            .then(response => response.text())
            .then(data => document.getElementById(`translation-hindi-${surahId}`).innerText = data)
            .catch(error => console.error('Error loading Hindi translation:', error));

        fetch(`translations/${surahId}_english.txt`)
            .then(response => response.text())
            .then(data => document.getElementById(`translation-english-${surahId}`).innerText = data)
            .catch(error => console.error('Error loading English translation:', error));
    }

    // Load translations for each surah
    const surahs = document.querySelectorAll('.surah');
    surahs.forEach(surah => {
        const surahId = surah.getAttribute('data-surah-id');
        loadTranslations(surahId);
    });

    // Handle donation form submission
    const form = document.getElementById('donation-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        
        const name = form.name.value;
        const email = form.email.value;
        const amount = form.amount.value;
        const message = form.message.value;

        console.log('Donation Details:', { name, email, amount, message });

        // You can add code here to send the donation data to your server

        alert('Thank you for your donation!');
        form.reset();
    });
});
