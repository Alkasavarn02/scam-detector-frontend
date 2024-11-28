# Scam Detector Frontend
## Scam Detector Frontend is a web application designed to detect and report scams through various categories like Phone and Email scams. The app provides functionalities to filter and sort scam data, navigate between pages, and present users with a dashboard showing the current status of scam reports.

# This project is built using React, and it communicates with a backend API to fetch scam-related data and interact with it.

### Features
Scam Detection Dashboard: View, filter, and sort scam reports by type (Phone, Email).
Pagination: Navigate through multiple pages of scam data, with 10 records per page.
Sorting: Sort the scam data by the number of reports in ascending or descending order.
Filter by Scam Type: Filter the scam records by type (Phone, Email, or All).
Dynamic Content: Depending on the selected screen, different content is displayed on the dashboard.

# Tech Stack
Frontend: React
State Management: React useState, useEffect, Context API (optional for global state)
Styling: CSS Modules (with custom styles)
Routing: React Router (if applicable)
Lazy Loading: React.lazy for loading components asynchronously

# Setup Instructions
Follow the steps below to set up the project locally.

### Prerequisites
Node.js and npm installed (preferably the latest stable version)
Download Node.js
A code editor like VSCode.
Installation
Clone the repository:

### bash
Copy code
git clone https://github.com/Alkasavarn02/scam-detector-frontend.git
cd scam-detector-frontend
Install dependencies:

### bash
Copy code
npm install
Start the development server:

### bash
Copy code
npm run dev

# Usage
### Dashboard Screen
The Dashboard Screen is the main screen of the application where users can interact with scam data.

Filter: Select a scam type (Phone, Email, or All) from the dropdown.
Sort: Click on the "Reports" column header to toggle between ascending and descending order.
Pagination: Navigate between pages to see different sets of scam records.
Available Pages
Dashboard: Displays the scam reports.
Scam List: A detailed list of scam reports with filtering and sorting capabilities.
Include some screenshots of your app here, such as the dashboard, sorting functionality, or filter dropdowns.

# File Structure
### bash
Copy code
/scam-detector-frontend
│
├── /public                # Public assets and index.html file
├── /src                   # Source code
│   ├── /components        # Reusable components (Header, Sidebar, etc.)
│   ├── /services          # API calls
│   ├── /styles            # CSS modules
│   ├── App.js             # Main App component
│   ├── DashboardScreen.js # Dashboard screen component
│   └── index.js           # Entry point of the application
└── README.md              # Project documentation

# API Integration
The frontend interacts with the backend API using the following service method:
getAllData: Fetches the scam data from the backend.
Ensure your backend API is running and accessible to the frontend.

# Development Tips
Adding New Components: Use React.lazy and Suspense for lazy loading components and optimize performance.
State Management: Consider using the Context API if you want to share state globally across the app.
Contributing
We welcome contributions! If you have any improvements, feel free to fork the repository and submit a pull request.

# Fork the repository.
Create a new branch (git checkout -b feature-branch).
Commit your changes (git commit -am 'Add new feature').
Push to the branch (git push origin feature-branch).
Create a new pull request.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgements
React Documentation
React Router
CSS Modules

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
