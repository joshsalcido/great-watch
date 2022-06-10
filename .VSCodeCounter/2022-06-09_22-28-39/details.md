# Details

Date : 2022-06-09 22:28:39

Directory /Users/rickycheung/Desktop/App-Academy/express-group-project/great-watch

Total : 49 files,  1435 codes, 99 comments, 165 blanks, all 1699 lines

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)

## Files
| filename | language | code | comment | blank | total |
| :--- | :--- | ---: | ---: | ---: | ---: |
| [README.md](/README.md) | Markdown | 11 | 0 | 6 | 17 |
| [app.js](/app.js) | JavaScript | 46 | 8 | 11 | 65 |
| [auth.js](/auth.js) | JavaScript | 41 | 0 | 6 | 47 |
| [config/database.js](/config/database.js) | JavaScript | 18 | 0 | 2 | 20 |
| [config/index.js](/config/index.js) | JavaScript | 10 | 0 | 1 | 11 |
| [db/migrations/20220606200558-create-user.js](/db/migrations/20220606200558-create-user.js) | JavaScript | 46 | 0 | 1 | 47 |
| [db/migrations/20220606201443-create-shelf.js](/db/migrations/20220606201443-create-shelf.js) | JavaScript | 32 | 0 | 1 | 33 |
| [db/migrations/20220606201445-create-movie.js](/db/migrations/20220606201445-create-movie.js) | JavaScript | 43 | 0 | 1 | 44 |
| [db/migrations/20220606201446-create-review.js](/db/migrations/20220606201446-create-review.js) | JavaScript | 39 | 0 | 1 | 40 |
| [db/migrations/20220606212203-create-movie-shelf.js](/db/migrations/20220606212203-create-movie-shelf.js) | JavaScript | 32 | 0 | 1 | 33 |
| [db/models/index.js](/db/models/index.js) | JavaScript | 31 | 0 | 7 | 38 |
| [db/models/movie.js](/db/models/movie.js) | JavaScript | 24 | 0 | 1 | 25 |
| [db/models/movieshelf.js](/db/models/movieshelf.js) | JavaScript | 10 | 3 | 1 | 14 |
| [db/models/review.js](/db/models/review.js) | JavaScript | 18 | 0 | 1 | 19 |
| [db/models/shelf.js](/db/models/shelf.js) | JavaScript | 17 | 1 | 1 | 19 |
| [db/models/user.js](/db/models/user.js) | JavaScript | 20 | 0 | 3 | 23 |
| [db/seeders/20220607203007-userSeeds.js](/db/seeders/20220607203007-userSeeds.js) | JavaScript | 28 | 12 | 4 | 44 |
| [db/seeders/20220607203008-shelfSeeds.js](/db/seeders/20220607203008-shelfSeeds.js) | JavaScript | 14 | 12 | 5 | 31 |
| [db/seeders/20220607203733-movieSeeds.js](/db/seeders/20220607203733-movieSeeds.js) | JavaScript | 140 | 12 | 3 | 155 |
| [db/seeders/20220607203736-reviewsSeeds.js](/db/seeders/20220607203736-reviewsSeeds.js) | JavaScript | 38 | 12 | 3 | 53 |
| [db/seeders/20220607203846-movieshelfSeeds.js](/db/seeders/20220607203846-movieshelfSeeds.js) | JavaScript | 20 | 12 | 3 | 35 |
| [package.json](/package.json) | JSON | 32 | 0 | 1 | 33 |
| [public/javascripts/delete-review.js](/public/javascripts/delete-review.js) | JavaScript | 18 | 0 | 2 | 20 |
| [public/javascripts/delete-shelf.js](/public/javascripts/delete-shelf.js) | JavaScript | 17 | 0 | 3 | 20 |
| [public/javascripts/edit-review.js](/public/javascripts/edit-review.js) | JavaScript | 38 | 1 | 2 | 41 |
| [public/javascripts/index.js](/public/javascripts/index.js) | JavaScript | 3 | 0 | 0 | 3 |
| [public/stylesheets/index.css](/public/stylesheets/index.css) | CSS | 95 | 0 | 20 | 115 |
| [public/stylesheets/login.css](/public/stylesheets/login.css) | CSS | 26 | 3 | 4 | 33 |
| [public/stylesheets/movie-page-styles.css](/public/stylesheets/movie-page-styles.css) | CSS | 7 | 0 | 2 | 9 |
| [public/stylesheets/movies-styles.css](/public/stylesheets/movies-styles.css) | CSS | 4 | 0 | 1 | 5 |
| [public/stylesheets/reset.css](/public/stylesheets/reset.css) | CSS | 23 | 0 | 4 | 27 |
| [routes/home.js](/routes/home.js) | JavaScript | 7 | 0 | 3 | 10 |
| [routes/index.js](/routes/index.js) | JavaScript | 6 | 2 | 3 | 11 |
| [routes/movies.js](/routes/movies.js) | JavaScript | 76 | 3 | 12 | 91 |
| [routes/shelf.js](/routes/shelf.js) | JavaScript | 60 | 9 | 6 | 75 |
| [routes/users.js](/routes/users.js) | JavaScript | 119 | 1 | 9 | 129 |
| [routes/utils.js](/routes/utils.js) | JavaScript | 7 | 0 | 3 | 10 |
| [views/create-shelf.pug](/views/create-shelf.pug) | Pug | 0 | 0 | 1 | 1 |
| [views/error.pug](/views/error.pug) | Pug | 5 | 0 | 2 | 7 |
| [views/home.pug](/views/home.pug) | Pug | 3 | 0 | 2 | 5 |
| [views/index.pug](/views/index.pug) | Pug | 50 | 6 | 2 | 58 |
| [views/layout.pug](/views/layout.pug) | Pug | 16 | 0 | 1 | 17 |
| [views/login.pug](/views/login.pug) | Pug | 16 | 0 | 3 | 19 |
| [views/movie-page.pug](/views/movie-page.pug) | Pug | 54 | 2 | 3 | 59 |
| [views/movies.pug](/views/movies.pug) | Pug | 11 | 0 | 2 | 13 |
| [views/register.pug](/views/register.pug) | Pug | 17 | 0 | 3 | 20 |
| [views/shelf-page.pug](/views/shelf-page.pug) | Pug | 20 | 0 | 2 | 22 |
| [views/shelf.pug](/views/shelf.pug) | Pug | 13 | 0 | 3 | 16 |
| [views/utils.pug](/views/utils.pug) | Pug | 14 | 0 | 3 | 17 |

[Summary](results.md) / Details / [Diff Summary](diff.md) / [Diff Details](diff-details.md)