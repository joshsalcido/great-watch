# WatchThis

WatchThis is a full-stack, single-page-application clone of Goodreads. Users can view a list of movies from our data base, create bookshelves and add movies to them. Each movie can be rated and reviewed.

## <a href=https://watch-this-lwrj.herokuapp.com/>Live Link</a>

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

### Challenges

Handling the deletion of a user's shelf was a big challenge our group faced during this project. The data in the shelf was dependant on data from another table via a join table, which caused some hiccups in our initial testing of the program. The greatest hurdle was deleting the appropriate data from the database. Our plan was to test different queries and their responses in order to get the right information we needed to achieve the correct behavior from the function.

Another challenge we faced as a group was the editing of a user review. Our goal was to reveal a form when a user clicked a button on the page to edit their review. The form would allow them to change their review body and rating using DOM manipulaton. We ran into many snags, from selecting the right elements to moving the right data between modules, pugs and routes. As a group we used our debugging skills to determine the right path to take for each problem we ran into.

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
