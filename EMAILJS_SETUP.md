# EmailJS Setup Guide

This portfolio uses EmailJS to handle contact form submissions. Follow these steps to set it up:

## Step 1: Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account (free tier includes 200 emails/month)

## Step 2: Add an Email Service

1. In your EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions for your provider
5. Note down your **Service ID** service_66hcxag

## Step 3: Create an Email Template

1. Go to **Email Templates** in your dashboard
2. Click **Create New Template**
3. Use the following template:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}
Company: {{company}}

Message:
{{message}}

---
Reply to: {{reply_to}}
```

4. Save the template and note down your **Template ID**template_qgz4shg

## Step 4: Get Your Public Key

1. Go to **Account** → **General** in your EmailJS dashboard
2. Find your **Public Key** (also called API Key)OS7xF7-QjbEDWejRg

## Step 5: Update the Code

Open `script.js` and replace the following placeholders:

1. **Line 30**: Replace `"YOUR_PUBLIC_KEY"` with your EmailJS Public Key
2. **Line 48**: Replace `'YOUR_SERVICE_ID'` with your Service ID
3. **Line 49**: Replace `'YOUR_TEMPLATE_ID'` with your Template ID

Example:
```javascript
emailjs.init("abc123xyz"); // Your actual public key

// In the send function:
const response = await emailjs.send(
    'service_abc123',  // Your Service ID
    'template_xyz789', // Your Template ID
    // ... rest of the code
);
```

## Step 6: Test the Form

1. Open your portfolio website
2. Fill out the contact form
3. Submit it
4. Check your email inbox for the message

## Troubleshooting

- **Form not sending**: Check browser console for errors
- **Email not received**: Verify your EmailJS service is properly connected
- **Template errors**: Make sure template variables match ({{from_name}}, {{from_email}}, etc.)

## Alternative: Use Formspree or Netlify Forms

If you prefer not to use EmailJS, you can also use:
- **Formspree**: [https://formspree.io/](https://formspree.io/)
- **Netlify Forms**: If hosting on Netlify

For Formspree, change the form action to:
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```
