# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](./design/my-solution.png)

### Links

- Solution URL: [GitHub]()
- Live Site URL: [GitHub Pages]()

## My process

As always - determining the proper HTML structure that is both semantic, accessible and provides styling hooks for CSS first. Afterwards - developing the mobile macro layouts first, then - smaller details aka micro layouts. Same for the desktop styles after finishing mobile.

Then - coming up with a validation code for JS. Here I went with hard-coded notification messages that get revealed by class toggling if inputs are invalid. I also split the code into modules, but didn't use bundling this time - relied on browser ES6 module implementation instead.

### Built with

- Semantic HTML5 markup
- CSS custom properties
- CSS Grid
- Mobile-first workflow
- Vanilla JS

### What I learned

There are different ways on how to implement validation. I tried to go declarative, rather than imperative, in my code as much as possible. The code could still probably be improved (perhaps by not hard-coding notifications in the HTML, however, I chose to do so because they provide for nice ARIA descriptions even when hidden, by using `aria-describedby` on inputs pointing to notifications).

### Continued development

Seeing how other solutions or frameworks implement form validation and adapting some of their practices, if they're useful.

## Author

- Frontend Mentor - [@marisudris](https://www.frontendmentor.io/profile/marisudris)
- GitHub - [@marisudris](https://www.github.com/marisudris)
