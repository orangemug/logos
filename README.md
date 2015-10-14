# logos
This is a fork of the amazing <https://github.com/gilbarbara/logos>, which adds

 * `package.json` to make it npm installable
 * css so you can treat it like an icon set (see [css/logos.css](css/logos.css))

A collection of 600+ svg vector logos. The logos are optimized (removed duplicated paths / excessive groups / empty defs, linting, etc). Almost 100 logos were recreated from rastered images #vectorized.


## Install
Install into your project

    npm install git://github.com/teamguideio/logos.git --save

It is expected that your webserver has the a static directory referenced under `/public` where you should add the following symlinks.

    public/
    ├── css
    │   └── logos -> ../../node_modules/logos/css
    └── images
        └── logos -> ../../node_modules/logos/logos

Then in your html add the stylesheet

    <link rel="stylesheet" type="text/css" href="/public/css/logos/logos.css">

Then you can use the icons like so

    <div class="logos logos-twitter"></div>


## Contributing
Please **don't** edit any icons in this repo, instead make a pull request to <https://github.com/gilbarbara/logos>. See [contributing section](https://github.com/gilbarbara/logos#contributing) for details.

*All logos appearing on the site are the property of their respective owners.*
