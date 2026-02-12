Job Listing App

A modern, responsive Job Listing interface built using React and Tailwind CSS.
The application allows users to browse, search, and filter job postings using mock data.

Overview

This project demonstrates frontend fundamentals including:

Component-based architecture

State management with React hooks

Derived state and filtering logic

Conditional rendering

Responsive UI design

Clean code organization

The interface is designed to be minimal, professional, and production-oriented.

Features
Core Features

Display job cards with:

Title

Company

Location

Employment type

Search jobs by title (real-time filtering)

Filter by location (Remote / On-site)

Toggle between Internship and Full-time roles

Alphabetical sorting by title

Highlight matched search keywords

Responsive layout (mobile-friendly)

UI Considerations

Clean typography hierarchy

Intentional spacing and layout structure

Clear interaction states (hover, active toggle)

Empty state handling for no results

Tech Stack

React (Vite)

Tailwind CSS (v3)

JavaScript (ES6+)

No backend integration. Uses static mock data.

Project Structure
src/
├── components/
│   ├── JobCard.jsx
│   ├── Filters.jsx
├── data/
│   └── jobs.js
├── App.jsx
├── main.jsx
└── index.css

Component Responsibilities

App.jsx
Manages global state and filtering logic.

Filters.jsx
Handles search input, location filter, and job type toggle.

JobCard.jsx
Renders individual job details and keyword highlighting.

jobs.js
Contains static mock data.

Filtering Logic

Jobs are filtered using chained array methods:

Search filter (case-insensitive title match)

Location filter (conditional match)

Type filter (Internship / Full-time)

Alphabetical sort using localeCompare

Filtering logic is derived from state rather than mutating the original dataset.

Setup Instructions
Prerequisites

Node.js (v18 or later recommended)

npm

Installation
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install

Run Locally
npm run dev


Open the provided local development URL in your browser.

Assumptions

Mock data represents YC-backed companies.

Only two job types are supported (Internship / Full-time).

Location is simplified to Remote or On-site.

No pagination is required for the current dataset size.

Potential Improvements

With more time, the following enhancements could be implemented:

Pagination or infinite scroll

Multi-select filters

URL query parameter synchronization

Persisted filter state

API integration

Loading skeleton UI

Unit tests for filtering logic

Accessibility refinements (ARIA roles, keyboard navigation)

Dark/light theme toggle

Evaluation Criteria Addressed

Clean and readable code

Logical state management

Efficient filtering implementation

Responsive UI design

Clear separation of concerns

Structured project organization

Author

Your Name
GitHub: https://github.com/your-username