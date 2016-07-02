# ASAP_s 

*DOCUMENTATION IN PROGRESS*

## Features

## Prerequisite
* Requires node.js, gulp
* Requires local WordPress environment

## Installation
Clone into Themes directory

    git clone http://github.com/geekster909/asap_s-gulp.git <project-name>

Navigate to theme directory and install Node Packages

    npm install


## Configuration
1. 5-step find and replace on the name in all the templates
    * Search for: `'asap_s'` and replace with: `'<project-name>'`
    * Search for: `asap_s_` and replace with: `<project-name>_`
    * Search for: `Text Domain: asap_s` and replace with: `Text Domain: <project-name>` in style.css.
    * Search for: <code>&nbsp;asap_s</code> and replace with: <code>&nbsp;<project-name></code>
    * Search for: `asap_s-` and replace with: `<project-name>-`
    * Search for: `/asap_s` and replace with: `/<project-name>-`
2. Update BrowserSync proxy and port
    
        proxy: 'local.<project-name>.com',
        port: 3000
    
    
## Usage

`gulp` for developing


##### CSS Workflow
* assets/styles/scss/*.scss => dist/styles/styles.css 
* assets/styles/vendor/*.css => dist/styles/vendor.css

##### JavaScript Workflow
* assets/scripts/main.js => dist/scripts/main.min.js
* assets/scripts/vendor/*.js => dist/scripts/vendor.min.js
* assets/scripts/*.js (!main.js) => dist/scripts/*.min.js

##### Image Workflow
* assets/images/* => dist/images/
   

## Images

all images in /assets/images/
    - will get minified
    
## BowerSync

set local url

## Watching

scss changes
js changes
