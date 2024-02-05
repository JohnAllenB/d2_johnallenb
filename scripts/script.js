function greetUser() {
    // Get the user's name from the input field
    var userName = document.getElementById("nameInput").value;

    // Greet the user with a personalized message
    var greetingMessage = "Hello, " + userName + "! Welcome to my website.";
    
    // Display the greeting message
    document.getElementById("greeting-message").innerText = greetingMessage;
}
