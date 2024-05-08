# Purrfect Match Game 🌈

## Description

Welcome to the exciting world of our match-3 puzzle game! In this colorful and addictive game, your goal is to strategically match three or more identical elements to earn points🎯



## Game Logic

1. The game generates an nxn grid of four different elements on the screen. Each cell in the grid can contain one of these elements.



2. When the player choose an element, we need to:
    - Identify possible drag targets (i.e., adjacent cells where the element can be moved).
    - Check if the chosen element will make a match with adjacent elements.
    - If the chosen element will make a match (e.g., three or more identical elements in a row/column), allow the move.
  
     
3. If a match is allowed:
    - Delete the matched elements from the grid.
    - Drop new elements from above to replace the matched ones.
    - This can be done by shifting down the elements in the columns above the matched cells and generating new elements at the top.
    - The new elements can be randomly chosen from the available pool of elements.
    - check if the new elements match.

4. The player will earn points for matched elements. 

## Additional Features


- [ ] Dark Mode
- [x] Make customized branding for the game (logo, colors, fonts)
- [ ] Add sounds for every move
- [x] Pause button
- [ ] Drag instead of choosing
- [x] Timer



## Credits

The concept for **Purrfect Match Game** was inspired by Candy Crush Saga.
