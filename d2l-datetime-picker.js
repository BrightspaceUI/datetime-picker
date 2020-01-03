/**
`d2l-datetime-picker`
Accessible, Localized Date and Time Picker Input Element

@demo demo/index.html
*/

import '@polymer/polymer/polymer-legacy.js';

import 'd2l-button/d2l-button-icon.js';
import 'd2l-date-picker/d2l-date-picker.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-offscreen/d2l-offscreen.js';
import 'd2l-time-picker/d2l-time-picker.js';
import '@polymer/iron-input/iron-input.js';
import './localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = /*html*/`<dom-module id="d2l-datetime-picker">
	<template strip-whitespace="">
		<style include="d2l-offscreen-shared-styles">
			:host {
				display: inline-flex;
				align-items: flex-start;
				flex-wrap: wrap;

				/* For flex/position to work correctly in IE11, the max-width needs to be set */
				position: relative;
				max-width: calc(14.75rem + 34px);
				width: 100%;

				--d2l-datetime-picker-label-width: 3rem;
				--d2l-datetime-picker-label-min-width: 2rem;
				--d2l-datetime-picker-label-padding: 20px;

				--d2l-date-picker-label: {
					@apply --d2l-offscreen;
				};
			}

			d2l-date-picker {
				width: 7rem;
			}

			.clear-button-container {
				margin-right: 34px;

				@apply --d2l-datetime-picker-clear-button-container;
			}

			:host(:dir(rtl)) .clear-button-container {
				margin-right: 0;
				margin-left: 34px;
			}

			.clear-button {
				position: absolute;
				top: 1.9rem;
			}

			:host([hide-label]) .clear-button {
				top: 0.2rem;
			}

			.clear-button,
			.clear-button button {
				@apply --d2l-datetime-picker-clear-button;
			}

			.clear-button button {
				height: 2.4rem;
			}

			:host([has-date]) d2l-date-picker {
				padding-right: 1rem;
				padding-bottom: 20px;
			}

			:host(:dir(rtl)):host([has-date]) d2l-date-picker {
				padding-right: 0;
				padding-left: 1rem;
			}

			/* shadyDOM workaround */
			:host(:dir(rtl))[has-date] d2l-date-picker {
				padding-right: 0;
				padding-left: 1rem;
			}

			d2l-time-picker {
				display: inline-flex;
			}

			.time-clear-container {
				display: flex;
				flex: 1 0 auto;
			}

			.d2l-time-picker-container {
				flex: 1 0 6rem;
				max-width: 7rem;
				padding-right: 0.75rem;
			}

			.d2l-date-picker-container {
				flex: 1 1 auto;
			}

			:host(:dir(rtl)) .d2l-time-picker-container {
				padding-left: 0.75rem;
				padding-right: 0;
			}

			.d2l-date-picker-container,
			.d2l-time-picker-container {
				display: inline-flex;
				flex-direction: column;
			}

			label {
				color: var(--d2l-color-ferrite);
				cursor: default;
				display: block;
				font-family: inherit;
				font-size: 0.7rem;
				font-weight: normal;
				line-height: 0.7rem;
				margin: 0 0 1rem 0;
				flex: 0 1 var(--d2l-datetime-picker-label-width);
				max-width: var(--d2l-datetime-picker-label-width);
				min-width: var(--d2l-datetime-picker-label-min-width);
				box-sizing: border-box;
				max-height: 0.7rem;
				@apply --d2l-datetime-picker-label;
			}

			:host([hide-label]) label {
				display: none;
			}

			@media (max-width: 615px), (max-device-width: 960px) {
				label {
					font-size: 0.6rem;
					padding-right: var(--d2l-datetime-picker-label-padding);
					text-align: right;
					@apply --d2l-datetime-picker-label-mobile;
				}

				:host(:dir(rtl)) label {
					padding-right: 0;
					padding-left: var(--d2l-datetime-picker-label-padding);
					@apply --d2l-datetime-picker-label-mobile-rtl;
				}

				:host(:not([hide-label])) .d2l-date-picker-container,
				:host(:not([hide-label])) .d2l-time-picker-container {
					flex-direction: row;
					align-items: baseline;
				}

				:host(:not([hide-label])) .d2l-time-picker-container {
					max-width: calc(7rem + var(--d2l-datetime-picker-label-width));
				}

				:host(:not([hide-label])) .clear-button {
					top: 0.2rem;
				}
			}

		</style>
		<div class="d2l-date-picker-container">
			<label aria-hidden="true" role="presentation">[[_dateLabel]]</label>
			<d2l-date-picker
				value="{{date}}"
				placeholder="[[placeholder]]"
				label="[[_dateLabel]]"
				min="[[min]]"
				max="[[max]]">
			</d2l-date-picker>
		</div>

		<template is="dom-if" if="{{_showTime(date, alwaysShowTime)}}">
			<div class="time-clear-container">
				<div class="d2l-time-picker-container">
					<label aria-hidden="true" role="presentation">{{_timeLabel}}</label>
					<d2l-time-picker
						label="[[_timeLabel]]"
						timezone="[[timezoneName]]"
						hours="{{hours}}"
						minutes="{{minutes}}"
						boundary="[[boundary]]">
					</d2l-time-picker>
				</div>
				<div class="clear-button-container">
					<d2l-button-icon
						class="clear-button"
						icon="d2l-tier1:close-small"
						on-click="clear"
						text="[[localize('clear')]]">
					</d2l-button-icon>
				</div>
			</div>
		</template>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-datetime-picker',

	behaviors: [
		window.D2L.PolymerBehaviors.DateTimePicker.LocalizeBehavior
	],

	properties: {
		hours: {
			type: Number,
			notify: true,
			value: 23
		},
		minutes: {
			type: Number,
			notify: true,
			value: 59
		},
		timezoneName: {
			type: String,
			value: function() {
				return this.getTimezone() && this.getTimezone().name;
			}
		},
		hasDate: {
			type: Boolean,
			reflectToAttribute: true,
			computed: '_computeHasDate(datetime)'
		},
		date: {
			type: String,
			notify: true,
			value: ''
		},
		datetime: {
			type: Object,
			notify: true,
			observer: '_dateTimeChanged'
		},
		boundary: Object,
		placeholder: String,
		dateLabel: {
			type: String,
			value: ''
		},
		_dateLabel: {
			type: String,
			computed: '_computeDateLabel(dateLabel, localize)'
		},
		timeLabel: {
			type: String,
			value: ''
		},
		_timeLabel: {
			type: String,
			computed: '_computeTimeLabel(timeLabel, localize)'
		},
		hideLabel: {
			type: Boolean,
			reflectToAttribute: true
		},
		alwaysShowTime: {
			type: Boolean,
			value: false
		},
		min: {
			type: String
		},
		max: {
			type: String
		}
	},

	observers: [
		'_dateAndTimeChanged(date, hours, minutes)'
	],

	clear: function() {
		this.datetime = null;
		this.fire('d2l-datetime-picker-datetime-cleared');
	},

	_dateTimeChanged: function(datetime) {
		if (!datetime) {
			this.date = '';
			return;
		}
		datetime = moment.tz(datetime, this.getTimezone() && this.getTimezone().identifier);
		if (!datetime.isValid()) {
			return;
		}
		this._dontUpdateDateTime = true;
		this.date = datetime.format('YYYY-MM-DD');
		this.hours = datetime.hours();
		this.minutes = datetime.minutes();
		this._dontUpdateDateTime = false;
		this.fire('d2l-datetime-picker-datetime-changed', datetime);
	},

	_dateAndTimeChanged: function() {
		if (this._dontUpdateDateTime) {
			return;
		}
		if (!this.date) {
			this.datetime = null;
			return;
		}
		var datetime;
		try {
			datetime = moment.tz(this.date, this.getTimezone() && this.getTimezone().identifier);
			if (!datetime.isValid()) {
				return;
			}
		} catch (e) {
			return;
		}
		datetime.hours(this.hours);
		datetime.minutes(this.minutes);
		this.datetime = datetime;
	},

	_computeDateLabel: function(dateLabel, localize) {
		return dateLabel ? dateLabel : localize('datepicker');
	},

	_computeTimeLabel: function(timeLabel, localize) {
		return timeLabel ? timeLabel : localize('timepicker');
	},

	_computeHasDate: function(datetime) {
		return !!datetime;
	},

	_showTime: function(date, alwaysShowTime) {
		return alwaysShowTime || date;
	}
});
