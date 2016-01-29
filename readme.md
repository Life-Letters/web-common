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


You can also alter where the fonts are stored using the following 
SASS variables:

    $theme-font-path: "/foobar/";
    $icon-font-path: "/foobar/";


When using Compass in your grunt script, make sure `bower_components`
is included via the `importPath`:

    compass: {
      dev: {
        options: {
          importPath: './bower_components',
          ...



## Development

Install

    npm install
    bower install

Build the CSS

    grunt

Run server

    node server.js