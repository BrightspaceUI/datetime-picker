/* global polymerTests, LocalBrowserFactory, SauceBrowserFactory, importClass, org, Thread */
/* eslint no-invalid-this: 0 */
'use strict';

importClass(org.openqa.selenium.Keys);

var browsers = {
	chrome: new LocalBrowserFactory({ browser: 'chrome', size: '768x768' }),
	chromeWindows: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'WIN10',
		size: '1400x900'
	}),
	/*firefoxWindows: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'WIN10',
		size: '1400x900'
	}),
	ie11Windows: new SauceBrowserFactory({
		browser: 'internet explorer',
		version: '11',
		platform: 'WIN10',
		size: '1400x900'
	}),
	edgeWindows: new SauceBrowserFactory({
		browser: 'microsoftedge',
		platform: 'WIN10',
		size: '1400x900'
	}),
	chromeMac: new SauceBrowserFactory({
		browser: 'Chrome',
		platform: 'SIERRA',
		size: '1400x900',
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	}),
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	})*/
};

var mainlineEndpoint = 'http://localhost:8081/components/d2l-datetime-picker/demo/galen.html';
var oneDotXEndpoint = 'http://localhost:8000/components/d2l-datetime-picker/demo/galen.html';

var rtlScript = 'document.documentElement.setAttribute("dir", "rtl");';
var getInput = 'document.querySelector("d2l-datetime-picker").$$("d2l-date-picker").$$(".d2l-input")';
var inputClickScript = getInput + '.dispatchEvent(new MouseEvent("click"))';
var typeDateScript = getInput + '.value= "01/30/1990"';
var hitEnterScript = getInput + '.dispatchEvent(new KeyboardEvent("keydown", {bubbles: true, cancelable: true, key:"Enter", char:"Enter", keyCode: 13}))';

polymerTests(browsers, function(test) {
	function testHelper(rtl, shadow, open, mobile, mainline) {
		var name = 'd2l-datetime-picker';
		var queryParams = [];
		name = rtl ? name + '-rtl' : name;
		name = shadow ? name + '-shadow' : name;
		name = open ? name + '-open' : name;
		name = mobile ? name + '-mobile' : name;

		rtl && queryParams.push('dir=rtl');
		shadow && queryParams.push('dom=shadow');
		mobile && queryParams.push('width=280px');

		var testEndpoint = mainline ? mainlineEndpoint : oneDotXEndpoint;
		if (queryParams.length) {
			testEndpoint += '?' + queryParams.join('&');
		}
		var tags = [];
		rtl && tags.push('rtl') || tags.push('ltr');
		open && tags.push('open') || tags.push('closed');
		mobile && tags.push('mobile') || tags.push('desktop');

		var cb;
		if (open) {
			cb = function(opts, cb) {
				if (rtl) {
					opts.driver.executeScript(rtlScript);
				}
				Thread.sleep(50);
				opts.driver.executeScript(inputClickScript);
				Thread.sleep(50);
				opts.driver.executeScript(typeDateScript);
				Thread.sleep(50);
				opts.driver.executeScript(hitEnterScript);
				Thread.sleep(50);
				cb();
			};
		}

		var testFunc = shadow ? test.shadow : test;

		testFunc(name, {
			endpoint: testEndpoint,
			spec: shadow ? 'test/acceptance/datetimepicker.shadow.gspec' : 'test/acceptance/datetimepicker.gspec',
			size: mobile ? '375x667' : '1024x768',
			tags: tags
		}, cb);
	}

	function runTests(mainline) {
		testHelper(false, false, false, false, mainline);
		testHelper(false, false, true, false, mainline);
		testHelper(true, false, false, false, mainline);
		testHelper(true, false, true, false, mainline);
		testHelper(false, true, false, false, mainline);
		testHelper(false, true, true, false, mainline);
		testHelper(true, true, false, false, mainline);
		testHelper(true, true, true, false, mainline);
		testHelper(false, false, false, true, mainline);
		testHelper(false, false, true, true, mainline);
		testHelper(true, false, false, true, mainline);
		testHelper(true, false, true, true, mainline);
	}

	[false, true].forEach(runTests);
});
