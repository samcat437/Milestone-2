# All About Key Signatures Website

As a violin and cello teacher, I've noticed that kids have trouble figuring out key signatures - most likely because they have never been taught how to identify them correctly. This website will address this gap in knowledge and test it with a quiz. 

View the live link [here](https://samcat437.github.io/Milestone-2/)

# User Experience

## User Stories

### Home Page

1. As a visiting user, I would like to understand what the purpose of the website is.
2. As a visiting user, I would like to navigate towards the lessons page and the quiz page.

### Lessons Page

1. As a visiting user, I would like to view content of the website. 
2. As a visiting user, I would like to navigate towards the quiz page. 

### Game Page

1. As a visiting user, I would like to view the question displayed on page one at a time. 
2. As a visiting user, I would like to click on a button in order to make a response. 
3. As a visiting user, I would like to check my answer.
4. As a visiting user, I would like to view how many correct answers I had in the score section. 
5. As a visiting user, I would like to navigate back to the home or the lesson page at any time via the navbar. 

## Features

### Navbar 

1. Navbar will be at the top of all pages on the desktop version.
2. Navbar will have the following options: 
    * Home
    * Lesson
    * Quiz
3. Clicking on the relevant navigation option will redirect the user to that page.
4. Navbar will be sticky on the lesson page.
5. Navbar on desktop will display all options. On mobile, once the hamburger is clicked, the navigation options will appear. 
 
 ### Home Page

 1. The home page will be visually attractive and welcoming. It will define the mission of the website. 
 2. It will invite the user to visit the lesson page to learn about key signatures via a button. 
 3. It will direct the user to the game page where they can test their knowledge about key signatures via a button. 
 4. It will have a navbar that links to these pages as well. 

 ### Lesson Page

 1. The lesson page will be clearly layed out into sections.    
  * What is a key signature? 
  * How to find relative major or minor 
  * Must be memorized key signatures 
  * Major key signatures
  * Minor key signatures 
  * Is there a minor key shortcut?
  * Is it major or minor? 
2. There will be a button to redirect the user to the game page where they can put their skills to the test. 

### Game Page 

1. There will be a message first to inform the user how to use the application. Clicking the start button will clear this and generate the first question.
2. The user will then be able to view the first question. 
    Questions will consist of an image of a key signature and a question attached to inform the user whether it is a major or minor key signature they are identifying. 
3. The user will be able to click on an option to select it.  
4. The user will then click the check answer button for the selected answer to color code green for correct and red for incorrect. There will be a message to congratulate the user if correct, or commiserate if incorrect. If an incorrect answer is given, the correct answer will appear in the message.
5. The score counter will increment when a question is answered correctly. 
7. When the game is finished and the submit button clicked, a message will appear to display the correct answer score and to congratulation/commiserate with the user. 
8. The user will be urged to revisit the lessons page if the score is lower than 8/10.

## Design

### Color Scheme 

Contrast colors of pale blue, pale pink and pale green dominant the scheme. The colors darken when buttons and options are hovered, as well as the buttons expanding. 

## Typography 

For paragraph text, Nanum Gothic sourced from Google Fonts is used to create a modern and fun look as the site is designed for educational purposes. Sans-serif is the fallback option.

For headings and the nav bar, Gochi Hand from Google Fonts to emphasise the whimsical nature of the site. 

### Images 

Images were used from the free site : [pixabay](https://pixabay.com) and then cropped for use across the site. The examples in the quiz and in the nav bar were cropped from this [image](https://pixabay.com/vectors/key-signatures-keys-music-notation-6792283/).

The nav bar was taken from this [one](https://pixabay.com/vectors/music-treble-clef-musical-symbol-39881/).

The backgrounds were taken from these links : [index.html background](https://pixabay.com/vectors/cloud-speech-bubble-thinking-idea-146176/) [game.html background](https://pixabay.com/vectors/clouds-pattern-wallpaper-sky-5930599/).

## Wireframes 

Wireframes can be viewed [here](https://github.com/samcat437/Milestone-2/tree/main/docs/Wireframes).

### Technologies

## Languages Used

[HTML 5](https://en.wikipedia.org/wiki/HTML5) : HTML 5 was the main language used across the site.

[CSS 3](https://developer.mozilla.org/en-US/docs/Web/CSS) : CSS 3 was used to style the site.

[Javascript ES6](https://www.w3schools.com/js/js_es6.asp) : Javascript ES6 was used to manipulate the DOM in order to create the interactive game. 

### Frameworks Used

[Bootstrap 5.1](https://getbootstrap.com/) : Bootstrap 5 was used to organise the layout of the site, add basic styling, provide spacing and build custom elements. 

[Google Fonts](https://fonts.google.com/) : Google Fonts provided the font "Nanum Gothic" and "Gochi Hand" in order to customise and stylise the text. 

[Colorzilla](https://www.colorzilla.com/gradient-editor/) : Colorzilla has an ultimate CSS gradient generator that I used to generate the CSS for the background colors of my lesson.html page. 

[Coolors](https://coolors.co/) : Coolors is a colour palette generator I used to create colors that worked together for the site.

[html-css-js.com](https://html-css-js.com/html/character-codes/) : I used this page to generate the emojis for my lesson.html page. 

[Git](https://git-scm.com/) : Git is the technology that hosts the Gitpod IDE and terminal where the project was coded. Git then committed and pushed the code to the cloud-based servers on GitHub.
 
[GitHub](https://github.com/) : GitHub hosted the project on its servers after being pushed by Git.

[Balsamiq](https://balsamiq.com/) : Balsamiq was used to create and download wireframes for the project.

[Jest](https://jestjs.io/) : Jest was run through the terminal through Git to run test cases on select functions during automated testing. See the testing section for more information.

[Favicon.io](https://favicon.io/favicon-converter/) : This website allowed me to generate a favicon for the site.

[Chrome Dev Tools](https://developer.chrome.com/docs/devtools/) : Chrome Dev tools were utilised for the Javascript console as well as to verify the site's responsiveness and visual presentation. 

### Bugs 

During the development process of the game section, I ran into several problems. One in particular was within the selectAnswer function on line 168 of game1.js. This piece of code loops through the options array, accesses them individually and then assigns a click event listener. I originally had the event listener out of the code loop grouped with the other event listeners that will fire after the DOM is loaded. 

I then was having trouble figuring out how to turn off the event listener once a selection had been made. I wrote it within the loop with removeEventListener, but this was not working. I finally worked out with my mentor's suggestion that I loop through each option and if the selected class is not present, add the disabled class which turns off pointer events in the CSS file. Once I figured out that could be controlled via CSS, it became a lot easier. 

It is worth noting that I would have perhaps preferred that the user is able to toggle the selected class on and off before using the check answer button and that maybe the check answer button is a bit redundant in this case. I have not changed it at this point as my test cases check for its functionality within this context. The ability for the user to amend their answer could be something to explore in future features. For the last question, I would also like to remove the check answer button once the button is checked. This would require further logic and is why I omitted it for now. 

While tidying up my project, I was running into trouble adding the hidden CSS class to my quiz-container id, which is a flex Bootstrap item. It turns out that they also override "display = none", so I had to change the text of this container rather than hiding it.

## Testing 

### Code Validation 

The W3C Markup Validator, W3C CSS Validator and Jshint Services were used to check each page for syntax errors. 

[W3C Markup Validator](https://validator.w3.org/)

* [index.html](https://github.com/samcat437/Milestone-2/blob/main/docs/Code-Validation/index.html%20W3C%20markup%20-%20AAKS.png) - The validator flagged that my image tag on line 25 was missing an alt tag. 
* [lesson.html](https://github.com/samcat437/Milestone-2/blob/main/docs/Code-Validation/lesson.html%20W3C%20markup%20-%20ABKS.png) - The validator flagged that my images within the lesson content were missing alt tags.
* [game.html](https://github.com/samcat437/Milestone-2/blob/main/docs/Code-Validation/game.html%20W3C%20validator%20-%20AAKS.png) - The validator notified me that I had an empty h1 element on line 62. This is a container for the quiz question. To fix this, I added some placeholder text and then added the hidden class from my CSS and then added some additional Javascript to remove this class when the game is started. The validator also notified me that lines 72 and 78 where I have section tags, I need to have heading elements to correspond. I changed these to div elements to rectify. I also forgot to close my section element on line 59. 

[W3C CSS Validator](https://jigsaw.w3.org/css-validator/#validate_by_input) 

[style.css](https://github.com/samcat437/Milestone-2/blob/main/docs/Code-Validation/CSS%20validator%20-%20AAKS.png) - Hooray - no errors found. 

[Jshint](https://jshint.com/) - There were a few unnecessary semicolons that I removed as per the validator's instruction; however, there were a number of notifications that my code was for Javascript ES6, which is the version that I intended to write my code in, so I don't see a reason to take action from these [notifications](https://github.com/samcat437/Milestone-2/blob/main/docs/Code-Validation/Jshint%20-%20AAKS.png). 

## Automated Tests

Automated Tests can be found in game1.test.js within the static, js and test folders. I opted to test three important functions of the game, rather than all of them, as per the project requirements. I wrote the code first and the test cases after, as was recommended to me by mentor, who believes that this is the right way to learn at my stage of development. Within a professional environment, a test driven development (TDD) approach would be preferable or required. View the test coverage [here](https://github.com/samcat437/Milestone-2/blob/main/docs/Code-Validation/jest-coverage.png).

I tested that DOM elements were appearing and disappearing as appropriate for my first three functions - startGame, readyQuestion, and newQuestion. I tested this with Jest and by using their [documentation](https://jestjs.io/docs/getting-started).

During the writing of my test cases, I was struggling with my global let variable n, especially during writing test cases. n is the variable representing the index for the questions array which changes the questions as they populate the page and the user clicks the next question button. I was writing the test case on line 122 of game1.test.js which tests that when the last question is reached, the next button will disappear and the submit button will appear. The test was not passing with n being incremented on line 152 of game1.js. I moved it to the selectAnswer function, but then this caused another test to fail. Moving n++ to the end of the newQuestion block as well as rewriting the code so that when the second to last question was reached does the code execute solved these issues. 

Manual tests were conducted throughout the development process in order to understand how the DOM was being manipulated. Chrome Dev tools were utilised for the use of the console as well to verify the site's responsiveness and visual presentation. 

## Manual Testing 

The webpage was tested regularly through development via Chrome developer tools. The Github Pages link was tested on a number of devices including iPhone XR, iPad 2nd Gen, iPad Air 2, HP Envy Laptop, and Macbook Pro. I tested it on Chrome, Edge, Safari and Firefox. 

### Test Cases based on User Stories

#### Home Page

1. As a visiting user, I would like to understand what the purpose of the website is.
    * When first loading the page, the user sees the message on the home page which greets the user and addresses the purpose of the webpage. 
2. As a visiting user, I would like to navigate towards the lessons page and the quiz page.
    * The user sees the lesson and game page buttons which take them to the relevant pages. They can also navigate via the navbar.
[View the home page here](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/home%20AAKS.png)

#### Lesson Page

1. As a visiting user, I would like to view content of the website. 
    * The user is able to view the lesson content is a scrollable, narrative layout.
    [Lesson Page top](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/lesson-top.png)
2. As a visiting user, I would like to navigate towards the quiz page. 
    * The user is invited to the game page via a button at the bottom of the lesson content. They can also skip to the game page via the navbar.
    [Lesson Page bottom](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/lesson-bottom.png)

#### Game Page

1. As a visiting user, I would like to view the question displayed on page one at a time. 
    * After clicking the start game button, the user is displayed one question. The user knows there will be more questions because there is a next button after checking my answer. [Game Page one question](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/game-next-question.png)
2. As a visiting user, I would like to click on a button in order to make a response. 
    * The user selects an answer by clicking it. They will know it is selected because it changes colour. [Game Page selection made](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/game-selection.png)
3. As a visiting user, I would like to check my answer.
    * The user checks their answer by clicking on the click answer button. This highlights their selection either in green if correct or red if incorrect. If incorrect, the correct answer is written below the options. [Game Page Check Answer](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/game-answer.png)
4. As a visiting user, I would like to view how many correct answers I had in the score section.   
    * When a user selects an answer correctly, the score counter increments. [Game Page Score](https://github.com/samcat437/Milestone-2/blob/main/docs/test-screenshots/game-score-increment.png)
5. As a visiting user, I would like to navigate back to the home or the lesson page at any time via the navbar.
    * The user is able to scroll up to access the navbar. I did not make the navbar sticky on this page because the user may have to scroll a bit in order to see the entire game area on their device, and I did not want the navbar to cut off the image or question at any point.

## Deployment 

### Via Github Pages 

1. Navigate to the Github repository at [here](https://github.com/samcat437/Milestone-2).
2. Choose "Settings."
3. Click on "Pages."
4. Ensure the main branch and the root directory are selected.
5. Copy and paste the url into the browser or click on the live [link](https://samcat437.github.io/Milestone-2/).

### Via Gitpod

1. Navigate to the Github repository at [here](https://github.com/samcat437/Milestone-2).
2. Choose "Gitpod."
3. In the Bash terminal, type: `python3 -m http.server`
4. Choose "Make Public" when a blue button appears.
5. Choose "Open Browser" when the options appears.

### Acknowledgements

Massive thanks to my Code Institute mentor for guiding me through the development process. Thank you to tutor support for being patient during tutoring sessions. 