# Canoo Star Wars API Application

To start application:

1. Run `yarn` to install
2. Run `yarn start` to launch locally

**Notes:**

- This application should meet the basic requirements outlined within [Take-Home (React)](</Take-Home (React).pdf>).
- Filtering is by name only, but there is a known issue with deleting the search query on the final delete keystroke due to the debounce preventing a final call to fetch all vehicles again. To help with this, I added a clear button to clear and reset the results.
- [Tailwind CSS](https://tailwindcss.com) is used via a [PostCSS](https://postcss.org/) plugin for styling though a few style rules were added to default heading sizes. PostCSS isn't currently being taken advantage of otherwise.
- A context provider was added to pass some data upstream between the Vehicles and FilmCard components.
- [Prettier](https://prettier.io) and [ESLint](https://eslint.org) have been installed to help with code quality and hinting.
- Added a [Globally Unique Identifier (GUID)](http://guid.one/guid) generator to generate unique IDs for [React keys](https://reactjs.org/docs/lists-and-keys.html#keys) because using index can cause issue if the order changes for some reason.
