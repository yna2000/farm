window.onload = function () {
    google.accounts.id.initialize({
        client_id: 'YOUR_GOOGLE_CLIENT_ID',
        callback: handleCredentialResponse
    });
    google.accounts.id.renderButton(
        document.querySelector('.g_id_signin'),
        { theme: 'outline', size: 'large' }
    );
    google.accounts.id.prompt();
};
function handleCredentialResponse(response) {
    console.log('Google ID token: ' + response.credential);
}
window.fbAsyncInit = function() {
    FB.init({
        appId      : 'YOUR_FACEBOOK_APP_ID',
        cookie     : true,
        xfbml      : true,
        version    : 'v16.0'
    });
    FB.AppEvents.logPageView();
};
function facebookLogin() {
    FB.login(function(response) {
        if (response.authResponse) {
            console.log('Welcome! Fetching your information.... ');
            FB.api('/me', {fields: 'name,email'}, function(response) {
                console.log('Good to see you, ' + response.name + '.');
                console.log('User ID: ' + response.id);
                console.log('Email: ' + response.email);
            });
        } else {
            console.log('User cancelled login or did not fully authorize.');
        }
    }, {scope: 'public_profile,email'});
}