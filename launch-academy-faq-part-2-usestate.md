## Introduction

Continuing on your work with the Launch Academy FAQ from last week, it's time to make some upgrades. Now you'll refactor the site to use an API endpoint with Fetch and add testing!

## Setup

From your challenges directory, run the following:

```no-highlight
et get launch-academy-faq-part-2-usestate
cd launch-academy-faq-part-2-usestate
yarn install
yarn run start
```

In a separate tab, launch your sinatra server:

```no-highlight
bundle
ruby server.rb
```

Then, visit <http://localhost:4567> in your browser. You should see a starter version of the code that should look close to your finished version from Part 1 last week. Make sure to review the code provided before proceeding. _Note: The top level component is we are given is FAQContainer rather than `App.js`, which you may have seen in your original Launch FAQ assignment._

## Instructions

This is a multi-part, multi-day challenge that relies on other lessons released throughout the week -- you will not be able to complete all parts of this challenge immediately.

### Step 1: Use `fetch` to GET data

We would like to refactor the app to **retrieve data from an API**, which has been provided.

1. Create a `fetch` call in the appropriate React component. This `fetch` call should request data from <http://localhost:4567/api/v1/questions>.
2. Using the data returned in the response to pass the provided `Question` components the data they need.

### Step 2: Use `fetch` to POST data

Your web application is coming together! Let's now give our app the ability to create new FAQs. You will need to create a React form that will **POST data to an API**. The POST endpoint has been provided.

Use fetch to make a POST request to <http://localhost:4567/api/v1/questions>. Consider what steps you will need to take to complete this feature.

- How many components will you need, and where in your current component tree could you create them?
- How many fields will your form need?
- How will the user know that the form was submitted correctly? How can we validate user input?

Keep in mind that you code may look different from someone else's. Know that your `server.rb` is already configured such that that you should not need to write any new Ruby code to make this feature work.

The `post "/api/v1/questions"` endpoint is expecting a new question JSON object that should match the key value pairs below:

```json
{
  "question": "What is Launch Academy?",
  "answer": "Launch Academy is a 10-week, immersive bootcamp taking eager learners with little to no coding experience and giving them the tools to add value as a junior contributor to a software engineering team"
}
```

### Step 3: Add React Router

Our application is growing. It's going to need some _routes_ if we want to give it room to grow!

**Step One:** Create a new component `src/components/App.js`. This will be a stateless, functional component that will end up returning our `react-router` routes. No need to have this setup and working yet.

**Step Two:** The `App` component needs to become our new top level component! Have `main.js` render the `App` component instead of the `FAQContainer`. You might want to test that it renders correctly before adding your routes and hooking up your old code.

Now you should add your routes to your `App` component. When I visit `"/"`, I should see the list of FAQ items appear on the page.

**Step Three:** Update your application to satisfy the following criteria. We suggest that you ensure that your app is working successfully after satisfying each piece of the criteria.

- When I visit `"/launchers"` I should see an index of launchers on the page. The `LauncherList` component has already been made for you, and should be rendered at this path.
- Add the correct fetch request such that this component now renders with a full list of famous launch academy students!

**Step Four:** Add show pages for each Launcher!

- The name of each Launcher should be a react router Link. E.g. `/launcher/2` should render the show page for "Jeffrey Crinou". You'll need to use the correct launcher `id` in your path to get this to work successfully.
- When I visit `/launcher/:id`, I should see a show page with all of the relevant info for a Launcher with that `id`.

You'll need to create a `LauncherShow` component in order to satisfy this last step.

By golly you have done it!

### Step 4: Integrate a Third Part API! 

Integrate a Third Party API of your choice into the app! 

While you can integrate any API of your choice into the app, we recommend one of two simpler APIs for your first go: 
* [SWAPI (Star Wars) API][swapi]
* [GIPHY API][giphy]

#### Suggested Features: SWAPI

* When I visit `"/launchers/space"` I should see an index of Star Wars characters on the page. Feel free to mimic the `LauncherList` component! Ideally, the name, species and homeworld of each character should be visible on the page. 
* This page should make a fetch request first to your backend, and then from your backend to the SWAPI API. 
* Add the correct fetch request such that this component now renders with a full list of Star Wars characters, each of whom suddenly finds themselves just as interested in web development as in saving/over-throwing the current galactic order. 

By the end of this feature, the name of each Star Wars character from `https://swapi.dev/api/people/` endpoiunt should be visible on the page. 
 
#### Suggested Features: GIPHY

* Update the launchers index page to display a random GIF in addition to the name of each launcher. The displayed GIF should use the name of the launcher to query for a relevant GIF.
* This page should make a fetch request first to your backend, and then from your backend to the GIPHY API. **Note: You will need to apply for an API key from GIPHY in order to complete this step).** 
* Update your **existing** fetch request on this page to hit the same endpoint you used for the previous implementation of this page, but now with additional GIF information. This will likely mean fiddling the existing launcher data structure.

Then, `et submit` your code.


[swapi]: https://swapi.dev/
[giphy]: https://developers.giphy.com/

