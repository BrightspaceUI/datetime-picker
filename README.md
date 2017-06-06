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
<d2l-datetime-picker
	locale="en"
	overrides="[[overrides]]"
	timezone="Canada-Toronto"
	datetime="Wed Dec 31 1969 19:00:00 GMT-0500 (EST)",
	boundary='{"below":240}'
></d2l-datetime-picker>
```

## Running Tests

```
$ polymer test
```

Your application is already set up to be tested via [web-component-tester](https://github.com/Polymer/web-component-tester). Run `polymer test` to run your application's test suite locally.
