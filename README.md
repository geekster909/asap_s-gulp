# ASAP_s 

*DOCUMENTATION IN PROGRESS*

## Features

## Prerequisite
* Requires node.js, grunt-cli, and bower
* Requires local WordPress environment

## Installation
Clone into Themes directory

    git clone http://github.co/stton/asap_s.git <project-name>

Navigate to theme directory and install Node Packages

    npm install

Install Bower packages
    
    bower install
    
Navigate to 'assets/styles/scss/' and install bower packages

    bower install


## Configuration
1. 5-step find and replace on the name in all the templates
    * Search for: `'asap_s'` and replace with: `'<project-name>'`
    * Search for: `asap_s_` and replace with: `<project-name>_`
    * Search for: `Text Domain: asap_s` and replace with: `Text Domain: <project-name>` in style.css.
    * Search for: <code>&nbsp;asap_s</code> and replace with: <code>&nbsp;<project-name></code>
    * Search for: `asap_s-` and replace with: `<project-name>-`
2. Update BrowserSync proxy and port
    
        proxy: 'local.<project-name>.com',
        port: 8080
    
    
## Usage

`grunt` for developing

`grunt images` for image processing

`grunt build` for production


##### CSS Workflow
* assets/styles/scss/*.scss => dist/styles/styles.css 
* assets/styles/vendor/*.css => dist/styles/vendor.css

##### JavaScript Workflow
* assets/scripts/main.js => dist/scripts/main.min.js
* assets/scripts/vendor/*.js => dist/scripts/vendor.min.js
* assets/scripts/*.js (!main.js) => dist/scripts/*.min.js

##### Image Workflow
* assets/images/* => dist/images/





##### Installing a bower package
*normalize.css is already included by default*

1. Navigate to theme directory

         bower install --save normalize.css
2. Open Gruntfile.js and update bowercopy

        files : {
            'styles/vendor/' : 'normalize.css/normalize.css'                                 
        }
    *This will copy normalize.css from bower_componenets and put it inside our styles/vendor* directory*










        



















    







    

## Images

all images in /assets/images/
    - will get minified
    
svg's in /assets/images/
    - will get minified to /assets/images/svgmin
    - grunticon ran on min svg's to dist/
    
## BowerSync

set local url

## Watching

scss changes
js changes
