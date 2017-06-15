/* global polymerTests, LocalBrowserFactory, SauceBrowserFactory, importClass, org, Keys */
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
	}),*/
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
		/* crashes during screenshot command on > 2.24
		 *			https://bugs.chromium.org/p/chromedriver/issues/detail?id=1770# */
		desiredCapabilities: {
			chromedriverVersion: '2.24'
		}
	}),
	safariMac: new SauceBrowserFactory({
		browser: 'Safari',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	})/*,
	firefoxMac: new SauceBrowserFactory({
		browser: 'Firefox',
		platform: 'EL_CAPITAN',
		size: '1400x900'
	})*/
};

var endpoint = 'http://localhost:8080/components/d2l-datetime-picker/demo/galen.html';

var DateTimePickerDemoPage = $page('Date Time Picker Demo Page', {
	input: 'd2l-datetime-picker .d2l-input'
});

var DateTimePickerDemoShadowPage = $page('Date Time Picker Demo Page', {
	input: 'd2l-datetime-picker /deep/ .d2l-input'
});

polymerTests(browsers, function(test) {
	function testHelper(rtl, shadow, open, mobile) {
		var name = 'd2l-datetime-picker';
		var queryParams = [];
		name = rtl ? name + '-rtl' : name;
		name = shadow ? name + '-shadow' : name;
		name = open ? name + '-open' : name;
		name = mobile ? name + '-mobile' : name;

		rtl && queryParams.push('dir=rtl');
		shadow && queryParams.push('dom=shadow');
		mobile && queryParams.push('width=280px');

		var testEndpoint = endpoint;
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
				var timepickerdemopage = shadow ? new DateTimePickerDemoShadowPage(opts.driver) : new DateTimePickerDemoPage(opts.driver);
				timepickerdemopage.input.click();
				timepickerdemopage.input.typeText('01/30/1990');
				timepickerdemopage.input.typeText(Keys.ENTER);
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

	testHelper(false, false, false, false);
	testHelper(false, false, true, false);
	testHelper(true, false, false, false);
	testHelper(true, false, true, false);
	testHelper(false, true, false, false);
	testHelper(false, true, true, false);
	testHelper(true, true, false, false);
	testHelper(true, true, true, false);
	testHelper(false, false, false, true);
	testHelper(false, false, true, true);
	testHelper(true, false, false, true);
	testHelper(true, false, true, true);
});
