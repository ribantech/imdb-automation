After forking this project in Github, run these commands:

## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-kitchensink.git

## cd into the cloned repo
cd cypress-example-kitchensink

## install the node_modules
npm install

## launch the cypress test runner
npm run cy:open
or
npx cypress run

##Test Cases
IMDB test cases.xlsx - Contains all the test cases with detailed steps

##Smoke Test cases
TC1 - This test case is to validate if IMDB Top 250 page loads with all the page components
TC2 - This test case is to validate if Sorting dropdown values are displaying, and for each selection 250 rows are getting displayed
TC4 - This test case is to validate the login functionality with Valid Credentials
TC6 - This test case is to validate Add to Watchlist functionality
TC7 - This test case is to validate if search results page is getting displayed for both valid & invalid search