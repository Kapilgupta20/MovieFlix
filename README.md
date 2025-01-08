# MovieFlix
MovieFlix is a comprehensive online platform dedicated to helping movie enthusiasts discover and explore the vast world of cinema. Our mission is to provide a seamless and engaging experience for users to search, browse, and find information about their favorite movies, as well as uncover new and exciting titles.

## Features

- **Search Movies**: Easily search for movies by title, genre, or other criteria.
- **Trending Movies**: Stay up to date with the latest trending movies.
- **Latest Releases**: Explore the newest movie releases in cinemas.
- **Movie Details**: View detailed information about each movie, including trailers, ratings, and plot summaries.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js, Vite.js
- **Styling**: Sass
- **Data Source**: TMDB API (The Movie Database)

## Installation

### 1. Clone the repository

```bash
git clone https://github.com/Kapilgupta20/movieflix.git
```

### 2. Install dependencies

```bash
cd movieflix
npm install
```

### 3. Run the development server

```bash
npm run dev
```

Your application should now be running at [http://localhost:5173](http://localhost:5173).

## Configuration

To get movie data, you need to get an API key from the TMDB API:

1. Visit TMDB and sign up for an account.
2. Go to the API section and generate your API key.
3. Create a `.env` file in the root directory of the project and add your TMDB API key:

```env
VITE_TMDB_API_KEY=your-api-key-here
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a pull request


Thank you for visiting MovieFlix! Feel free to explore and enjoy discovering new movies.