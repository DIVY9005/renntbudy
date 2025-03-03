<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);
    $message = htmlspecialchars($_POST['message']);

    // Email details
    $to = "your-email@example.com";  // Replace with your email address
    $subject = "New Contact Us Message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Email content
    $emailBody = "Name: $name\n";
    $emailBody .= "Email: $email\n\n";
    $emailBody .= "Message:\n$message\n";

    // Sending the email
    if (mail($to, $subject, $emailBody, $headers)) {
        echo "Thank you for your message, $name. We'll get back to you soon!";
    } else {
        echo "Sorry, there was an error sending your message. Please try again later.";
    }
} else {
    echo "Invalid request.";
}
?>
