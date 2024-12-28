Task Management Application (Next.js + TypeScript)
==================================================

This project is a **Task Management Application** built with **Next.js** and **TypeScript**. It provides an intuitive interface to manage tasks with features such as adding, editing, and deleting tasks, as well as filtering tasks based on their status. The app incorporates state management using **Redux Toolkit** and includes offline support via **localStorage**.

Features
--------

### 1\. Task Management

*   **Add, edit, and delete tasks**: Users can manage their tasks efficiently by adding new tasks, updating existing ones, or deleting unwanted tasks.
    
*   **Mark tasks as completed or incomplete**: Toggle the status of a task to track progress.
    
*   **Filter tasks**: Easily filter tasks based on their status (“Done,” “In Progress,” or “To Do”).
    

### 2\. State Management

*   **Global state management**: State is managed using **Redux Toolkit**.
    

### 3\. Offline Support (Bonus)

*   **Persist tasks using localStorage**: Tasks are stored in the browser's localStorage, so users can access them even without an internet connection.
    

### 4\. Performance Optimization

*   **Optimized rendering**: Leveraged React hooks such as React.memo, useCallback, and useMemo to minimize unnecessary re-renders and improve performance.
    
*   **Debounced filtering**: Implemented debouncing for the task filtering functionality to reduce performance bottlenecks when typing search terms.
    

Getting Started
---------------

### Prerequisites

To run this project locally, ensure you have the following installed:

*   **Node.js** (>= 14.x)
    
*   **npm** (>= 6.x) or **yarn**
    

### Installation

1.  git clone https://github.com/yourusername/nextjs-task-manager.gitcd nextjs-task-manager
    
2.  Using npm:npm installUsing yarn:yarn install
    
3.  Using npm:npm run devUsing yarn:yarn dev
    
4.  Navigate to [http://localhost:3000](http://localhost:3000/) in your browser to view the application.
    

### Build for Production

To create a production build, run:

Using npm:

`  npm run build   `

Using yarn:

`   yarn build   `

Start the production server:

`   npm run start   `

### Lint and Format Code

To lint and format your code, run:

Using npm:

`   npm run lint  npm run format   `

Using yarn:

`   yarn lint  yarn format   `

Technologies Used
-----------------

*   **Next.js**: A React framework for server-rendered applications.
    
*   **TypeScript**: Type safety and better developer experience.
    
*   **Redux Toolkit**: Simplified state management.
    
*   **Tailwind CSS**: Utility-first CSS framework for styling.
    
*   **localStorage**: Persistent storage for offline support.
    

Project Structure
-----------------

Plain textANTLR4BashCC#CSSCoffeeScriptCMakeDartDjangoDockerEJSErlangGitGoGraphQLGroovyHTMLJavaJavaScriptJSONJSXKotlinLaTeXLessLuaMakefileMarkdownMATLABMarkupObjective-CPerlPHPPowerShell.propertiesProtocol BuffersPythonRRubySass (Sass)Sass (Scss)SchemeSQLShellSwiftSVGTSXTypeScriptWebAssemblyYAMLXML`   nextjs-task-manager/  ├── components/       # Reusable React components  ├── pages/            # Next.js pages  ├── public/           # Static assets  ├── styles/           # Global styles  ├── _store/           # Redux store setup  ├── _utils/           # Utility functions (e.g., localStorage handlers)  ├── _types/           # TypeScript type definitions  └── package.json      # Project dependencies and scripts   `

Performance Techniques
----------------------

1.  **React.memo**:
    
    *   Used to prevent unnecessary re-renders of components by memoizing their output based on props.
        
2.  **useCallback and useMemo**:
    
    *   Used to memoize functions and values to avoid unnecessary recalculations or re-creations during renders.
        
3.  **Debouncing**:
    
    *   Applied to the filtering functionality to limit the frequency of state updates during user input.
        
