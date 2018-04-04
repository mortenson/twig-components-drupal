Twig Components
================

About this module
------------------
This module lets you use Twig Components with Drupal.

Installation
-------------

1. Require this module with Composer, or otherwise ensure that
"mortenson/twig-components-ssr" is installed via Composer on your site.
2. Install the @webcomponents/webcomponentsjs and twig NPM packages and copy
them to /libraries. You can also run the "./scripts/copyfiles.sh" script to do
this for you automatically.
3. Install the Twig Components module

Features
---------

1. A plugin-based system for discovering and defining Twig Components
2. Server side rendering of Twig Components in PHP (yes, really)
3. Lazy-loading of Twig Component libraries - only components found in the
response have their Javascript loaded

Example module
---------------

For an example of how Twig Components can be defined and used, install the
"Twig Components Example" sub-module. This module provides the "say-hello"
Twig Component, which can be used by writing HTML like
&lt;say-hello name="World"&gt;&lt;/say-hello&gt;.

What is a Twig Component?
--------------------------

A Twig Component is a Web Component that uses Twig.

This module expects that all Twig Components extend the base class provided by
the twig-components NPM package, and are transpiled to ES5 so that older
browsers can still be supported.

What are Web Components?
-------------------------

Web Components are a combination of two main W3C standards:

1. Custom Elements: The ability to define new DOM elements that behave the
same as native DOM elements. Many web frameworks also allow you to use custom
tags, but these were never recognized by the browser as fully-functioning DOM
elements.
2. Shadow DOM: The ability to define a new document root attached to a DOM
element. This document root is encapsulated from the parent document, which
means that other styles and scripts cannot leak into Web Component. No more
BEM classes!

For a good introduction to these standards, see
https://developers.google.com/web/fundamentals/web-components

Why Twig Components?
---------------------

There's a large portion of Drupal 8 frontend developers who want to use modern
Javascript, and are already using Twig to generate HTML in the backend.

Some are also experimenting with design systems that enforce componentization,
like Atom Design.

Twig Components are a way to combine the Twig/CSS/JS you probably already have
into a re-usable, standards compliant Web Component.

Twig Components fit nicely with Drupal, but can work with other CMSes and
headless applications as well. One frontend team can write a set of components
and re-use them across multiple projects and platforms. That includes
Wordpress, React, Vue.js, Angular, and even static HTML. This benefit comes
with every Web Component implementation, so even if you don't like Twig
Components you should really give Polymer/StencilJS/SkateJS a chance.
