document.querySelector("#btn").addEventListener("click", () => {
    const otp = generateOTP();
    sendOTP(otp, phno);er
    const otpContainer = document.getElementById("otpContainer");
    otpContainer.style.display = "block";
});
document.querySelector("#verifyOTPBtn").addEventListener("click", () => {
    const enteredOTP = document.querySelector(".otp").value;
    if (enteredOTP === otp) {
        window.location.href = "../Profile";
    } else {
        alert("Invalid OTP. Please try again.");
    }
});
function generateOTP() {
    return "123456";
}
function sendOTP(otp, phoneNumber) {
    console.log("Sending OTP:", otp, "to", phoneNumber);
}

