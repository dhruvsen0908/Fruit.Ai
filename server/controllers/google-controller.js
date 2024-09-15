const Contact = require("../models/google-model");

// Function to handle the Google Translate request
const googleTranslate = async (req, res) => {
    try {
        // Assume request body contains the data you want to save
        const response = req.body;

        // Save the data using the Contact model
        await Contact.create(response);

        // Respond with success message
        return res.status(200).json({ message: "Message sent successfully" });
    } catch (error) {
        // Log error for debugging
        console.error("Error saving message:", error);

        // Respond with error message
        return res.status(500).json({ message: "Message not delivered" });
    }
};

module.exports = googleTranslate;
