# pixGrab
Find tagged images on Instagram and save them in collections

## How to Play
[www.pixgrab.xyz][link]

[link]: www.pixgrab.xyz

![screenshot_1]

[screenshot_1]: http://res.cloudinary.com/danlau168/image/upload/v1448234137/ss1_copy_otbq9p.png

## Technology
Technology used
- Ruby on Rails
- JavaScript
- HTML5 Canvas
- jQuery

### Game
Object-oriented design using prototypical inheritance

### Dual Canvas and FPS
In order to keep the FPS high, two techniques are used. One is requestAnimationFrame(), which requests that the browser update the animation before the next repaint. Moreover, the background is rendered separately from the other images in its own context, providing for a smoother experience.

#### Enemy Movement AI
Enemies can detect the position of the user to modify shooting angle and give chase. Using Javascript's atan2 function, they modify their position based on where the user is. Their speeds are generated randomly upon creation, to ensure non-overlap.

#### Collision and proximity detection
There are collision and proximity detection algorithms for enemies, bullets, and ship. The velocity of objects in the game are affected upon impact with other objects, i.e. enemies move backward slightly when hit by bullets.

#### Assisted shooting
To solve the issue of exact shooting angles being required to hit the target, algorithmically assisted shooting increases accuracy within a shooting window. This means that when a bullet is within a certain distance of the enemy, the user's ship automatically shifts it's shooting angle to match with the position of the enemy on the grid.

### Backend
Though starting as a pure Javascript game, the project was migrated to Ruby on Rails and now stores high scores in the PostgreSQL database

### Frontend
Frontend is built using jQuery, HTML5 Canvas, and CSS.
