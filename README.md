# AnswersAI Demo

A modern web application for visualizing charging station data and analytics. Built with React, TypeScript, and Firebase.

## Setup Instructions

### Prerequisites
- Node.js (v18 or higher)
- pnpm (v9.15.0 or higher)

### Installation
1. Clone the repository
```bash
git clone https://github.com/elisha-rudenkov/answersai-demo.git
```

2. Install dependencies
```bash
pnpm install
```

3. Environment Variables (if you want to deploy)
Create a `.env` file in the root directory with the following variables (or use existing Firebase config in `firebase.ts`):
```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

4. Start the development server
```bash
pnpm dev
```

5. Build for production
```bash
pnpm build
```

## Features Implemented

- **Authentication System**
  - Email/password and Google sign-in
  - Protected routes with authentication state management
  
- **Dashboard Analytics**
  - Interactive charts for data visualization (using Recharts)
  - KPI metrics display for key performance indicators
  - Best scenario results visualization
  
- **Modern UI/UX**
  - Responsive design that works on mobile and desktop
  - Theme provider with custom color schemes
  - Loading transitions and animations
  
- **Data Management**
  - Firebase backend for authentication and data storage
  - React state management using Zustand

## Technical Decisions and Trade-offs

### Architecture
- **Component Structure**: Used a modular approach with separate components for reusability
- **Code Splitting**: Implemented lazy loading for routes to improve initial load time
- **CSS Strategy**: Utilized Tailwind CSS for rapid UI development and styling
- **State Management**: Chose Zustand over Redux for its simplicity and reduced boilerplate

### UI Framework
- Implemented custom UI components based on shadcn/ui for a consistent design language
- Used Radix UI primitives for accessible UI components
- Applied custom animations and transitions for a polished user experience

### Authentication
- Used Firebase Authentication for quick implementation and reliable security
- Implemented persistent auth state using react-firebase-hooks

## Known Limitations

- **Mock Data**: Currently using static mock data for charts and metrics
- **Limited API Integration**: No real-time data synchronization with backend services
- **Minimal Test Coverage**: Limited automated testing implemented
- **Performance Optimization**: Large component renders could be optimized further
- **Browser Support**: Optimized primarily for modern browsers

## License

MIT

# Time Spent 
7hrs


