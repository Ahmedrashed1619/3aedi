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

## Authentication Pages

### 1. Login
- Login using either email or phone number with password.
- User can toggle between login methods (clear switch UI).
- Validation ensures either email or phone is required.
- On success, a toast is shown and user state is updated.

### 2. Register
- Create a new account with all required fields (full name, store name, store URL, business type, email, phone, password, and confirmation).
- Full name is automatically split into first_name and last_name before submission.
- Max length validation: first_name (60), last_name (60), store_name (120), store_url (200).
- Password and confirmation must match.
- Toast notifications for success and error.

### 3. OTP
- Enter the verification code sent via email or phone.
- User-friendly input with auto-focus for each digit.

### 4. Forgot Password
- Enter email to receive a password reset link.
- Success and error toasts are shown based on the response.
- Proper error handling and user feedback.

### 5. Reset Password
- Enter and confirm a new password.
- Password and confirmation must match.
- Success and error toasts are shown based on the response.
- Proper error handling and user feedback.

---

All authentication pages use Ant Design Form, professional toast notifications (react-hot-toast), and advanced validation for a modern UX.

## Onboarding Flow Implementation

This project features a professional, multi-step onboarding flow for new users, designed with a modern RTL (Arabic) UI and attention to detail. The onboarding process is structured as follows:

### 1. Multi-Step Form (Step 1 & Step 2)
- **Step 1:** Collects basic user and store information (name, store name, store URL, business category) with full validation rules matching the registration page.
- **Step 2:** Collects account credentials (email, phone, password, password confirmation) with the same validation logic as registration.
- **Unified Submission:** Data from both steps is combined and submitted in a single API request. On success, the user is advanced to the next step.

### 2. Marketing Platforms Selection (Step 3)
- **UI:** A card-based interface allows users to select which marketing platforms (e.g., TikTok, Snapchat, Meta, Twitter, Google) to connect.
- **Mock Data:** Platform list and toggle states are managed locally for now, ready for future API integration.
- **Design:** Each platform is displayed with its icon, name, and a switch for activation, matching the provided design.

### 3. Import Products (Step 4)
- **UI:** A central card displays a progress circle, product import count, and a confirmation button.
- **Success & Error States:**
  - On success, a blue progress circle and success message are shown.
  - On failure, a red progress circle and error message with a retry button are displayed.
- **Mock Data:** Product import count and status are currently mocked, with UI ready for real API responses.
- **Feedback:** Uses `react-hot-toast` for user notifications.

### 4. Responsive & RTL Design
- All steps are fully responsive and support right-to-left (RTL) layouts for Arabic users.
- UI components are styled for consistency and clarity, using Tailwind CSS and Ant Design where appropriate.

---

**Note:**
- The onboarding flow is ready for API integration. All UI and validation logic is in place, and mock data is used where backend endpoints are not yet available.
- Error and success states are visually distinct and user-friendly.

For further details or to extend the onboarding logic, see the relevant components in `src/Pages/auth/onboarding/` and the main flow in `StoreOnboarding.tsx`.
