## Ninjutsu styling for October CMS ##
----------
A simple Gulp build for October CMS, utilizing awesome Stylus libraries for fast, powerful ninja-like development.

## Install ##
----------
Clone or download into a October CMS theme and run

    npm install --save

## Methodology ##
----------
The workflow is borrowed heavily from [Roots](https://github.com/jenius/roots), a static site compiler which features Jade and Stylus out of the box. I love Roots and use it often... but when a project requires the use of a CMS; [October CMS](http://https://octobercms.com/) is my go-to.

Missing the functionality of Roots while working on October CMS sites has brought me to make this Gulp build. This build is only focused on Stylus, because I'm unsure how Jade would work with October CMS. I may add Jade support down the road.

### Stylus! ###
----------
The same workflow from Roots, these libraries make you feel like a CSS ninja.

 - [Lost Grid](https://github.com/peterramsing/lost)
 Like an 'Autoprefixer' for grids. Powerful and easy to use.
 - [Autoprefixer](https://github.com/postcss/autoprefixer)
 Makes sure your CSS jives correctly in all browsers.
 - [Axis](https://github.com/jenius/axis)
 CSS library built on top of Stylus.
 - [Rupture](https://github.com/jenius/rupture)
 Media Queries made simple.
 - [LiveReload](https://github.com/vohof/gulp-livereload)
 Live updates in the browser, without refreshing.

### Usage ###
----------
Running the command `gulp` in the installed directory will activate the default stream which:
- Watches over your Stylus and HTML for changes
- Compiles
- Updates the browser automatically
