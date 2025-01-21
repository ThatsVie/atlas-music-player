<div align="center">

# Atlas Music Player

</div>

## Table of Contents

- [Project Overview](#project-overview)
- [Resources](#resources)
  - [What I Watched](#what-i-watched)
  - [What I Read](#what-i-read)
  - [Tools I Used](#tools-i-used)
- [Learning Objectives](#learning-objectives)
- [Task 0: Getting Started](#task-0-getting-started)
- [Task 1: Setup Tailwind](#task-1-setup-tailwind)
- [Task 2: Basic Components](#task-2-basic-components)
- [Task 3: Larger Component](#task-3-larger-components)
- [Task 4: Music Player](#task-4-music-player)
- [Task 5: Custom Theme](#task-5-custom-theme)
- [Task 6: Dark Mode](#task-6-dark-mode)

---

## Project Overview

**Figma Design:** [Atlas Music Player](https://www.figma.com/design/6qiRGbMAIYK7AUoYOCohpq/Atlas-Music-Player?node-id=0-1&p=f)

---

## Resources

### **What I Watched**

- **[Tailwind in 100 Seconds](https://www.youtube.com/watch?v=mr15Xzb1Ook):** A quick introduction to Tailwind CSS.
- **[Designing with Tailwind CSS](https://www.youtube.com/playlist?list=PL7CcGwsqRpSM3w9BT_21tUU8JN2SnyckR):** A tutorial from the creator of Tailwind.

### **What I Read**

- **[Tailwind: A Utility Class Approach to Styling](https://atlas-jswank.github.io/blog/tailwind/):** An introduction to Tailwind CSS.
- **[The Case for Atomic CSS](https://johnpolacek.github.io/the-case-for-atomic-css/):** A deep dive into the "why" behind utility-first CSS (optional reading).

### **Tools I Used**

- **[Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss):** Autocomplete for Tailwind class names.
- **[Prettier Tailwind Plugin](https://github.com/tailwindlabs/prettier-plugin-tailwindcss):** Automatically sorts Tailwind class names for better organization.

---

## Learning Objectives

- Explain the benefits of a utility-class approach to styling.
- Style React components using Tailwind CSS.
- Customize a design system with Tailwind.

---

## Task 0: Getting Started

To begin this project, I completed the following steps:

### **What I Did**

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

### **Result**

The development environment is set up, and the starter code is successfully running locally.

---

## Task 1: Setup Tailwind

### **Learning Objective**

Learn how to set up Tailwind CSS in a React project.

### **Resources**

- **[Installing Tailwind](https://atlas-jswank.github.io/blog/tailwind/#installing-tailwind):** Provided in curriculum
- **[Installing Tailwind](https://tailwindcss.com/docs/installation):** Official guide to installing Tailwind CSS.

### **What I Did**

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

### **Result**

Tailwind CSS is successfully set up in the project. The configuration includes paths to template files, and Tailwind directives are added to the CSS file. No custom styles have been added yet; these will be implemented in upcoming tasks.

---

## Task 2: Basic Components

### **Learning Objective**

Learn how to style basic components using Tailwind CSS.

### **Resources**

- **[Common Utility Classes](https://atlas-jswank.github.io/blog/tailwind/#common-utility-classes):** Overview of Tailwind's utility-first classes.
- **[Flexbox Layouts](https://atlas-jswank.github.io/blog/tailwind/#flexbox-layouts):** Guide to building layouts using Flexbox.
- **[Lucide Icons](https://lucide.dev/icons/):** Icon library used to implement buttons and controls.

### **What I Did**

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

### **Result**

The static components are rendered and styled as per the requirements. The layout is functional and matches the general structure of the Figma design. Further adjustments will be made in future tasks as needed.

---

## Task 3: Larger Components

### **Learning Objective**

Use the components from the previous task to build larger, composite components that match the design provided in the Figma file.

---

### **Resources**

- **[Figma Design](https://www.figma.com/design/6qiRGbMAIYK7AUoYOCohpq/Atlas-Music-Player?node-id=0-1&p=f):** Component layout and styling reference.
- **[Tailwind CSS Documentation](https://tailwindcss.com/docs):** Official guide for utility classes.

---

### **What I Did**

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

### **Result**

- The `CurrentlyPlaying` component correctly combines and displays the **CoverArt**, **SongTitle**, **PlayControls**, and **VolumeControls** components in a cohesive layout.
- The `Playlist` component uses the **PlayListItem** component to display a list of songs, with spacing and hover effects for better visual clarity.
- The components adhere to the Figma design and use only Tailwind CSS as per the task requirements.

---

## Task 4: Music Player

### Learning Objective

- Build a fully responsive music player component by combining previously created components.
- Implement a layout that adapts to different screen sizes using Tailwind utility classes.

---

### Resources

- **[Flexbox Layouts](https://atlas-jswank.github.io/blog/tailwind/#flexbox-layouts):** A guide to building flexible layouts with Tailwind CSS.
- **[Responsive Layouts](https://atlas-jswank.github.io/blog/tailwind/#responsive-layouts):** Tips on creating layouts that adapt to various screen sizes.

---

### What I Did

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

### Result

- The `MusicPlayer` component integrates the `CurrentlyPlaying` and `Playlist` components into a responsive layout.
- The app layout is enhanced with the addition of the `Footer`.
- The design follows the Figma specifications, ensuring consistency across different screen sizes.

---

## Task 5: Custom Theme

### **Learning Objective**

- Learn to customize the color scheme in Tailwind.

---

### **Resources**

- **[Using Custom Colors](https://tailwindcss.com/docs/customizing-colors#adding-additional-colors):** Guide to adding custom colors in Tailwind.
- **[Tailwind CSS Color Generator](https://uicolors.app/create):** Tool to generate vibrant color palettes.
- **[Theme Configuration](https://tailwindcss.com/docs/theme):** Documentation on customizing the Tailwind theme.

---

### **What I Did**

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

### **Result**

- A bold retro-inspired theme with custom colors applied across all components.
- Improved alignment and spacing between `CurrentlyPlaying` and `Playlist`.
- Ensured accessibility with sufficient contrast and descriptive labels for interactive elements.

---

### **Troubleshooting**

1. **Alignment Issues:**

   - Adjust spacing using Tailwind utilities (`space-y-`, `px-`, `py-`, etc.).
   - Apply `items-center` or `justify-center` to align content vertically or horizontally.

2. **Low Contrast:**

   - Test colors with a [Contrast Checker](https://webaim.org/resources/contrastchecker/).

3. **Spacing or Layout Problems:**
   - Use Tailwind's `flex`, `gap`, and `space-` utilities to create consistent layouts.
   - Add `min-h` or `min-w` values if elements are disproportionate.

---

## Task 6: Dark Mode

### **Learning Objective**

- Implement a dark mode that honors the user's operating system preferences and allows manual toggling between light and dark modes.

---

### **Resources**

- **[Dark Mode Documentation](https://tailwindcss.com/docs/dark-mode):** Official Tailwind CSS guide for enabling dark mode.
- **[Tailwind Config Reference](https://tailwindcss.com/docs/theme):** Documentation on customizing themes.
- **[Contrast Checker](https://webaim.org/resources/contrastchecker/):** Tool to verify sufficient contrast between colors.

---

### **What I Did**

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

### **Result**

- **Dark Mode:**
  - Backgrounds are darker (e.g., `darkerTeal`, `darkMagenta`) for improved readability.
  - Text colors are light and provide sufficient contrast against dark backgrounds.
- **Light Mode:**
  - Backgrounds and text use vibrant colors for a retro 90s look.
  - Updated hover effects for better accessibility.

---

### **Troubleshooting**

1. **Low Contrast:**
   - Use the [Contrast Checker](https://webaim.org/resources/contrastchecker/) to verify color accessibility.
   - Adjust colors in `tailwind.config.js` as needed.
2. **Dark Mode Not Switching:**
   - Ensure `darkMode: 'class'` is set in `tailwind.config.js`.
   - Verify that the `dark` class is being added/removed from the `html` element.
3. **Styles Not Updating:**
   - Ensure all components use `dark:` variants for Tailwind classes where applicable.

---
