# MyReads Project

This is a mini application that allows you to manage your books. In the **main interface**, there are 3 bookshelves: _Currently Reading_, _Want to Read_, and _Read_. You can move books from one shelf to another to keep track of your reading progress. You can add books to the bookshelves from the **search** page, or remove the books if don't want to track them anymore.

## Getting started

To get started with MyReads, first download or clone this repo, and:

- install all project dependencies with `npm install`
- start the development server with `npm start`
- you will be able to visit MyReads at [http://localhost:3000](http://localhost:3000)

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).
