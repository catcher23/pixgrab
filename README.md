# pixGrab
Find tagged images on Instagram between start and end dates and save them in collections

## How to Use the App
[www.pixgrab.xyz][link]

[link]: www.pixgrab.xyz

- Upon going to www.pixgrab.xyz, the user has the option of signing up or signing in. There is also a guest sign-in option for demo access.
- Once logged in, the user can view his past searches, or conduct a search.
- The search takes a hashtag, a start date, and an end date. All three fields must be specified, and the start date must be before the end date, or a notification is given.
- If the input is valid, the search starts and a loading icon loads. Due to time required to paginate between two endpoints, the search may take up to a minute, depending on the type of hashtag and timeframe.
- Once the search loads, the user can click on the photos to view them in a modal, and the search is also added to his or her collection, with the option to delete the search.

![screenshot_1]

[screenshot_1]: http://res.cloudinary.com/danlau168/image/upload/v1449817150/Screen_Shot_2015-12-10_at_10.58.26_PM_fytppn.png

## Technology
Technology used
- Ruby on Rails
- React
- Flux
- jQuery
- PostgreSQL
- Instagram API

### Gems
- react
- newrelic
- instagram
- httparty
- rack-timeout
- jbuilder
- bcrypt
- figaro

### NPM Packages

- babel
- flux
- react-loader
- react-router
- webpack

### App
- The app paginates through the tag and user media endpoints and collects content whose tag time is in between the start and end dates.
- Since Instagram currently does not have default parameters to restrict tags by date, the max_timestamp min_timestamp parameters of the user self media endpoint are used to retrieve those dates, based on the tag that inputted.
- The searches are saved to the database and are viewable by the user, who has the option to delete the collection as well.

### Backend
- To minimize API calls to the backend, the user id media endpoint is used in conjunction with the tag endpoint. The use of timestamp searching in the user id media end prevents naive pagination from the most recent date to the date the user specifies.
- The Rails backend provides an API that accepts a POST to create a search collection and GET to retrieve content.
- The react router is used to handle single-page redirects instead of the stock rails router, to make it a single page app once logged-in
- The search data is stored in a PostgreSQL database, at the discretion of the user.
- In terms of fault tolerance, if there is an error in the collection there is an automatic check every time a search collection is retrieved from the database. If there are null values due to error, the search is deleted. This is in addition to the initial validation checks.


### Frontend
- The frontend uses a React interface to search for photos, create collections and view them.
- The main search view component is only updated when the search store emits a change event to notify a change, resulting in a quick and dynamic interface with components which only update when necessary.
- A React-based loader indicates to the user that the search is being conducted, and when the search results are loaded the store emits an event which closes the loader
- Users can click on the photo result to view it, and a modal links directly to the native Instagram link and can play videos in the modal.

### Deployment
- The app is deployed to Heroku and with a redirection to pixgrab.xyz.
- The newrelic gem is used to periodically ping the application to prevent delays in startup

### Challenges and design choices
- To speed up the loading time of the search, the O(n) retrieval time of hashmaps are used to keep track of whether the user's media has already been searched, as well as if the media has already been added to the collection.
- In order to prevent loading issues due to data corruption, such as when a search doesn't complete or when a photo with null values are retrieved, there is a check everytime the PostgreSQL database is hit to make sure the retrieved searches are valid.
- In order to keep the app singled-paged once logged in, when a user wants to view a previous search, the saved search is retrieved and rendered in the browser through React, preventing a page refresh or URL redirect.

### To improve in the future
- I would like to add error messages and notifications in the future, such as when an album is deleted.
- For demo purposes and because of Instagram sandbox restrictions, a single access token is used to hit the Instagram Api. In production, each user should sign in through Instagram with their own access tokens.
- Functionality should be added to allow users to view other user's collections, and share their own collections with others.
- The code needs to be refactored and commented for clarity and to ideally implement a single action per callback.
