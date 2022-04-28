# Compendium w/ Mock Service Worker

## Demo

[https://adv-react-compendium-msw.netlify.app/](https://adv-react-compendium-msw.netlify.app/)

## Getting Started

Use a react template to get started

### Learning Objectives

- Using `msw` to mock out our API responses
- Setting up `msw` (a non-trivial task)
- Using the `req` argument to get request data
- Using the `res` argument to mimic an api response
- Use the `ctx` argument to mimic the `json` sent from the response

### Description

We'll be making another 'compendium' type of application for this assignment. The focus will be on the tests for our compendium and using mock service worker or `msw` to test our applications. `msw` gives us a way to mimic or _mock_ our api responses.

Running tests without mocking will cause our tests to repeatedly make real api fetches to our api url. These fetches make our tests reliant on the current status of the API. Unless we specifically want to test that the real api is working it is better to mock the responses to these requests.

### Acceptance Criteria

- Users should be able to see a list of at least 10 items when the page loads
- Users should be able to perform at least one action to manipulate the app `state` (Filter, Sort, Search, etc..)
- At least 1 test suite for the compendium items display (Component)
- At least 1 test suite for the `state` manipulation (Behavioral)
- Usage of `msw` to mock api response

### Rubric

| Tasks                                             | Points |
| :------------------------------------------------ | -----: |
| 1 Behavioral test suite                           |      4 |
| 1 Component test suite                            |      5 |
| usage of `msw` in test suite                      |      5 |
| At least one way to manipulate `state` through UI |      2 |
| Compendium list is loaded with a `useEffect` hook |      2 |
| Deployed on Netlify with passing CI               |      2 |
