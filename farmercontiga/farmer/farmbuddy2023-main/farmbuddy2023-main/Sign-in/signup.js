// Get the sign-up link element
const signUpLink = document.querySelector(".sign-up");

// Get the separator element
const separator = document.querySelector(".separator");

// Add event listener to the sign-up link
signUpLink.addEventListener("click", () => {
    // Toggle the "collapsed" class on the separator element
    separator.classList.toggle("collapsed");
});
