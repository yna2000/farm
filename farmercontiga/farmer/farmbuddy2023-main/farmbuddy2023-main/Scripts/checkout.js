document.querySelector("#btn").addEventListener("click", () => {
  // Existing code for getting form values...

  // Generate and send OTP
  const otp = generateOTP(); // Assume this function generates the OTP
  sendOTP(otp, phno); // Assume this function sends the OTP to the provided phone number

  // Show OTP input field
  const otpContainer = document.getElementById("otpContainer");
  otpContainer.style.display = "block";

  // Hide the loader
  document.querySelector('.spinnerContainer').style.display = 'none';
});

// Function to verify OTP
document.querySelector("#verifyOTPBtn").addEventListener("click", () => {
  const enteredOTP = document.querySelector(".otp").value;
  // Verify OTP here...
  if (enteredOTP === otp) {
    // Proceed with checkout
    // Redirect to profile page or whatever you want to do
    window.location.href = "../Profile";
  } else {
    alert("Invalid OTP. Please try again.");
  }
});

// Function to generate OTP
function generateOTP() {
  // Generate OTP logic here...
  return "123456"; // For demonstration, replace with actual OTP generation logic
}

// Function to send OTP (You might need to implement this using your backend)
function sendOTP(otp, phoneNumber) {
  // Send OTP logic here...
  // You might need to make an AJAX call to your server to send the OTP
  console.log("Sending OTP:", otp, "to", phoneNumber);
}

const lod = document.querySelector("#lod");
lod.style.display = "none";
window.addEventListener("load", function () {
  var loader = document.querySelector(".spinnerContainer");
  loader.style.display = "none";
  lod.style.display = "block";
});

