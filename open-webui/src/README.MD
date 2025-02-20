📁 Understanding the Frontend Structure
[DIR] lib           # Contains reusable utility functions or components
[DIR] routes        # Defines different pages in the application
[FILE] app.d.ts     # TypeScript definitions (global types)
[FILE] app.css      # Global CSS styles
[FILE] tailwind.css # Tailwind CSS configuration
[FILE] app.html     # Main HTML entry point


1️⃣ Core Entry Files
app.html

This is the main HTML file that serves as the entry point of the app.

🔹 1. <head> Section
The <head> section includes important metadata, styles, and scripts.

✅ Purpose:

Defines character encoding (UTF-8).
Sets favicons and app icons for different devices.
Establishes viewport settings for mobile compatibility.
Specifies SEO settings (robots noindex, nofollow prevents search engines from indexing).
Defines the theme color (#171717 for dark mode).

🔸 Dark Mode & Theme Detection
✅ Purpose:

Detects the user's system theme (light or dark).
Saves user preferences in localStorage (system, light, dark, oled-dark, her theme).
Updates the theme dynamically when system settings change.


🔸 SvelteKit Integration
%sveltekit.head%
✅ Purpose:

SvelteKit placeholder → This is replaced at runtime with <script> tags, CSS, and any dynamic content required for SvelteKit.
🔹 2. <body> Section

<body data-sveltekit-preload-data="hover">
  <div style="display: contents">%sveltekit.body%</div>

  ✅ Purpose:

SvelteKit injects the entire app here using %sveltekit.body%.
The data-sveltekit-preload-data="hover" attribute enables preloading pages when the user hovers over links.

🔸 Splash Screen (Loading Animation)
<div id="splash-screen" style="position: fixed; z-index: 100; top: 0; left: 0; width: 100%; height: 100%">
  <style type="text/css">
    html { overflow-y: scroll !important; }
  </style>

  <img
    id="logo"
    style="position: absolute; width: auto; height: 6rem; top: 44%; left: 50%; transform: translateX(-50%);"
    src="/static/splash.png"
  />

  <div style="position: absolute; top: 33%; left: 50%; width: 24rem; transform: translateX(-50%);">
    <img id="logo-her" style="width: auto; height: 13rem" src="/static/splash.png" class="animate-pulse-fast"/>
    <div style="position: relative; width: 24rem; margin-top: 0.5rem">
      <div id="progress-background" style="position: absolute; width: 100%; height: 0.75rem; border-radius: 9999px; background-color: #fafafa9a;"></div>
      <div id="progress-bar" style="position: absolute; width: 0%; height: 0.75rem; border-radius: 9999px; background-color: #fff;"></div>
    </div>
  </div>
</div>

✅ Purpose:

This creates a splash screen that appears while the app is loading.
Progress bar (#progress-bar) visually indicates loading.
Logo animation (animate-pulse-fast) gives a pulsing effect.

🔹 3. Styles for Different Themes


html {
  overflow-y: hidden !important;
}

#splash-screen {
  background: #fff;
}

html.dark #splash-screen {
  background: #000;
}

html.dark #splash-screen img {
  filter: invert(1);
}

✅ Purpose:

Prevents scrolling while the splash screen is active.
Adjusts background color based on theme (light: #fff, dark: #000).
In dark mode, logos are inverted (white → black).


🎯 Summary
SvelteKit placeholders (%sveltekit.head% and %sveltekit.body%) inject the actual app dynamically.
Theming system (dark/light/oled-dark/custom "Her" mode) is handled with JavaScript and CSS.
Splash screen and loading animation enhance user experience.
Mobile-friendly meta tags ensure proper display on different devices.




app.css / tailwind.css

These files define global styles using TailwindCSS.
Svelte components might use Tailwind classes instead of writing custom CSS.
app.d.ts

Defines TypeScript types used throughout the frontend.


2️⃣ Main Directories
📁 routes/ — Page-Level Components


📜 Understanding the routes Folder in 澜仔懂电 (SvelteKit)
SvelteKit is used to handle routing. The routes system in SvelteKit is file-based, meaning the structure of the files inside routes/ determines the application's URL paths.

📁 Routes Folder Overview

[DIR] (app)     # Possibly contains a sub-route for application-related pages
[DIR] auth      # Likely contains authentication-related routes (e.g., login, register)
[DIR] s         # Responsible for loading and displaying a shared chat session using a chatId from the URL. The user can view the chat history, but it is read-only. The user can clone the chat to their own account using the "Clone Chat" button.
[DIR] watch     # Might be for real-time updates or streaming
[DIR] error     # Likely handles custom error pages
[FILE] +error.svelte    # Global error handling page
[FILE] +layout.svelte   # Layout file applied to all pages in this folder
[FILE] +layout.js       # JavaScript logic for the layout

🔹 Understanding Special Files in SvelteKit
SvelteKit uses special filename conventions to define layouts, errors, and routes.

🔸 +layout.svelte (Global Layout)
This file wraps all pages within this folder.
It can contain navigation bars, footers, or global UI elements.

🔸 +layout.js (Layout Data Fetching)
Used for loading data before rendering a page.
Can be used to fetch user session details.
💡 Example:

```
export async function load({ fetch }) {
  const response = await fetch('/api/user');
  const user = await response.json();

  return { user };
}
```
✅ This fetches the user info before any page loads.

🔸 +error.svelte (Error Page)
Handles all errors for routes under this folder.
Can be used to show custom error messages when a page fails.
💡 Example:

```
<script>
  export let error;
</script>

<h1>Oops! Something went wrong.</h1>
<p>{error.message}</p>
<a href="/">Go Home</a>
```
✅ If an API call fails or a page is missing, this file will display a user-friendly error message.



📁 lib/ — Shared Components & Utilities
This folder typically contains reusable Svelte components and utility functions.


App section (app)

🚀 High-Level Overview
The structure suggests that:

playground/ – Likely an interactive area to test AI completions or take notes.
workspace/ – The main work area, including tools, models, prompts, functions, and knowledge.
admin/ – Admin settings, user management, function evaluations, and configurations.
c/[id]/ – Chat sessions, possibly individual user conversations.
channels/[id]/ – Might be related to group conversations or chat channels.
+layout.svelte – Defines a global layout for the app section.
+page.svelte – Represents the default app landing page.
