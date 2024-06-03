function handleCredentialResponse(response) {
    console.log('Google ID token: ' + response.credential);
    fetch('/google-login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ token: response.credential }),
    })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert('Logged in successfully!', 'success');
            } else {
                alert('Login failed. Please try again.', 'danger');
            }
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('An error occurred. Please try again.', 'danger');
        });
}
document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email_field').value;
    const pass = document.querySelector('#password_field').value;
    if (email === '' || pass === '') {
        alert('Please Fill All The Fields', 'danger');
    } else {
        // Handle form submission
        console.log('Form submitted', { email, pass });
        alert('Form submitted', 'success');
    }
});