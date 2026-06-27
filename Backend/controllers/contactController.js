import Contact from '../models/Contact.js';
export const contact = async (req, res) => {
    try {
    const { name, email, subject, message } = req.body;

    // Basic Validation
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    // Save to MongoDB Atlas
    const newContact = new Contact({ name, email, subject, message });
    await newContact.save();

    res.status(200).json({ success: true, message: "Message saved successfully!" });
  } catch (error) {
    console.error('[Contact Error]:', error);
    res.status(500).json({ success: false, message: "Server error, could not send message" });
  }
}

