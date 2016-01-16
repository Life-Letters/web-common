# View HTML Angular directive

View the HTML for a given page element. Helps support code reuse and consistent
formatting. Ideal for theming and sample pages. 

Inspired by the [Bootswatch](http://bootswatch.com/) theming website.



# Install and usage

Install via bower:

    bower install torbensko/angular-view-html

Add `view-html` to the element you want to reveal the HTML of:

    <div view-html>
      <div>reusable html component</div>
    </div>


## Development

Install

    npm install
    bower install

Build the CSS

    grunt

Run server

    node server.js