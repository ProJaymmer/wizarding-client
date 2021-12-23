# Project 4: UNOFFICIAL WIZARDING WORLD--A REVIEW PAGE FOR MAGICAL SCHOOL

- [LINK TO DEPLOYED PAGE](https://projaymmer.github.io/wizarding-client/)

### FRONT-END README

## WIZARDING WORLD HEADMASTER & STUDENT CRUD

### User Stories

A Wizarding School Review Application. Our users are both the Headmasters of different Wizarding schools who can maintain their campus' webpage with accurate information and the students that attend the school who can leave reviews on the Wizarding school. Wizarding schools dole out owls with invitations to join their "prestigious" schools, but by whose standards are the schools actually worthwhile? Certainly not one person with an over-inflated ego sitting at the top! Let's hear from the people who've actually attended!

Like Yelp, Wizards can sign-up as either a Headmaster or a Student. Headmasters can upload their Wizarding School and information, while students can leave reviews on their experience. Headmasters should be able to Create, Read, Update, or Delete their schools, and students should be able to Create, Read, Update, or Delete their reviews.

And casual users/reviewers can see it all!

## How to Use

On the landing page, you will see a list of previously submitted Wizarding schools and their aggregated ratings. Clicking on any of the schools will direct you to its reviews. The navigation bar will hold a sign-up area for Headmasters and Students. Headmasters, at least any worth their salt, will sign-up and upload their Wizarding school to share all of the standard information that they believe makes their school great. Students can sign-up and leave reviews on their experience.

## Project Overview/Description

Project Overview that includes: Description, Wireframes, MVP/PMVP, and Time/Priority Matrix can be found on..

- [Project Overview](planning/project-worksheet.md)

### CHALLENGES

1. Module not found: Error: Can't resolve 'react-router-dom'.

   SOLUTION: react-router-dom needs to be install via terminal command npm install react-router-dom !

2. Locally saved Logo image would not render on page.

   SOLUTION: I saw some guy’s comment on stackoverflow saying something, Webpack, something, process something something, and needing to use “require” inside the src value.

3. Using React image link to direct page to GitGub repository.

   SOLUTION: The React Link does not direct page to outside addresses! I just learned that the React Link only directs to links that are a part of the current React project. Must use something else, like href tags.
