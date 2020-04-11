This is my first React app built using fetch. It's a gameboy "pokedex" that fetchs from pokeapi.co. Below you can find some of my "Production Diary" which goes through some of the issues that I ran into daily.

[Here] (https://kariandreah.github.io/pokedex) is the app live. 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).


Day 1 notes:
I had to take a break from my head-to-head project but able to take what I learned for this project. 
I am nesting components within my big component. Havng issues getting more that two types for each pokemon to show up. May use a ternary operator. 
******************Issues***********************
Getting all types to show up.
******************Tomorrow***********************
This about auto fill searches, but would have to hard pokemon. Put in the next version maybe. Michelle said I should have autocorrect even if I have to hard code it. 

Day 2 notes:
I built a design of the pokedex. 
*****************Issues***************************
I couldn't get my state done in react. Need to look up rules again for getting the values. I will work on it later
*****************Tomorrow*************************
Get the rest of the states tomorrow. 

Day 3 notes:
Finally was able to get images into the pokedox. I used an iff statement to show what was loaded. Also made sure to make the input.toLowerCase() so that the search will work regardless of capitalization. Started designing the gameboy. Don't know what design I definitely want. 
******************Issues***********************
Most issues are design wise. Will probably ask Michelle for help. 
******************Tomorrow*********************
Maybe finish the whole project tomorrow. Gonna figure out where to input the data tomorrow. 

Day 4 notes:
Figured out how to pass props to grandchildren. Actually pretty easy, so I shouldve figured it out easier. Also most done, just need to design the about and the stats section. 
******************Tomorrow***********************
Design and finish up the app, specifically About and Stats section. About section should have the "types" as well in colors. 

Day 5 notes:
Figured out how to style the about and the info sections. Probably can clean up the code a little bit, probably a lot a bit. i.d. maybe use a switch instead of if and else if statements. Learned better css selector techniques, and fixing some flexbox issues.
*****************Issues****************************
Feel like perhaps the project isn't as impressive as I would've liked. I probably need to clean up a bunch of code. I may want to see how to go to the next pokemon via pushing the A or B button on the gameboy. Also need to clean up edge cases, i.e. if someone searches something empty. If someone pushes about or stats before loading the .fetch()
*****************Tomorrow*************************
Work on all issues, fix all the edge cases, once everything is done, clean up all of my code. Perhaps make the background look a better as well.

Day 6 note:
Fixed some edge cases by changing the logic in the pokewindow component. 
Also figured out how to use one fetch when I need to scroll up and down through pokemon. When the search field is empty it console.logs errors. Not necessarily sure if I need to fix that. Finished the design. 
Edge cases I worked out:
-If the input is empty, leave the logo.
-If input is empty, above and stats stay on logo. Up and down stay on logo. 
-If the user goes too low, go back to logo. 

