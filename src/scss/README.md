# scss
Everything here is merely a guideline. You are free to add you own personality to it, i.e. rename folders, files, use your own structure and etc. Any suggestions, feedback, adjustments are very welcome.  

### Goal:
* Standardize scss dev
* Best practices

### Rules
1. Using BEM: http://getbem.com/introduction/

# Structure
```
core/
    _fonts.scss
    _sanitize.scss
    ...
    
settings/
    _breakpoints.scss
    _colors.scss
    _sizing.scss
    _typography.scss
    ...
    
helpers/
    functions/
    keyframes/
    layout/
    mixins/
    
elements/
    _body.scss
    _heading.scss
    _a.scss
    _p.scss
    ...
    
components/
    block/
        _block-picture.scss
        _block-quote.scss
    _nav.scss
    _slider.scss
    ...

main.scss
```

#### core/
Project's stand-alone files.
* `_fonts.scss` - fonts declaration only - [FAQ - 1](#faq)

#### settings/
Project's variables.
* `_colors.scss` - define colors palette (helps avoid multiple similar colors)
* `_sizes.scss` - spacings, gutters, widths...
* `_icons.scss` - if you're using an icon font - https://icomoon.io/app/#/
* `_easings.scss` - https://matthewlein.com/ceaser/
* `_breakpoints.scss` - break the points
* `_typography.scss` - default font-family, size, line-height...
* `_z-index.scss` - keep track of `z-index`

#### helpers/
Project's mixins, functions, helpers. Introducing a new memeber - `layout/`.  
Try creating separate files for each mixin / function / keyframe - easy to `cmd + p`, files less messy.
* `functions/` - like you are going to use some, riiight :)
* `keyframes/` - keyframe animations storage
* `layout/` - presentational mixins (doesn't calculate anything nor accepts any arguments). Returns raw css. Used to populate repeatble styles.
* `mixins/` - classic mixins

#### elements/
Project's `<tag>` styling. 
* File name should match `<tag>` inside (where possible)
* Example: `_body.scss`, `_a.scss`, `_p.scss`

#### components/
Project's `.class` styling. 
* Class naming pattern - `.identifier-specifics`
* `identifier` - primary description (form, button, slider...)
* `specifics` - login, default, home, special...
* File name should match class inside
* Use singular file naming (instead of `_buttons.scss` use `_button.scss`)
* Group up similar components into folders (like `slider/slider-home`, `slider/slider-simple`)

# Comments
```
/* Comment
------------------------------------------------- */
```
```
//--- Comment
```
```
// Comment
```
```
/*  Description: 
    I once had a pie in the tavern of England with a fair maiden named John...
    1. There is no tavern of England
    2. John is not a woman
*/
```

# Resources

##### Must read:
* https://medium.com/@cathy_dutton/surviving-css-be306ef3de6d - summaries every bad practice in front-end dev right now.

##### Packages:
* Name That Color - sublime package to generate a color name (when you ran out of imagination :)

##### General:
* https://github.com/angular/material2/tree/master/src/lib - material design 2 - example for /components/ folder structure (just naming example, dont looks at .js, .html inside)
* https://git.gladeye.org/slingshot/slingshot-www/blob/docs/CONTRIBUTING.md - contribution guidelines summary
* https://github.com/necolas/normalize.css/ - Normalize file
* http://patternlab.io/ - good inspiration / ideas on how to breakdown your code on smaller components

##### Fonts:
* https://css-tricks.com/snippets/css/using-font-face/ - @font-face usage.

##### CSS Animations:
* https://matthewlein.com/ceaser/ - css easings
* https://github.com/daneden/animate.css - css animation library

##### SVG:
* https://css-tricks.com/icon-fonts-vs-svg/ - inline svg: icon fonts vs inline svg
* https://jakearchibald.github.io/svgomg/ - svg modifying / minifying
* https://github.com/blog/2112-delivering-octicons-with-svg - inline svg - GitHub
* https://css-tricks.com/svg-sprites-use-better-icon-fonts/ - SVG sprites: starting article
* https://css-tricks.com/svg-symbol-good-choice-icons/ - SVG sprites:using `symbol`
* https://github.com/google/material-design-icons/tree/master/sprites - SVG sprites: material design usage
* https://github.com/w0rm/gulp-svgstore - SVG sprites: combine svg files into one with `<symbol>` elements.
* https://www.smashingmagazine.com/2016/05/safari-svg-sprite-bug/ - SVG sprites: bugs 


# FAQ
> _fonts.scss is kinda random to sit in the core? Any reason for doing that? I would have it in my settings folder instead.

Setting folder shouldn't output any css. For consistency sake, keep `settings/` variables only.

# Credits
Special thanks to: @mitch, @daniel, @jamesh, @ken, @ben, @sophielee from Gladeye


