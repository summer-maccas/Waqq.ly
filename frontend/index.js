document.addEventListener('DOMContentLoaded', () => {
    const dogWalkerForm = document.getElementById('dogWalkerForm');
    const dogForm = document.getElementById('dogForm');
    const registeredWalkers = document.getElementById('registeredWalkers');
    const registeredDogs = document.getElementById('registeredDogs');

    // Add event listener to dog walker form
    dogWalkerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get input values
        const name = document.getElementById('dogWalkerName').value;
        const location = document.getElementById('dogWalkerLocation').value;
        const hourlyRate = document.getElementById('dogWalkerHourlyRate').value;
        const email = document.getElementById('dogWalkerEmail').value;
        const phone = document.getElementById('dogWalkerNumber').value;

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = `Name: ${name}, Location: ${location}, Hourly Rate: £${hourlyRate}, Email: ${email}, Phone: ${phone}`;

        // Append to the registered walkers list
        registeredWalkers.appendChild(listItem);
        dogWalkerForm.reset();

    });

    // Add event listener to dog form
    dogForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get input values
        const dogName = document.getElementById('dogName').value;
        const breed = document.getElementById('breed').value;
        const ownerLocation = document.getElementById('ownerLocation').value;
        const ownerEmail = document.getElementById('ownerEmail').value;
        const ownerPhone = document.getElementById('ownerNumber').value;

        // Create list item
        const listItem = document.createElement('li');
        listItem.textContent = `Dog Name: ${dogName}, Breed: ${breed}, Owner Location: ${ownerLocation}, Owner Email: ${ownerEmail}, Owner Phone: ${ownerPhone}`;

        // Append to the registered dogs list
        registeredDogs.appendChild(listItem);

        // Clear form inputs
        dogForm.reset();
    });
})

