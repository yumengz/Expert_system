# 📁 Project Structure

## Components (`components/` and `layouts/`)
Reusable UI elements.

## Pages (`pages/`)
Full-page views for the application.

## Services (`services/`)
Logic and data handling.

## Routing (`*.routes.ts`)
Navigation between views.

## Pipes (`pipe/`)
Custom transformations for displayed data.

### Entry Point
- The **entry point** of the app is `app.component.ts` and its associated HTML file `app.component.html`.
- The content displayed is determined by `app.routes.ts` and `pages.routes.ts`.
- **Default home page:** `pages/starter/starter.component.html` → All dashboard-related components.

### `app.routes.ts`
- Defines the application's routes (navigation paths between different views/pages).
- Used with Angular's `RouterModule` to manage navigation.

### `app.config.ts` & `config.ts`
✅ Replaces `app.module.ts` (uses Angular Standalone API).  
✅ Sets up core Angular features: Routing, HTTP, Change Detection, Animations.  
✅ Includes third-party integrations: Angular Material, Tabler Icons, ngx-scrollbar.  
✅ Optimized for performance: `provideZoneChangeDetection`, `provideAnimationsAsync2`.  

---

## 📂 Directory Structure

### `components/` Directory
This folder contains reusable components, which are independent UI elements.

Each subdirectory (like `our-visitors/`, `sales-overview/`, `profile-card/`, etc.) represents an Angular component, typically having:
- A TypeScript file (`.ts`) for logic.
- An HTML file (`.html`) for the template.

These components are meant to be used across different parts of the application.

### `layouts/` Directory
This folder organizes different layout structures.

#### `full/`
- Contains layout-related components for a full-featured view.
- The `sidebar/` and `header/` components manage navigation and branding.
- The `sidebar-data.ts` and `nav-item.ts` files likely hold data models for sidebar items.

#### `blank/`
- An empty layout used for login pages or simple views.

### `pages/` Directory
This contains the main views (or pages) of the application.

#### `ui-components/`
- Contains UI-related elements like tables, forms, menus, badges, tooltips, etc.
- Each UI element has its own subfolder with corresponding `.ts` and `.html` files.

#### `authentication/`
- Contains login, registration, and authentication-related components.

#### `starter/`
- Likely a base page to help developers get started with customization.

#### `extra/`
- Contains additional pages like `sample-page` and `icons`.

### Routing Files (`pages.routes.ts`, `authentication.routes.ts`, etc.)
- Define how users navigate between different sections of the application.

### `pipe/` Directory
This contains Angular Pipes, which are used to transform data in templates.

#### `filter.pipe.ts`
- A custom pipe that filters data before displaying it in the UI.

### `services/` Directory
This contains service files, which handle business logic and data operations.

#### `core.service.ts`
- Likely provides core functionalities such as API communication.

#### `nav.service.ts`
- Likely manages sidebar and navigation functionalities.
