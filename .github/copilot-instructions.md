# Copilot Instructions for GlobexInsight Web App

## Project Overview

- This is a React web application bootstrapped with Create React App.
- The main entry point is `src/App.js`, which configures routing for all major components using `react-router-dom`.
- UI is organized into feature-based folders under `src/Components/`, each containing related components and styles.
- Material UI (`@mui/material`) and `react-icons` are used for UI elements.
- State management is primarily local (React hooks); no Redux or Context API is used for global state.

## Developer Workflows

- **Start development server:** `npm start` (runs on http://localhost:3000)
- **Run tests:** `npm test` (Jest + React Testing Library)
- **Build for production:** `npm run build` (outputs to `build/`)
- **Linting:** Uses default Create React App ESLint config.

## Key Patterns & Conventions

- **Component Structure:** Each feature/component is in its own folder under `src/Components/`, with a main JS file and optional `index.css` for styles.
- **Routing:** All navigation is managed in `src/App.js` via `<Routes>` and `<Route>` from `react-router-dom`.
- **UI Feedback:** Toast notifications (`react-toastify`) are used for user feedback (e.g., success, error, info).
- **Unique IDs:** Use `uuid` for generating unique keys (e.g., for lists/forms).
- **Icons:** Use `react-icons` for all iconography; see imports in components for examples.
- **Forms:** Controlled components with local state via `useState`.
- **No API Integration:** As of current code, all data is managed in-memory; no backend/API calls are present.

## Integration Points

- **External Libraries:**
  - `@mui/material` for UI components
  - `react-toastify` for notifications
  - `uuid` for unique IDs
  - `react-router-dom` for routing
  - `react-icons` for icons
- **Testing:**
  - Tests are located alongside components or in `src/App.test.js`.
  - Uses Jest and React Testing Library.

## Example: Adding a New Feature

1. Create a new folder in `src/Components/` (e.g., `NewFeatureComponent/`).
2. Add your main component file and any styles.
3. Import and add a `<Route>` in `src/App.js` for navigation.
4. Use local state and toast notifications for user feedback.

## References

- See `README.md` for basic scripts and Create React App documentation links.
- Use `src/App.js` and `src/Components/` for examples of routing and component structure.

---

If any conventions or workflows are unclear, please ask for clarification or provide feedback to improve these instructions.
