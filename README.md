# Skip Hire Page Redesign
This project is a complete redesign and rebuild of a skip hire selection page. The goal was to improve the UI/UX, ensure responsiveness across all devices, and write clean, maintainable, and scalable code using a modern tech stack.

## Features
- Modern, Responsive UI: A sleek interface that works seamlessly on desktop, tablet, and mobile devices.
- Dynamic Data Fetching: Skip options are fetched live from the [wewantwaste](https://app.wewantwaste.co.uk/api/skips/by-location?postcode=NR32&area=Lowestoft) API.
- Interactive Selection: Users can easily select and deselect skips, with clear visual feedback.
- Selection Summary Drawer: A pop-up drawer provides a summary of the selected skip and a clear call to action.
- Component-Based Architecture: The application is broken down into logical, reusable components for better maintainability.
- Type-Safe Code: Built with TypeScript to reduce runtime errors and improve developer experience.
- Centralized State & Logic: A custom useSkips hook encapsulates all data fetching and state management logic.

## Tech Stack
- Framework: React
- Build Tool: Vite
- Language: TypeScript
- Styling: Tailwind CSS
- HTTP Client: Axios

## Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites
You need to have Node.js (version 16.x or newer) and npm or yarn installed on your machine.

- Installation & Setup
Clone the repository:
```
git clone https://github.com/Ozair007/remwaste
cd remwaste
```

- Install dependencies:
Using npm:
```
npm install

# Or using yarn:

yarn install
```
- Run the development server:
```
npm run dev
```
This will start the Vite development server. Open your browser and navigate to http://localhost:5173 (or the port specified in your terminal) to see the application running.   
