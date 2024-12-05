# Next Portfolio

This is a modern, fully responsive portfolio website designed to showcase your skills, projects, and achievements. The portfolio features dynamic content delivery, animations, and an integrated contact form for seamless user interaction.

## Features

### Portfolio Highlights
- **Projects Showcase:** Highlight your best work with detailed descriptions and images.
- **About Section:** Introduce yourself and your expertise.
- **Skills Section:** Display your technical and soft skills visually.

### Dynamic Content Management
- **Firebase Firestore Integration:** Manage content dynamically without hardcoding.

### Contact Form
- **User Interaction:** Allow visitors to send you messages directly from the website.
- **Reply Functionality:** Respond to user messages easily.

### Animations
- **Framer Motion:** Provide stunning and smooth animations for an engaging user experience.

### Responsive Design
- **Optimized for All Devices:** Ensure the website looks great on desktops, tablets, and mobile devices.

## Technology Stack

### Front-End
- **HTML, CSS, JavaScript:** Core web technologies for building the structure and styling of the website.
- **Framer Motion:** Create captivating animations and transitions.
- **Firebase Firestore:** Dynamic backend content delivery and data management.

### Hosting
- **Firebase Hosting:** Fast and reliable deployment of the portfolio.

## Installation

To set up the project locally, follow these steps:

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/MatrimPathak/next-portfolio.git
   cd next-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Configure environment variables:
   - Create a `.env` file in the root directory.
   - Add the required Firebase credentials for Firestore and Hosting.

4. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Folder Structure

```plaintext
next-portfolio/
├── public/           # Static assets
├── src/
│   ├── components/   # Reusable components
│   ├── pages/        # Application pages
│   ├── styles/       # Global styles
│   ├── utils/        # Utility functions
├── package.json      # Project dependencies and scripts
└── README.md         # Project documentation
```

## Contributing

Contributions are welcome! If you'd like to contribute:
1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Add feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- [Firebase](https://firebase.google.com/) for hosting and backend services.
- [Framer Motion](https://www.framer.com/motion/) for animations.

---

For any questions or support, feel free to reach out via the repository's [Issues](https://github.com/MatrimPathak/next-portfolio/issues) section.
