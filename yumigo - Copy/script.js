document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Get the values from the form
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const age = document.getElementById('age').value;
    const birthday = document.getElementById('birthday').value;

    // Store user details in local storage
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('age', age);
    localStorage.setItem('birthday', birthday);

    // Redirect to profile page
    window.location.href = 'profile.html';
});
window.onload = function() {
    // Retrieve user details from local storage
    const username = localStorage.getItem('username');
    const age = localStorage.getItem('age');
    const birthday = localStorage.getItem('birthday');

    // Display the user details
    document.getElementById('profileDetails').innerHTML = `
        <p><strong>Username:</strong> ${username}</p>
        <p><strong>Age:</strong> ${age}</p>
        <p><strong>Birthday:</strong> ${birthday}</p>
    `;
};

// Function to go back to the login page
function goBack() {
    window.location.href = 'index.html';
}