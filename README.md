# Movie App

This is a Movie App that uses various technologies and libraries for development.

## Libraries and Dependencies

The following libraries and dependencies are used in this project:

- `@emotion/react`: ^11.11.1
- `@emotion/styled`: ^11.11.0
- `@mui/icons-material`: ^5.14.3
- `@mui/material`: ^5.14.5
- `@reduxjs/toolkit`: ^1.9.5
- `@testing-library/jest-dom`: ^5.17.0
- `@testing-library/react`: ^13.4.0
- `@testing-library/user-event`: ^13.5.0
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `react-redux`: ^8.1.2
- `react-router-dom`: ^6.15.0
- `react-scripts`: 5.0.1
- `web-vitals`: ^2.1.4

## Features

- Display upcoming movies on the List page in movie cards, sorted by latest first.
- Movie card displays:
  - Movie media (picture)
  - Movie Title
  - Rating (average vote)
  - Description (in one line with ellipsis)
- Infinite scrolling on the List page with the help of buttons.
- Allow searching for movies using the search API. Search results are displayed on the List page itself.
- Clicking on a movie card navigates to the Details page showing movie details.
- Details page displays:
  - Movie Title
  - Rating (average vote)
  - Year of release
  - Length (HH:MM)
  - Director
  - Cast (Comma separated list of actors)
  - Description
- Page design is responsive with a minimum width of 512 pixels.

## State Management and Routing

This project uses the Redux state management library for managing state and React Router DOM for routing.

## API

The MovieDB API is used to fetch movie information.

## Usage

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Run the app using `npm start`.

Enjoy exploring and interacting with the Movie App!
