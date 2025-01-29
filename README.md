<div align="center">

# Vietify - Music Player: React Styling, Typescript Introduction, and React Unit Testing

## 🌐 **[Deployed Application](https://atlas-music-player-vp.netlify.app/)**

![RetroPug](https://github.com/user-attachments/assets/f0bf4b6b-560f-481a-bd3d-79f074557fd0)


<table>
  <tr>
    <td align="center">
      <strong>Light Mode</strong><br>
      <img src="https://github.com/user-attachments/assets/dc908b76-d6fb-40dd-b570-bbd026f94777" alt="Light Mode" width="400">
    </td>
    <td align="center">
      <strong>Dark Mode</strong><br>
      <img src="https://github.com/user-attachments/assets/88c95779-a550-4aec-91b0-060dc41a2e84" alt="Dark Mode" width="400">
    </td>
  </tr>
</table>

</div>


## Table of Contents

- [Project Overview](#project-overview)
- [Resources](#resources)
  - [What I Watched](#what-i-watched)
  - [What I Read](#what-i-read)
  - [Tools I Used](#tools-i-used)
- [Learning Objectives](#learning-objectives)
- [React Styling Tasks](#react-styling-tasks)
  - [React Styling: Task 0: Getting Started](#react-styling-task-0-getting-started)
  - [Task 1: Setup Tailwind](#task-1-setup-tailwind)
  - [Task 2: Basic Components](#task-2-basic-components)
  - [Task 3: Larger Component](#task-3-larger-components)
  - [Task 4: Music Player](#task-4-music-player)
  - [Task 5: Custom Theme](#task-5-custom-theme)
  - [Task 6: Dark Mode](#task-6-dark-mode)
  - [Task 7: Loading Skeleton](#task-7-loading-skeleton)
- [Typescript Introduction Tasks](#typescript-introduction-tasks)
  - [Typescript: Task 0: Getting Started](#typescript-task-0-getting-started)
  - [Task 1: Currently Playing](#task-1-currently-playing)
  - [Task 2: Playlist and Music Player](#task-2-playlist-and-music-player)
  - [Task 3: Audio Player](#task-3-audio-player)
  - [Task 4: Deploy Application](#task-4-deploy-application)
- [React Unit Testing Tasks](#react-unit-testing-tasks)
  - [React Unit Testing: Task 0: Getting Started](#react-unit-testing-task-0-getting-started)
  - [Task 1: Snapshot Tests](#task-1-snapshot-tests)
  - [Task 2: Mocking](#task-2-mocking)
  - [Task 3: React Testing Library](#task-3-react-testing-library)
  - [Task 4: Code Coverage](#task-4-code-coverage)
  - [Task 5: Continuous Integration](#task-5-continuous-integration)
- [Reflections](#reflections)
---

## Project Overview

This project was divided into three phases, each focusing on different aspects of building a music player application:

### Phase 1: React Styling

In the first phase, I implemented the design for a music player using **React** and **Tailwind CSS**. This phase aligned with the "Build a static version" step of the [Thinking in React Process](https://react.dev/learn/thinking-in-react). My goal was to take the provided Figma design and convert it into a fully styled React application.

- **What I Focused On:**

  - Replicating the design exactly as shown in the Figma.
  - Using Tailwind utility classes to create responsive, accessible, and visually dynamic components.
  - Avoiding props, state, or functionality for this phase, as it was focused purely on the UI.

- **Figma Design:** [Atlas Music Player](https://www.figma.com/design/6qiRGbMAIYK7AUoYOCohpq/Atlas-Music-Player?node-id=0-1&p=f)

---

### Phase 2: TypeScript Introduction

In the second phase, I built on the design from Phase 1 by introducing **TypeScript** to implement the functionality of the music player. I leveraged TypeScript's type safety to ensure the code was maintainable and robust while adding interactivity to the app.

- **What I Focused On:**

  - Adding functionality to the components I created in Phase 1 using TypeScript.
  - Applying TypeScript concepts like type safety, null safety, and type inference.
  - Ensuring the player was fully functional and adhered to the Figma design and demo.
  - **Added an Instructions Modal:**  
    - Designed a dynamic instructions modal to guide users on navigating and interacting with the music player.  
    - The modal includes accessibility features like keyboard navigation, mouse interaction, and additional features.  
    - Enabled closing the modal by clicking outside it or using the "Close" button, ensuring intuitive user experience.


- **Figma Design:** [Atlas Music Player](https://www.figma.com/design/6qiRGbMAIYK7AUoYOCohpq/Atlas-Music-Player?node-id=0-1&p=f)
- **Demo from Curriculum:** [Atlas Music Player Demo](https://atlas-music-player.netlify.app/)

---

### Phase 3: React Unit Testing

In the third phase, I focused on writing **unit tests** for the music player app to ensure its functionality and reliability. This phase emphasized creating comprehensive tests for React components, hooks, and APIs using modern testing tools.

- **What I Focused On:**
  - Writing snapshot tests for components to ensure consistent rendering.
  - Testing React components and hooks for proper functionality.
  - Mocking API calls with **Mock Service Worker (MSW)** for reliable tests.
  - Generating code coverage reports to evaluate test quality.
  - Automating testing workflows in GitHub Actions.

---

## Resources

### **What I Watched**

- **React Styling Phase:**
  - [Tailwind in 100 Seconds](https://www.youtube.com/watch?v=mr15Xzb1Ook)
  - [Designing with Tailwind CSS](https://www.youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR)
- **TypeScript Introduction Phase:**
  - [Typescript in 100 Seconds](https://www.youtube.com/watch?v=zQnBQ4tB3ZA)
- **React Unit Testing Phase:**
  - [What Is React Testing Library?](https://www.youtube.com/watch?v=JKOwJUM4_RM)


### **What I Read**

- **React Styling Phase:**
  - [Tailwind: A Utility Class Approach to Styling](https://atlas-jswank.github.io/blog/tailwind/)
  - [The Case for Atomic CSS](https://johnpolacek.github.io/the-case-for-atomic-css/)
- **TypeScript Introduction Phase:**
  - [Why Typescript?](https://atlas-jswank.github.io/blog/typescript/)
  - [Using Typescript](https://atlas-jswank.github.io/blog/how-to-use-typescript/)
  - [Typescript Cheat Sheet](https://www.sitepen.com/blog/typescript-cheat-sheet)
  - [Typescript React Cheat Sheet](https://react-typescript-cheatsheet.netlify.app/)
- **React Unit Testing Phase:**
  - [Unit Testing Best Practices](https://atlas-jswank.github.io/blog/unit-testing-tips/)
  - [React Unit Testing](https://atlas-jswank.github.io/blog/react-testing/)

### **Tools I Used**

- **React Styling Phase:**
  - [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
  - [Prettier Tailwind Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)
- **TypeScript Introduction Phase:**
  - [Total TypeScript VS Code Extension](https://www.totaltypescript.com/vscode-extension)
  - [Pretty TypeScript Errors VS Code Extension](https://marketplace.visualstudio.com/items?itemName=yoavbls.pretty-ts-errors)
- **React Unit Testing Phase:**
  - [Vitest](https://vitest.dev/): A test runner that integrates well with Vite.
  - [Vitest VS Code Plugin](https://marketplace.visualstudio.com/items?itemName=vitest.explorer): Runs tests from the VS Code UI.
  - [React Testing Library](https://testing-library.com/): A helper library for rendering, querying, and asserting on React components.
  - [Mock Service Worker (MSW)](https://mswjs.io/): A library for mocking APIs during testing.

---

## Learning Objectives

- **React Styling Phase:**
  - Explain the benefits of a utility-class approach to styling.
  - Style React components using Tailwind CSS.
  - Customize a design system with Tailwind.
- **TypeScript Introduction Phase:**
  - Explain the benefits of a type-safe language.
  - Explain the benefits of null safety in TypeScript.
  - Learn how to use TypeScript with React.
- **React Unit Testing Phase:**
  - Learn to write snapshot tests.
  - Understand how to test React components and hooks.
  - Apply mocking and spying to unit tests.
  - Learn to generate code coverage reports for unit tests.


---

## React Styling Tasks

### React Styling: Task 0: Getting Started

To begin this project, I completed the following steps:

#### **What I Did**

1. **Cloned the Repository:**

   - Used the "Use this template" button to clone the [starter code](https://github.com/atlas-jswank/atlas-music-player) to my own repository.

2. **Installed Dependencies:**

   - Navigated to the project directory and ran:
     ```bash
     npm install
     ```

3. **Started the Development Server:**

   - Launched the dev server using:
     ```bash
     npm run dev
     ```
   - Verified the app was running at [http://localhost:5173](http://localhost:5173).

4. **Explored the Codebase:**

#### **Result**

The development environment is set up, and the starter code is successfully running locally.

---

### Task 1: Setup Tailwind

#### **Learning Objective**

Learn how to set up Tailwind CSS in a React project.

#### **Resources**

- **[Installing Tailwind](https://atlas-jswank.github.io/blog/tailwind/#installing-tailwind):** Provided in curriculum
- **[Installing Tailwind](https://tailwindcss.com/docs/installation):** Official guide to installing Tailwind CSS.

#### **What I Did**

1. **Installed Tailwind CSS:**

   - Ran the following commands to install Tailwind and its peer dependencies:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     npx tailwindcss init -p
     ```

2. **Configured Tailwind:**

   - Updated `tailwind.config.js` to include paths to all template files:
     ```javascript
     /** @type {import('tailwindcss').Config} */
     export default {
       content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
       theme: {
         extend: {},
       },
       plugins: [],
     };
     ```

3. **Added Tailwind Directives:**

   - Edited `src/index.css` to include the required Tailwind directives:
     ```css
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
     ```

4. **Started the Build Process:**
   - Ran the development server with:
     ```bash
     npm run dev
     ```

#### **Result**

Tailwind CSS is successfully set up in the project. The configuration includes paths to template files, and Tailwind directives are added to the CSS file. No custom styles have been added yet; these will be implemented in upcoming tasks.

---

### Task 2: Basic Components

#### **Learning Objective**

Learn how to style basic components using Tailwind CSS.

#### **Resources**

- **[Common Utility Classes](https://atlas-jswank.github.io/blog/tailwind/#common-utility-classes):** Overview of Tailwind's utility-first classes.
- **[Flexbox Layouts](https://atlas-jswank.github.io/blog/tailwind/#flexbox-layouts):** Guide to building layouts using Flexbox.
- **[Lucide Icons](https://lucide.dev/icons/):** Icon library used to implement buttons and controls.

#### **What I Did**

1. **Installed Dependencies:**

   - Installed `prop-types` and `lucide-react`:
     ```bash
     npm install prop-types
     npm install lucide-react
     ```
     - **Why `prop-types`:** I initially planned to use this library for type-checking props in components like `PlayListItem`. While I’m not currently using it, it may be helpful in future tasks when dynamic functionality is implemented.
     - **Why `lucide-react`:** The curriculum specifies using Lucide for icons (e.g., Play, Shuffle, Rewind). While I considered extracting SVGs from the Figma design, using Lucide ensures compliance with the task requirements.

2. **Implemented Static Components:**

   - Built the following components using Tailwind CSS utility classes:
     - `CoverArt`: Displays the cover art image.
     - `SongTitle`: Shows the song title and artist name.
     - `PlayControls`: Includes playback buttons (Speed, Rewind, Play, Fast Forward, Shuffle) using Lucide icons.
     - `VolumeControls`: Contains a volume slider and icon.
     - `PlayListItem`: Displays a song's title, artist, and duration with hover effects.

3. **Used Tailwind for Styling:**

   - Styled all components with Tailwind's utility classes, avoiding plain CSS or inline styles as per the curriculum's requirements.

4. **Set Up Layout for Testing:**

   - Combined the components in `App.jsx` to create a basic layout. This allowed me to visually verify the components and troubleshoot issues.

5. **Troubleshooting Styling and Layout:**
   - I encountered challenges in achieving a pixel-perfect match to the Figma design due to Tailwind's limitations and the curriculum’s restrictions. For example:
     - Icon colors and button alignment still need refinement.
     - The slider's styling is restricted by Tailwind's utility classes.

---

#### **Result**

The static components are rendered and styled as per the requirements. The layout is functional and matches the general structure of the Figma design. Further adjustments will be made in future tasks as needed.

---

### Task 3: Larger Components

#### **Learning Objective**

Use the components from the previous task to build larger, composite components that match the design provided in the Figma file.

---

#### **Resources**

- **[Figma Design](https://www.figma.com/design/6qiRGbMAIYK7AUoYOCohpq/Atlas-Music-Player?node-id=0-1&p=f):** Component layout and styling reference.
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs):** Official guide for utility classes.

---

#### **What I Did**

1. **Created `CurrentlyPlaying` Component:**
   - **File Name:** `src/components/CurrentlyPlaying.jsx`
   - **Description:** A composite component that combines the following:
     - **CoverArt**
     - **SongTitle**
     - **PlayControls**
     - **VolumeControls**
   - **Styling:** Used Tailwind utility classes to structure and style the component. Focused on creating a vertically aligned layout that matches the Figma design.
2. **Created `Playlist` Component:**

   - **File Name:** `src/components/Playlist.jsx`
   - **Description:** A composite component that combines a list of `PlayListItem` components and displays the playlist title.
   - **Styling:** Used Tailwind utility classes to create a vertically stacked layout for the playlist. Added hover effects and spacing between items as per the Figma design.

3. **Integration:**

   - These two larger components will be integrated into a higher-level layout in a future task.
   - For now, the focus was on implementing and styling them individually.

4. **Challenges:**
   - **Playlist Component:** Styling the playlist items to match the Figma design while ensuring responsive layout compatibility.
   - **CurrentlyPlaying Component:** Adjusting the layout using Tailwind classes for different screen sizes.

---

#### **Result**

- The `CurrentlyPlaying` component correctly combines and displays the **CoverArt**, **SongTitle**, **PlayControls**, and **VolumeControls** components in a cohesive layout.
- The `Playlist` component uses the **PlayListItem** component to display a list of songs, with spacing and hover effects for better visual clarity.
- The components adhere to the Figma design and use only Tailwind CSS as per the task requirements.

---

### Task 4: Music Player

#### Learning Objective

- Build a fully responsive music player component by combining previously created components.
- Implement a layout that adapts to different screen sizes using Tailwind utility classes.

---

#### Resources

- **[Flexbox Layouts](https://atlas-jswank.github.io/blog/tailwind/#flexbox-layouts):** A guide to building flexible layouts with Tailwind CSS.
- **[Responsive Layouts](https://atlas-jswank.github.io/blog/tailwind/#responsive-layouts):** Tips on creating layouts that adapt to various screen sizes.

---

#### What I Did

1. **Created the MusicPlayer Component:**

   - File Name: `src/components/MusicPlayer.jsx`
   - Combined the `CurrentlyPlaying` and `Playlist` components into a single `MusicPlayer` component.
   - Implemented a responsive layout:
     - **Medium and Larger Screens:** `CurrentlyPlaying` and `Playlist` are displayed side by side using `md:flex-row`.
     - **Small Screens:** The layout stacks the components vertically using `flex-col`.

2. **Updated the App Component:**

   - Modified `src/App.jsx` to include the `MusicPlayer` component and the `Footer`.
   - Structured the layout using `flex-grow` for the main content and placed the footer at the bottom.

3. **Verified Responsiveness:**
   - On medium and larger screens, the `CurrentlyPlaying` and `Playlist` components are displayed side by side.
   - On small screens, the components stack vertically.

---

#### Result

- The `MusicPlayer` component integrates the `CurrentlyPlaying` and `Playlist` components into a responsive layout.
- The app layout is enhanced with the addition of the `Footer`.
- The design follows the Figma specifications, ensuring consistency across different screen sizes.

---

### Task 5: Custom Theme

#### **Learning Objective**

- Learn to customize the color scheme in Tailwind.

---

#### **Resources**

- **[Using Custom Colors](https://tailwindcss.com/docs/customizing-colors#adding-additional-colors):** Guide to adding custom colors in Tailwind.
- **[Tailwind CSS Color Generator](https://uicolors.app/create):** Tool to generate vibrant color palettes.
- **[Theme Configuration](https://tailwindcss.com/docs/theme):** Documentation on customizing the Tailwind theme.

---

#### **What I Did**

1. **Added Custom Colors:**

   - **File Modified:** `tailwind.config.js`
   - Added a bold retro-inspired palette.

2. **Applied Custom Colors:**

   - Styled `CurrentlyPlaying` and `Playlist` components with custom backgrounds, borders, and text colors.
   - Used custom colors in the `PlayControls` and `VolumeControls` components for hover and focus states.

3. **Ensured Accessibility:**

   - Checked contrast ratios to meet accessibility standards.
   - Verified interactive elements (buttons and links) have clear hover and focus styles.
   - Added `aria-labels` for better screen reader support.

4. **Challenges:**
   - Adjusting alignment between `CurrentlyPlaying` and `Playlist` for consistent spacing.
   - Maintaining a cohesive layout while incorporating vibrant colors.

---

#### **Result**

- A bold retro-inspired theme with custom colors applied across all components.
- Improved alignment and spacing between `CurrentlyPlaying` and `Playlist`.
- Ensured accessibility with sufficient contrast and descriptive labels for interactive elements.

---

#### **Troubleshooting**

1. **Alignment Issues:**

   - Adjust spacing using Tailwind utilities (`space-y-`, `px-`, `py-`, etc.).
   - Apply `items-center` or `justify-center` to align content vertically or horizontally.

2. **Low Contrast:**

   - Test colors with a [Contrast Checker](https://webaim.org/resources/contrastchecker/).

3. **Spacing or Layout Problems:**
   - Use Tailwind's `flex`, `gap`, and `space-` utilities to create consistent layouts.
   - Add `min-h` or `min-w` values if elements are disproportionate.

---

### Task 6: Dark Mode

#### **Learning Objective**

- Implement a dark mode that honors the user's operating system preferences and allows manual toggling between light and dark modes.

---

#### **Resources**

- **[Dark Mode Documentation](https://tailwindcss.com/docs/dark-mode):** Official Tailwind CSS guide for enabling dark mode.
- **[Tailwind Config Reference](https://tailwindcss.com/docs/theme):** Documentation on customizing themes.
- **[Contrast Checker](https://webaim.org/resources/contrastchecker/):** Tool to verify sufficient contrast between colors.

---

#### **What I Did**

1. **Enabled Dark Mode in Tailwind Configuration:**

   - Updated `tailwind.config.js` to enable `darkMode` with the `class` strategy.
   - Example:
     ```js
     darkMode: 'class',
     ```

2. **Configured Colors:**

   - Added custom colors in `tailwind.config.js` to enhance contrast for light and dark modes.

3. **Added a Dark Mode Toggle:**

   - Implemented a button to toggle between light and dark modes manually.
   - Button includes:
     - Icons for light mode (`Sun`) and dark mode (`Moon`).
     - Accessibility label (`aria-label`) for assistive technologies.

4. **Updated Components for Dark Mode:**

   - Updated background and text colors for light and dark modes.

5. **Challenges and Fixes:**
   - **Contrast Issues:**
     - Used a contrast checker to ensure readability.
     - Updated text and background colors to meet accessibility standards.
   - **Hover Effects:**
     - Ensured hover states in both light and dark modes are distinguishable.

---

#### **Result**

- **Dark Mode:**
  - Backgrounds are darker (e.g., `darkerTeal`, `darkMagenta`) for improved readability.
  - Text colors are light and provide sufficient contrast against dark backgrounds.
- **Light Mode:**
  - Backgrounds and text use vibrant colors for a retro 90s look.
  - Updated hover effects for better accessibility.

---

#### **Troubleshooting**

1. **Low Contrast:**
   - Use the [Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify color accessibility.
   - Adjust colors in `tailwind.config.js` as needed.
2. **Dark Mode Not Switching:**
   - Ensure `darkMode: 'class'` is set in `tailwind.config.js`.
   - Verify that the `dark` class is being added/removed from the `html` element.
3. **Styles Not Updating:**
   - Ensure all components use `dark:` variants for Tailwind classes where applicable.

---

### Task 7: Loading Skeleton

#### **Learning Objective**

- Implement a skeleton loader to improve user experience during content loading.

---

#### **Resources**

- **[Tailwind CSS Skeletons](https://tailwindcss.com/docs/animation#pulse):** Official guide for creating skeleton loaders with `animate-pulse`.
- **[Skeleton Loading Patterns](https://css-tricks.com/building-skeleton-screens-css-custom-properties/):** Article on best practices for skeleton loaders.
- **[Flowbite Skeleton Components](https://flowbite.com/docs/components/skeleton/):** Tailwind-based skeleton component examples for UI inspiration.

---

#### **What I Did**

1. **Created the Skeleton Component:**

   - **File Created:** `src/components/LoadingSkeleton.jsx`
   - Designed the skeleton to match the layout of the `CurrentlyPlaying` and `Playlist` components.
   - Included placeholders for:
     - Cover art, song title, and artist in the `CurrentlyPlaying` section.
     - Playback controls with proportional placeholders for buttons and sliders.
     - Playlist items with placeholders for song title, artist, and duration.

2. **Integrated the Skeleton in App:**

   - Updated `App.jsx` to conditionally render the `LoadingSkeleton` or the `MusicPlayer` component based on the loading state.
   - Simulated loading state with a 3-second timeout for demonstration purposes.

3. **Styled with Tailwind CSS:**
   - Used `animate-pulse` for shimmering effects.
   - Ensured proper spacing, alignment, and proportions to mimic the actual components.

---

#### **Result**

- **Skeleton Loader:**
  - Displays a visually accurate placeholder for the `MusicPlayer` while the data is loading.
  - Ensures seamless transition from loading to fully rendered content.

---

## Typescript Introduction Tasks

### Typescript: Task 0: Getting Started

#### **Learning Objective**

- Understand the continuation of the project and its transition from styling to functionality using **TypeScript**.
- Learn how to manage state and integrate API data in a React application.

---

#### **What I Did**

1. **Continued Work in Existing Repository:**

   - Used the `atlas-music-player` repository created during the "React Styling" project.

2. **Shifted Focus:**

   - Transitioned from building a static version of the music player to implementing its functionality.
   - Began planning state management for:
     - Playback status (e.g., playing or paused).
     - Playback speed.
     - Currently playing song.
     - Shuffle functionality.
     - Playlist management.

3. **Explored the API:**

   - Reviewed the provided [API Documentation](http://localhost:5173/swagger.html) to understand endpoints for fetching playlist and song data.
   - Ensured the localhost server was running to access the Swagger documentation.

4. **Prepared for TypeScript Integration:**
   - Identified areas where TypeScript types will improve code safety, such as for API responses and component props.

---

#### **Result**

- The foundation for implementing state management and API integration is set.
- A clear understanding of the project's objectives and API capabilities was achieved.

---

### Task 1: Currently Playing

#### **Learning Objective**

- Convert React components from **JavaScript** to **TypeScript** for improved type safety and maintainability.
- Implement state management and integrate API data to enhance functionality.
- Use TypeScript types for props instead of libraries like `prop-types`.

---

#### **What I Did**

1. **Converted Components to TypeScript:**

   - Updated the following components to use `.tsx` extensions:
     - `CoverArt`
     - `SongTitle`
     - `PlayControls`
     - `VolumeControls`
     - `PlayListItem`
   - Defined TypeScript types for all props in each component.

2. **Fetched Data from API:**

   - Integrated API endpoints to fetch:
     - Playlist data (`/api/v1/playlist`)
     - Song details (`/api/v1/songs/:id`)
     - Lyrics (`/api/v1/lyrics/:id`).

3. **Implemented State Management:**

   - Added `useState` and `useEffect` hooks to manage:
     - The currently playing song.
     - Lyrics display for the current song.
     - Playback status (playing/paused).
     - Playback speed and volume levels.

4. **Enhanced `CoverArt` Functionality:**

   - Displayed album cover art for the currently playing song.
   - Added hover functionality to show lyrics fetched from the API.

5. **Added Interactive Controls:**

   - **Playback Speed Button:** Cycles through 0.5x, 1x, and 2x speeds.
   - **Play/Pause Button:** Toggles song playback state.
   - **Navigation Buttons:**
     - Back button: Navigates to the previous song.
     - Forward button: Navigates to the next song.
     - Shuffle button: Plays a random song from the playlist.
   - **Volume Slider:** Adjusts audio playback volume.

6. **Managed Component Hierarchy:**

   - Lifted shared state to a parent component to ensure data consistency across:
     - `CurrentlyPlaying`
     - `AudioPlayer`
     - `PlayControls`
     - `Playlist`

7. **Debugged and Tested:**
   - Fixed issues with lyrics rendering.
   - Ensured proper functionality for all controls.

---

#### **Result**

- The `CurrentlyPlaying` section now dynamically fetches and displays:
  - The current song's title, artist, cover art, and lyrics.
  - Playback controls, including speed, volume, and navigation.
- All components are fully converted to TypeScript with props validation for enhanced readability and maintainability.

---

### Task 2: Playlist and Music Player

#### **Learning Objective**

- Convert key components from **JavaScript** to **TypeScript** for type safety and better maintainability.
- Manage shared state effectively across components to ensure seamless interaction.
- Dynamically render playlist data fetched from the API and handle user interactions with the playlist.

---

#### **What I Did**

1. **Converted Components to TypeScript:**

   - Updated the following components to `.tsx` extensions:
     - `MusicPlayer`
     - `Playlist`
     - `PlayListItem`
   - Defined detailed TypeScript types for all props and state variables to eliminate runtime errors.

2. **Fetched Playlist Data:**

   - Integrated the API endpoint `/api/v1/playlist` to fetch playlist data dynamically.
   - Used `useEffect` to fetch the data on component mount.
   - Ensured that the first song in the playlist is set as the default currently playing song.

3. **Implemented `MusicPlayer` Functionality:**

   - Organized the application’s structure to make `MusicPlayer` the parent component.
   - Managed shared state (`playlist`, `currentlyPlayingId`) in `MusicPlayer` to pass it down to child components:
     - `CurrentlyPlaying`
     - `Playlist`

4. **Added Playlist Interaction:**

   - Dynamically rendered a list of playlist items using the data fetched from the API.
   - Used conditional styling to highlight the currently playing song.
   - Made playlist items clickable to update the currently playing song.

5. **Enhanced User Experience:**

   - Displayed the `LoadingSkeleton` component while the playlist data is being fetched.
   - Ensured smooth navigation between songs when using the playlist or playback controls.

6. **Debugging and Testing:**
   - Verified that clicking a song in the playlist updates the currently playing song and its corresponding details.
   - Ensured that playlist items reflect changes when navigating songs using the back/forward controls.

---

#### **Result**

- The `Playlist` component now dynamically displays a list of songs with:
  - Clickable functionality to change the currently playing song.
  - A clear visual indication of the currently selected song.
- The `MusicPlayer` component seamlessly manages state and interactions, ensuring consistent functionality across child components.
- All components are converted to TypeScript for enhanced reliability and developer experience.

---

### Task 3: Audio Player

#### **Learning Objective**

- Use **React state** to manage an HTML `<audio>` element for audio playback.
- Seamlessly integrate custom playback controls to manage play/pause, volume, and playback speed without relying on the built-in audio element controls.

---

#### **What I Did**

1. **Created the `AudioPlayer` Component:**

   - Built a new component at `src/components/AudioPlayer.tsx` to handle audio playback functionality for the currently selected song.
   - Managed the audio element using the `useRef` hook, ensuring direct access for controlling playback.

2. **Integrated Custom Playback Controls:**

   - Removed reliance on the default audio controls, instead connecting the audio element to the following components:
     - `PlayControls`: To toggle play/pause and manage playback speed.
     - `VolumeControls`: To dynamically adjust the volume.
   - Updated the component to react to changes in playback state (`isPlaying`), volume, and playback speed.

3. **Managed Audio State Dynamically:**

   - Configured the `audio` element to:
     - Play the currently selected song when `isPlaying` is true.
     - Pause playback when `isPlaying` is false.
     - Dynamically update the playback speed and volume in real time using `useEffect`.

4. **Handled Song Changes:**

   - Ensured that the audio source (`songUrl`) updates when a new song is selected.
   - Automatically started playback of the new song when `isPlaying` was true.

5. **Debugging and Testing:**
   - Verified that the audio element plays and pauses correctly based on the `PlayControls` toggle.
   - Confirmed that the volume adjusts smoothly when using the `VolumeControls` slider.
   - Tested that the playback speed dynamically responds to user changes (e.g., 0.5x, 1x, 2x).

---

#### **Result**

- The `AudioPlayer` component:

  - Plays and pauses the currently selected song based on `isPlaying`.
  - Adjusts playback speed and volume dynamically in response to user interaction.
  - Integrates seamlessly with the rest of the `atlas-music-player` application, relying on state managed by `CurrentlyPlaying`.

- Users can now fully control audio playback using the custom UI, making the music player intuitive and functional.

---

### Task 4: Deploy Application

#### **Learning Objective**

- Understand the process of deploying a React application to a production environment using Netlify.
- Gain experience in setting up a live URL for the application, making it publicly accessible.

---

#### **What I Did**

1. **Prepared the Application for Deployment**

   - Ran the build command:
     ```bash
     npm run build
     ```

2. **Deployed the Application to Netlify**

   - Logged in to [Netlify](https://www.netlify.com/) and created a new site.
   - Selected the **drag-and-drop deployment method**:
     - Dragged the `dist` folder into Netlify's deployment area.
   - Netlify processed the upload and provided a live URL.

3. **Customized the Site Name**

   - Renamed the site to: `atlas-music-player-vp`.
   - The app is now accessible at: [https://atlas-music-player-vp.netlify.app/](https://atlas-music-player-vp.netlify.app/).

4. **Tested the Deployment**
   - Verified that:
     - All functionality, including playlist management, playback, and styling, works as expected.
     - The site is responsive in both dark and light modes.
   - Ensured all assets (e.g., favicons, album covers) load correctly.

---

#### **Result**

- The application is live and publicly accessible.
- The deployment process to Netlify was successful, and the site name was customized as required.

---

## React Unit Testing Tasks

### **React Unit Testing: Task 0: Getting Started**

#### **Learning Objective**

- Set up the testing environment with **Vitest** and **React Testing Library**.
- Understand how to configure a test runner and write basic tests.

#### **What I Did**

1. **Installed and Configured Vitest:**
   - Added Vitest as a dependency to the project.
   - Configured a `test` script in the `package.json` file:
     ```json
     "scripts": {
       "test": "vitest"
     }
     ```
   - Installed the Vitest VS Code Plugin for an integrated development experience.

2. **Set Up Mocking with MSW:**
   - Integrated Mock Service Worker (MSW) for mocking API calls during tests.
   - Created a `mockServer.ts` file to define API handlers for mocking.

3. **Added React Testing Library:**
   - Used React Testing Library to render and query components in tests.

4. **Ran Initial Tests:**
   - Verified that the testing setup works by writing and running a simple snapshot test.

##### **Result**

- The project is now configured with a robust testing environment.
- Snapshot tests, component tests, and API mocking are all ready to be implemented in future tasks.

---


### Task 1: Snapshot Tests

#### **Learning Objective**

- Learn how to write snapshot tests for React components to ensure UI stability and consistency.
- Understand how to test different combinations of props effectively.

---

#### **What I Did**

1. **Created Snapshot Tests for Components**  
   - Added snapshot tests for the following components:
     - `CoverArt`
     - `PlayListItem`
     - `SongTitle`
     - `VolumeControls`

2. **Tested Prop Variations**  
   - Wrote tests to verify that components render correctly with various combinations of props:
     - For `CoverArt`, tested different image URLs and alt text.
     - For `PlayListItem`, tested combinations of `title`, `artist`, `duration`, and `isCurrent`.
     - For `SongTitle`, tested different title lengths and formats.
     - For `VolumeControls`, tested different initial volume levels and interaction states.

3. **Generated Snapshots**  
   - Used the `@testing-library/react` and `vitest` libraries to render components and generate snapshot files.

4. **Ensured All Tests Pass**  
   - Verified that snapshot tests pass for all components using the `npm run test -- -u` command.

5. **Stored Snapshots**  
   - All snapshots were auto saved in the `src/__tests__/__snapshots__` directory for version control and future comparisons.

---

#### **Result**

- Snapshot tests ensure that UI changes are intentional by catching unintended modifications.
- All components render correctly with various props, maintaining consistency across the application.

---

### Task 2: Mocking

#### **Learning Objective**

- Learn how to mock API calls during unit tests.
- Understand how to use **Mock Service Worker (MSW)** for intercepting and mocking network requests.

---

#### **What I Did**

1. **Setup Mock Service Worker (MSW)**  
   - Installed `msw` as a development dependency using:
     ```bash
     npm install --save-dev msw
     ```
   - Configured MSW in the `src/mocks` directory:
     - **`handlers.ts`**: Defined mock API routes:
       - `/api/v1/playlist` for fetching playlist data.
       - `/api/v1/songs/:id` for fetching song details.
       - `/api/v1/lyrics/:id` for fetching song lyrics.
     - **`server.ts`**: Set up the MSW server with these handlers.

2. **Integrated MSW with Vitest**  
   - Configured the MSW server in `vitest.setup.ts` to:
     - Start the mock server before running tests.
     - Reset handlers after each test to ensure independence.
     - Stop the server after all tests are complete.

3. **Wrote Unit Tests Using Mocked Data**  
   - Created `src/__tests__/MusicPlayer.test.tsx` to verify that the `MusicPlayer` component renders playlist data from mocked API responses:
     - Mocked `/api/v1/playlist` to return a playlist with two test songs.
     - Used assertions to confirm playlist items (`Test Song 1`, `Test Song 2`) and their artists appear in the document.

4. **Verified Data Mocking and Testing**  
   - Ensured that real API calls are not made during tests and all API responses are replaced with mocked data from MSW.
   - Used the following command to run tests and update snapshots:
     ```bash
     npm run test -- -u
     ```
     - **This command:**
       - Runs all test files using Vitest.
       - Updates snapshots if there are changes to ensure tests reflect the latest UI or component changes.

---

#### **Result**

- **Mocking Achieved**: All API calls in the `MusicPlayer` tests are intercepted and replaced with controlled mocked responses.
- **Component Verified**: The `MusicPlayer` component successfully renders playlist data fetched from the mocked API, ensuring independence from real backend services.
- **Reusable Setup**: The MSW mock server is set up to support further tasks requiring API calls, promoting efficient and isolated testing.


---

### Task 3: React Testing Library

#### **Learning Objective**

- Learn how to write unit tests for React components using **React Testing Library**.
- Understand how to test user interactions and component functionality.

---

#### **What I Did**

1. **Refined Testing Framework**  
   - Used **Vitest** as the testing framework to ensure alignment with project requirements:
     - Imported Vitest utilities like `test`, `expect`, `vi`, and lifecycle hooks (`beforeAll`).
     - Replaced any Jest-specific syntax (e.g., `jest.fn()`) with `vi.fn()` for mocking.

2. **Mocked HTMLMediaElement APIs**  
   - Simulated browser media functionalities that `MusicPlayer` relies on:
     - Mocked `play`, `pause`, `volume`, and `playbackRate` using `vi.fn()` to prevent errors in `jsdom` (test environment).
     - Ensured that methods behave predictably during tests, even without a real DOM.

3. **Enhanced API Mocking with MSW**  
   - Continued leveraging the **Mock Service Worker (MSW)** setup from Task 2:
     - Handlers for API routes (e.g., `/api/v1/playlist`) were reused to provide mock playlist data for tests.
     - Centralized API mocking ensures consistency across tests and tasks.

4. **Implemented Unit Tests for `MusicPlayer`**  
   - **Created Five Unit Tests** in `src/__tests__/MusicPlayer.test.tsx`:
     1. **Default Song**: Verified the first song in the playlist is set as default when the component loads.
     2. **Play/Pause**: Tested toggling play/pause functionality updates the UI as expected.
     3. **Next Song**: Checked that clicking the "Next" button updates the current song to the next one in the playlist.
     4. **Previous Song**: Confirmed that clicking the "Previous" button navigates back to the previous song.
     5. **Song Selection**: Validated that clicking a specific song in the playlist updates the currently playing song.
   - **Bonus Test**: Added an extra test for the **speed toggle button**:
     - Verified that the button cycles through playback speeds correctly (1x → 1.5x → 2x).

5. **Followed Arrange-Act-Assert Pattern**  
   - Structured tests for clarity and maintainability:
     - **Arrange**: Render the `MusicPlayer` component.
     - **Act**: Simulate user interactions (e.g., clicking buttons) with `fireEvent`.
     - **Assert**: Verify the component's updated state using `expect`.

6. **Ensured Independent Tests**  
   - Utilized Vitest lifecycle hooks to:
     - Reset the MSW handlers after each test (`afterEach`).
     - Prevent tests from interfering with one another.

---

#### **How I Ran the Tests**

1. **Run Tests**  
   - Used the following command to execute all tests:
     ```bash
     npm run test
     ```

2. **Verify Output**  
   - Confirmed all tests passed successfully, validating `MusicPlayer` functionality.

---

#### **Result**

- **Test Coverage Expanded**: The `MusicPlayer` component's key functionalities were tested, ensuring it behaves as expected:
  - First song defaults.
  - Play/Pause toggling.
  - Song navigation (Next/Previous).
  - Song selection from the playlist.
  - Playback speed toggling.
- **Reusable Mock Setup**: API mocking with MSW and HTMLMediaElement stubs ensures a scalable testing setup for future tasks.
- **Readable Tests**: The Arrange-Act-Assert pattern and inline comments make the tests easy to understand and maintain.

---


### **Task 4: Code Coverage**

#### **Learning Objective**
- Understand how to check **code coverage** for unit tests written in JavaScript.
- Learn how to generate and interpret code coverage reports in both **VS Code UI** and **CLI**.

---

#### **What I Did**

1. **Ran Coverage Analysis in VS Code**  
   - Used the **Vitest VS Code plugin** to "Run Tests with Coverage."
   - This provided a visual breakdown of tested and untested lines within the **MusicPlayer** component and related files.
   - **Key Note:** The **VS Code coverage report differs from the CLI coverage report** because:
     - VS Code plugin uses an in-editor approach to display coverage.
     - CLI report aggregates coverage across all test files and displays a summary.
   - **Screenshot**: Saved as `coverage-ui.png` in the project root.

2. **Configured CLI Coverage Report**  
   - Added a coverage script to `package.json`:
     ```json
     "scripts": {
       "coverage": "vitest --coverage"
     }
     ```
   - This allows us to run:
     ```bash
     npm run coverage
     ```
   - The CLI report provides:
     - **Statement Coverage** (`% Stmts`): How many executable statements are tested.
     - **Branch Coverage** (`% Branch`): How many logical branches (`if`, `else`, `switch`) are tested.
     - **Function Coverage** (`% Funcs`): How many functions are executed during testing.
     - **Line Coverage** (`% Lines`): How many lines of code are executed.
   - **Screenshot**: Saved as `coverage-cli.png` in the project root.

3. **Improved Code Coverage by Writing Additional Tests**  
   - Identified **missed lines** in the coverage report.
   - Added **more tests** to improve coverage in:
     - `PlayControls.tsx` – Ensured shuffle button toggling worked correctly.
     - `CurrentlyPlaying.tsx` – Verified it displayed the expected song information.
   - **Mocking Adjustments**:  
     - Ensured MSW was properly handling API requests to avoid untested scenarios.
     - Added test cases for **API errors** and how the UI responds to failed requests.


5. **Ignored `coverage/` in Git**  
   - Since the **task only required screenshots**, the generated coverage folder was excluded from version control.
   - Added this to `.gitignore`:
     ```
     # Ignore coverage reports
     coverage/
     ```

---

#### **How I Ran the Tests and Coverage Reports**

1. **Run Tests with Coverage in VS Code**
   - Used the **Vitest VS Code Plugin**.
   - Selected "Run Tests with Coverage."
   - Verified the UI breakdown of tested and untested lines.
   - **Saved Screenshot:** `coverage-ui.png`.

2. **Run CLI Coverage Report**
   - Ran the following command:
     ```bash
     npm run coverage
     ```
   - Verified detailed breakdown of statement, branch, function, and line coverage.
   - **Saved Screenshot:** `coverage-cli.png`.

---

#### **Result**

**Achieved Comprehensive Test Coverage**  
- Ensured that `MusicPlayer` and its related components are well-tested.
- Verified code coverage results in **both VS Code UI and CLI**.

**Improved Project Setup**  
- **Added CLI script** (`npm run coverage`) for easy test coverage analysis.
- **Excluded mock files** from coverage reports.

**Screenshots for Submission**  
- `coverage-ui.png` (VS Code Coverage Report)
- `coverage-cli.png` (CLI Coverage Report)

---

### Task 5: Continuous Integration

#### **Learning Objective**
- Automate unit tests and code coverage reports using **GitHub Actions**.

---

#### **What I Did**

1. **Created a GitHub Actions Workflow (`ci.yml`)**  
   - The workflow is stored in `.github/workflows/ci.yml`.
   - It triggers **automatically** on every push to the `main` branch.

2. **Defined CI Pipeline**
   - The workflow installs dependencies, runs tests, and generates a coverage report.
   - It ensures that all tests must pass before merging new code.

3. **Configured GitHub Actions**
   - Used `actions/checkout` to fetch the latest repository changes.
   - Used `actions/setup-node` to install Node.js version 20.
   - Ran `npm run test` to execute all unit tests.
   - Ran `npm run coverage` to generate the test coverage report.

4. **Verified CI Pipeline Execution**
   - Checked the **Actions tab** in GitHub to confirm successful workflow execution.
   - Ensured the test output and coverage report were generated.

---


#### **Result**
**Automated testing and coverage reporting are now integrated.**  
**The GitHub Actions workflow ensures all code changes are tested.**  
**The CI pipeline prevents broken code from being merged into the main branch.**

---

## **Reflections**  

This project reinforced the importance of breaking development into structured phases, making it easier to focus on design, functionality, and testing separately. I especially enjoyed the styling phase, where bringing the Figma design to life with Tailwind CSS was both creative and gratifying. Debugging test failures and ensuring realistic API mocking with MSW was challenging but ultimately made the tests more reliable. Automating workflows with GitHub Actions streamlined the testing process and provided confidence in the codebase. This project strengthened my skills in React, TypeScript, testing strategies, and CI/CD, all of which will be valuable in future work.

With Love,
[Vie P.](https://whatdoyouknowaboutlove.com/viepaula)  

---
