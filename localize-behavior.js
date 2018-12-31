import '@polymer/polymer/polymer-legacy.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.DateTimePicker = window.D2L.PolymerBehaviors.DateTimePicker || {};
/** @polymerBehavior D2L.PolymerBehaviors.DateTimePicker.LocalizeBehaviorImpl */
D2L.PolymerBehaviors.DateTimePicker.LocalizeBehaviorImpl = {
	properties: {
		locale: {
			type: String,
			value: function() {
				var locale = document.documentElement.lang
					|| document.documentElement.getAttribute('data-lang-default')
					|| 'en-us';
				return locale.toLowerCase();
			}
		},
		resources: {
			value: function() {
				return {
					'en': {
						datepicker: 'Date Picker',
						timepicker: 'Time Picker',
						clear: 'Clear Date/Time'
					},
					'zh-TW': {
						datepicker: '日期選擇器',
						timepicker: '時間選擇器',
						clear: '清除日期/時間'
					},
					'zh-CN': {
						datepicker: '日期选取器',
						timepicker: '时间选取器',
						clear: '清除日期/时间'
					},
					'tr': {
						datepicker: 'Tarih Seçici',
						timepicker: 'Saat Seçici',
						clear: 'Tarihi/Saati Temizle'
					},
					'sv': {
						datepicker: 'Datumväljare',
						timepicker: 'Timväljare',
						clear: 'Ta bort datum/tid'
					},
					'pt': {
						datepicker: 'Seletor de Data',
						timepicker: 'Seletor de Hora',
						clear: 'Limpar Data/Hora'
					},
					'nl': {
						datepicker: 'Datumkiezer',
						timepicker: 'Tijdkiezer',
						clear: 'Datum/tijd wissen'
					},
					'ko': {
						datepicker: '날짜 선택기',
						timepicker: '시간 선택기',
						clear: '날짜/시간 지우기'
					},
					'ja': {
						datepicker: '日付ピッカー',
						timepicker: '時刻ピッカー',
						clear: '日付と時刻のクリア'
					},
					'fr': {
						datepicker: 'Sélecteur de date',
						timepicker: 'Sélecteur d’heure',
						clear: 'Effacer la date/l\'heure :'
					},
					'fi': {
						datepicker: 'Päivämäärän valitsin',
						timepicker: 'Kellonajan valitsin',
						clear: 'Tyhjennä päivämäärä/kellonaika'
					},
					'es': {
						datepicker: 'Selector de fecha',
						timepicker: 'Selector de hora',
						clear: 'Borrar fecha/hora'
					},
					'de': {
						datepicker: 'Datumsauswahl',
						timepicker: 'Zeitauswahl',
						clear: 'Datum/Uhrzeit löschen'
					},
					'da': {
						datepicker: 'Datovælger',
						timepicker: 'Tidsvælger',
						clear: 'Ryd dato/tid'
					},
					'ar': {
						datepicker: 'منتقي التاريخ',
						timepicker: 'منتقي الوقت',
						clear: 'مسح التاريخ/الوقت'
					}
				};
			}
		}
	}
};
/** @polymerBehavior */
window.D2L.PolymerBehaviors.DateTimePicker.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.DateTimePicker.LocalizeBehaviorImpl
];
