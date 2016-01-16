# Life Letters theme

The Life Letters theme, in one convenient package. Includes:

- modified bootstrap theme
- fonts
- mixins
- an example file

## Usage

Include the `_include.scss` file in your project. 

If you are using a Grunt build, add the following to the copy
task to handle the font files:

    {
      expand: true,
      cwd: '.',
      src: 'bower_components/theme/fonts/*',
      dest: '<%= yeoman.dist %>'
    }



## Development

Install

    npm install
    bower install

Build the CSS

    grunt

Run server

    node server.js