# 3aedi Color System & Design Tokens


## Overview
A unified and organized color system has been established to ensure consistency throughout the application.

## Core Colors

### Primary Colors
- `primary` (#4857FC) - Main color for buttons and links
- `primary-dark` (#1B2559) - Dark shade for backgrounds
- `primary-light` (#6B7280) - Light shade for secondary text

### Background Colors
- `background` (#F7F8FA) - Main page background
- `background-light` (#F9FAFB) - Input field background

### Border Colors
- `border` (#E5E7EB) - Standard border color

### Text Colors
- `text-primary` (#1B2559) - Main text and headings
- `text-secondary` (#6B7280) - Secondary text
- `text-placeholder` (#9CA3AF) - Placeholder text
- `text-error` (#EF4444) - Error text
- `text-success` (#4ade80) - Success text
- `text-headline` (#312e81) - Headline text

### Status Colors
- `error` (#EF4444) - Error color
- `success` (#4ade80) - Success color
- `placeholder` (#9CA3AF) - Placeholder color

## Usage in Tailwind CSS

### Primary Colors
```css
bg-primary          /* Blue background */
bg-primary-dark     /* Dark blue background */
bg-primary-light    /* Light gray background */
text-primary        /* Blue text */
text-primary-dark   /* Dark blue text */
text-primary-light  /* Light gray text */
```

### Text Colors
```css
text-text-primary      /* Main text */
text-text-secondary    /* Secondary text */
text-text-error        /* Error text */
text-text-success      /* Success text */
text-text-placeholder  /* Placeholder text */
```

### Background Colors
```css
bg-background       /* Page background */
bg-background-light /* Light background */
```

### Border Colors
```css
border-border       /* Standard border */
```

## Custom Utility Classes

### Auth Components
```css
.auth-input            /* Standard input field */
.auth-label            /* Standard input label */
.auth-button           /* Primary button */
.auth-button-secondary /* Secondary button */
.auth-divider          /* Divider */
.auth-divider-line     /* Divider line */
.auth-divider-text     /* Divider text */
.auth-link             /* Standard link */
.auth-error            /* Standard error message */
```

## CSS Variables

You can use CSS variables directly:
```css
:root {
  --color-primary: #4857FC;
  --color-primary-dark: #1B2559;
  --color-background: #F7F8FA;
  --color-border: #E5E7EB;
  --color-error: #EF4444;
  --color-success: #4ade80;
}
```

## Usage Examples

### Primary Button
```jsx
<button className="auth-button">
  Login
</button>
```

### Input Field
```jsx
<input 
  className="auth-input"
  placeholder="Enter your email"
/>
```

### Link
```jsx
<Link className="auth-link">
  Create a new account
</Link>
```

### Error Message
```jsx
<p className="auth-error">
  Please enter a valid email address
</p>
```

### Heading
```jsx
<h2 className="text-text-primary">
  Login
</h2>
```

### Secondary Text
```jsx
<p className="text-text-secondary">
  Don't have an account?
</p>
```

## Advantages

1. **Consistency**: All colors are unified across the application
2. **Easy Maintenance**: Changing a single color updates it everywhere
3. **Scalability**: Easily add new colors
4. **Performance**: Optimized with Tailwind CSS classes
5. **Readability**: Clear and expressive color names
6. **TypeScript Support**: All colors are supported in IntelliSense
