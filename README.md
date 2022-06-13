# WatchThis

WatchThis is a full-stack clone of Goodreads. Users can view a list of movies from our data base, create bookshelves and add movies to them. Each movie can be rated and reviewed by users.

## <a href=https://watch-this-lwrj.herokuapp.com/>Live Link</a>

<img src="https://imgur.com/wNxINhh"></img>

### Technologies

- Frontend: NodeJS, Pug, CSS 3, DOM Manipulation
- Backend: Express, PostgreSQL
- Heroku (website hosting)

### Features

- User authentication (sign-up, login, logout) with credentials
- Logged in users can create, delete and edit lists of movies
- Logged in users can create, delete and edit reviews and ratings
- Dynamic average user score based on data calculation from database
- Dynamic Review posting, editing and deleting

### To-Do/Future Features

There are still a lot of bugs on the app (naturally) and we would like to fix those as time goes by to make it a much smoother and more functional experience. Another feature we would like to add in the future is the ability to search movies by name, genre, year released etc.

### Challenges

Handling the deletion of a user's shelf was a big challenge our group faced during this project. The data in the shelf was dependant on data from another table via a join table, which caused some hiccups in our initial testing of the program. The greatest hurdle was deleting the appropriate data from the database. Our plan was to test different queries and their responses in order to get the right information we needed to achieve the correct behavior from the function.

Another challenge we faced as a group was the editing of a user review. Our goal was to reveal a form when a user clicked a button on the page to edit their review. The form would allow them to change their review body and rating using DOM manipulaton. We ran into many snags, from selecting the right elements to moving the right data between modules, pugs and routes. As a group we used our debugging skills to determine the right path to take for each problem we ran into.

A feature of the app we had to stop and think about was a dynamic user average score that would calculate the data on the page from all user ratings to return a single decimal value for the average rating score of a movie. We thought it would be best to store all of the rating values from the 'movies' object we queried for using the array's map method, then declaring a variable to store an average value. If our ratings array was empty, we decided we should display a message that would let the user know the movie had no ratings yet. Otherwise, we used a reduce array method to average the contents and fix them to a proper point notation.

```
// In the get router for a movie's id page, we queried for user reviews from a table that included ratings
const ratings = movies.Reviews.map((movie) => movie.dataValues.rating);
let avg;
if (!ratings.length) {
  avg = "There are no ratings yet! Be the first!"
} else {
  avg = (ratings.reduce((a, b) => a + b) / ratings.length).toFixed(2);
}
```

<h3> Contributors </h3>
<ul>
  <li>
    <a href=https://github.com/joshsalcido>Josh Salcido</a></li>
  <li>
    <a href=https://github.com/stuffy-doll>Luis Sanchez-Porras</a></li>
  <li>
    <a href=https://github.com/wesleyblackburn90>Wesley Blackburn</a></li>
  <li>
    <a href=https://github.com/WingNinCheung>Ricky Cheung</a></li>
</ul>

<h3> watchThis Project Wiki </h3>
<a href=https://github.com/joshsalcido/great-watch/wiki/>
