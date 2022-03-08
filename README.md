## add-js-css-from-root-v-4


# WHATS THIS ABOUT
In SPO my last Application Customizer stopped working for newly created sites.
They where made with SPFx 1.4.1.
So i "migrated" an SPFx 1.8.1 to be and Application Customizer.

Some technicals about how I made this work in my blog [Make App Customizer for 1.8.x](https://bresleveloper.blogspot.com/2022/03/spfx-make-application-customizer-for.html)

Also in my blog [How to create a machine for 2019](https://bresleveloper.blogspot.com/2021/05/setting-new-sp-dev-machine.html)

### Building the code

```bash
git clone the repo
npm i
npm i -g gulp
gulp
```

This package produces the following:

* lib/* - intermediate-stage commonjs build artifacts
* dist/* - the bundled script, along with other resources
* deploy/* - all resources which should be uploaded to a CDN.

### Build options

gulp clean - TODO
gulp test - TODO
gulp serve - TODO
gulp bundle - TODO
gulp package-solution - TODO


gulp build; gulp bundle --ship; gulp package-solution --ship;
