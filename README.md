> Deprecated: A new datetime input (that does not rely on third-party components) should be created and added to [BrightspaceUI/inputs](https://github.com/BrightspaceUI/inputs) instead.

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
	locale="en"
	overrides="[[overrides]]"
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

## Versioning

Commits and PR merges to master will automatically do a minor version bump which will:
* Update the version in `package.json`
* Add a tag matching the new version
* Create a github release matching the new version

By using either **[increment major]** or **[increment patch]** notation inside your merge message, you can overwrite the default version upgrade of minor to the position of your choice.
