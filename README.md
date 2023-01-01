# Frontend Mentor - Notifications page solution

This is a solution to the [Notifications page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/notifications-page-DqK5QAmKbC). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Distinguish between "unread" and "read" notifications
- Select "Mark all as read" to toggle the visual state of the unread notifications and set the number of unread messages to zero
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot

![](screenshot/Screenshot%202023-01-01%20at%2017-00-19%20Frontend%20Mentor%20Notifications%20page.png)
![](screenshot/Screenshot%202023-01-01%20at%2017-00-37%20Frontend%20Mentor%20Notifications%20page.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- [Vue](https://vuejs.org/) - JS Framework

### What I learned

```js
var items = document.querySelectorAll("#items > .unread");
var dot = document.querySelectorAll(".dot");

for( i = 0; i < items.length; i++){
  items[i].classList.remove('unread');
  dot[i].style.display = "none";
}
```

### Continued development

I would like to learn more how to use front-end framework, and i want to improve how to make good design.

### Useful resources

- [stackoverflow](https://stackoverflow.com/questions/26003283/how-to-remove-all-classes-except-the-one-you-clicked) - This help me when i try to learn how to use queryselectorall.

## Author

- Frontend Mentor - [@mrp14yz](https://www.frontendmentor.io/profile/mrp14yz)
- Twitter - [@14_mrp](https://www.twitter.com/14_mrp)
