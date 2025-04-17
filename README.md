# Milagros Sales Landing Page

This project is a React application designed as a sales landing page for Milagros. It features a contact form integrated with MailJS and a WhatsApp button for direct messaging.

## Project Structure

```
milagros-sales-landing
├── public
│   ├── index.html
│   └── favicon.ico
├── src
│   ├── components
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   ├── ContactForm.tsx
│   │   └── WhatsAppButton.tsx
│   ├── pages
│   │   └── LandingPage.tsx
│   ├── styles
│   │   └── main.css
│   ├── utils
│   │   └── mailjs.ts
│   ├── App.tsx
│   └── index.tsx
├── package.json
├── tsconfig.json
└── README.md
```

## Getting Started

To get started with the Milagros Sales Landing Page, follow these steps:

1. **Clone the repository:**
   ```
   git clone <repository-url>
   cd milagros-sales-landing
   ```

2. **Install dependencies:**
   ```
   npm install
   ```

3. **Run the application:**
   ```
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the landing page.

## Features

- **Contact Form:** Users can submit their contact information, which is sent via MailJS.
- **WhatsApp Integration:** A button that allows users to send messages directly to the specified WhatsApp number (6285233447500).
- **Responsive Design:** The landing page is designed to be responsive and user-friendly on various devices.

## Technologies Used

- React
- TypeScript
- MailJS
- CSS

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or features you would like to add.

## License

This project is licensed under the MIT License.