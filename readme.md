# CSS Framework

This framework is intended to be used as a base to build UI components as well as to help create the overall look and feel of your application or website. The framework is documented using Storybook.

## Goals

### No Dependencies

No 3rd party frameworks or external dependencies are used. This gives complete control over the styles in a clean way.

### Modular Architecture

This frameworks aims to be modular in way that features from one module can be utilized in another module. Also, it aims to enable developers to choose which module they want to use in their project or javascript components. Each module is broken into the following:

* variables
* functions
* mixins
* theme
* module (includes variables, functions, and mixins)
  * module can be used in other modules
* style (includes the module, structural styles, and theme)

### Scalable Architecture

Scalability comes into play when modules are used in other modules. As we create more modules the architecture becomes increasingly scalable.

### Easy to Maintain

Ease of maintenance is achieved by adhering to a strict modular architecture and following single responsibility principle.


## Design Systems

### Fluid Typographic Scale System

A typographic scale is used to size headings and body copy. The text size is fluid and scales based on the screen width.

### Fluid Vertical Rhythm System

This framework incorporates a vertical rhythm. Having a vertical rhythm brings consistency on how elements are spaced. Evenly spaced elements are pleasing to the eye.

### Light and Dark Theme System

A robust light and dark theme system that supports multiple light and dark themes is included.

### Utility Helpers

Utility helpers are convenience functions or mixins that help you create drop shadows, transitions, media queries, color tints, color shades, color tones, fluid typography and vertical rhythm, and finally some scss language specific functions to strip units and perform a deep map-get.
