> Deprecated: A new datetime input (that does not rely on third-party components) should be created and added to [BrightspaceUI/core](https://github.com/BrightspaceUI/core) instead.

# \<d2l-datetime-picker\>

[![Build Status](https://travis-ci.org/BrightspaceUI/datetime-picker.svg?branch=master)](https://travis-ci.org/BrightspaceUI/datetime-picker)

Accessible, Localized Date-Time Picker Element

## Install the Polymer-CLI

First, make sure you have the [Polymer CLI](https://www.npmjs.com/package/polymer-cli) installed. Then run `polymer serve` to serve your element locally.

## Viewing Your Element

```
$ polymer serve
```

## Usage

```html
<script type="text/javascript" src="https://s.brightspace.com/lib/moment.js/2.15.2/moment.min.js"></script>
<script type="text/javascript" src="https://s.brightspace.com/lib/moment-timezone/0.5.10/moment-timezone-with-data.min.js"></script>
<d2l-datetime-picker
	timezoneName="Canada-Toronto"
	datetime="Wed Dec 31 1969 19:00:00 GMT-0500 (EST)",
	boundary='{"below":240}'
></d2l-datetime-picker>
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.

## Versioning & Releasing

All version changes should obey [semantic versioning](https://semver.org/) rules.

Include either `[increment major]`, `[increment minor]` or `[increment patch]` in your merge commit message to automatically increment the `package.json` version and create a tag during the next build.
