var IPTScripts = IPTScripts ? IPTScripts : function () {
// private data members
var EventsInitialized = false;
var TwitterInitialized = false;
var ThermoInitialized = false;

// public method members
return {
	// Front Page Calendar
	InitializeCalendarEvents: function () {
		if (EventsInitialized == false) {
			EventsInitialized = true;
			try {
				if (typeof jQuery != 'undefined') {
					jQuery(document).ready(function () {
						var adx = "Events are temporarily unavailable. Please check back later.";
						jQuery.ajax({
							dataType: 'script',
							url: 'http://209.87.171.14/EventListSyndicator.aspx?type=N&number=6&highlight=Y&adpid=6&nem=No+events+are+available+that+match+your+request&sortorder=ASC&ver=2.0&target=adx090958'
						});
						setTimeout(function () {
							if (typeof response == 'undefined') {
								jQuery('#adx090958').html(adx);
							}
						}, 5000);
					});
				} else {
					document.getElementById('adx090958').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.';
				}
			}
			catch (e) { }
		}
	}
, // break between functions
// Board Calendar
InitializeBoardCalendar: function () {
	if (EventsInitialized == false) {
		EventsInitialized = true;
		try {
			if (typeof jQuery != 'undefined') {
				jQuery(document).ready(function () {
					var adx="Events are temporarily unavailable. Please check back later.";
					jQuery.ajax({ dataType: 'script', url: 'http://209.87.171.14/EventListSyndicator.aspx?type=N&number=20&category=15-0&ics=Y&adpid=6&nem=No+events+are+available+that+match+your+request&sortorder=ASC&ver=2.0&target=adx091081'
				});setTimeout(function() {
					if(typeof response=='undefined'){
						jQuery('#adx091081').html(adx);
					}}, 5000);
			});
			} else { document.getElementById('adx091081').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.'; }
		}
		catch (e) { }
	}
}
, // break between functions
// Dr May Calendar
InitializeDrMayCalendar: function () {
	if (EventsInitialized == false) {
		EventsInitialized = true;
		try {
			if (typeof jQuery != 'undefined') {
				jQuery(document).ready(function () {
					var adx="Events are temporarily unavailable. Please check back later.";
					jQuery.ajax({ dataType: 'script', url: 'http://209.87.171.14/EventListSyndicator.aspx?type=N&number=5&category=15-0&adpid=6&nem=No+events+are+available+that+match+your+request&sortorder=ASC&ver=2.0&target=adx082707'
				});setTimeout(function() {
					if(typeof response=='undefined'){
						jQuery('#adx082707').html(adx);
					}}, 5000);
			});
			} else { 
				document.getElementById('adx082707').innerHTML = 'Events are temporarily unavailable because the jQuery library cannot be located.'; 
			}
		}
		catch (e) { }
	}
}
, // break between functions
// Dr May Twitter
InitializeDrMayTwitter: function () {
	if (TwitterInitialized == false) {
		TwitterInitialized = true;
		try {
			!function(d,s,id) {
				var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';
				if (!d.getElementById(id)) {
					js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";
					fjs.parentNode.insertBefore(js,fjs);
				}}
				(document,"script","twitter-wjs");
			}
		// }
		catch (e) { }
	}
}
, // break between functions
// Expanding List
InitializeExpandingList: function () {
	if (EventsInitialized == false) {
		EventsInitialized = true;
		try {
			$(document).ready(function () {
			// close all sections
			$(".ExpandingList ul").hide();
			// set click events for each list
			$(".ExpandingList .Heading").click(function (e) {
				$(e.target).parent().children("ul").slideToggle(500);
			});
		});
		}
		catch (e) { }
	}
}
, // break between functions
// Expanding Text
InitializeExpandingText: function () {
	if (EventsInitialized == false) {
		EventsInitialized = true;
		try {
			$(document).ready(function () {
				// close all sections
				$(".ExpandingText div").hide();
				$(".ExpandingText .Collapse").removeClass("Hidden");

				// set expand events
				$(".ExpandingText .Heading").click(function (e) {
					$(e.target).parent().children("div").slideToggle(500);
				});

				// set collapse events
				$(".ExpandingText .Collapse").click(function (e) {
					$(e.target).parent().children("div").slideToggle(500);
				});
			});
		}
		catch (e) { }
	}
}
, // break between functions
// Expanding Text
InitializeExpandingLinkText: function () {
	if (EventsInitialized == false) {
		EventsInitialized = true;
		try {
			$(document).ready(function() {
		        // start with hidden text
		        $("div.info-container").hide();
		        // reveal hidden text with button
		        $("a.showbtn").click(function() {
		        	$("div.info-container").show();
		        });
		        // hide text with button
		        $("a.hidebtn").click(function() {
		        	$("div.info-container").hide();
		        });
		    });
		}
		catch (e) { }
	}
}
, // break between functions
// Web Query Web Part Fix
InitializeWebQueryFix: function () {
	if (EventsInitialized == false) {
		EventsInitialized = true;
		try {
			$( document ).ready(function() {
				$( "div .groupheader" ).children().css( "background-color", "#E4E8F0" );
				$( "div .groupheader" ).children().css( "width", "80%" );
				$( "div .groupheader" ).children().css( "height", "25px" );
				$( ".groupheader  a[href]" ).css( "float", "right" );
			});
		}
		catch (e) { }
	}
}
, // break between functions
// AT&T Thermometer
InitializeThermometer: function () {
	if (ThermoInitialized == false) {
		ThermoInitialized = true;
		try {
			function formatCurrency(n, c, d, t) {
				"use strict";

				var s, i, j;

				c = isNaN(c = Math.abs(c)) ? 2 : c;
				d = d === undefined ? "." : d;
				t = t === undefined ? "," : t;

				s = n < 0 ? "-" : "";
				i = parseInt(n = Math.abs(+n || 0).toFixed(c), 10) + "";
				j = (j = i.length) > 3 ? j % 3 : 0;

				return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
			}


/**
 * Thermometer Progress meter.
 * This function will update the progress element in the "thermometer"
 * to the updated percentage.
 * If no parameters are passed in it will read them from the DOM
 *
 * @param {Number} goalAmount The Goal amount, this represents the 100% mark
 * @param {Number} progressAmount The progress amount is the current amount
 * @param {Boolean} animate Whether to animate the height or not
 *
 */
 function thermometer(goalAmount, progressAmount, animate) {
 	"use strict";

 	var $thermo = $("#thermometer"),
 	$progress = $(".progress", $thermo),
 	$goal = $(".goal", $thermo),
 	percentageAmount;

 	goalAmount = goalAmount || parseFloat( $goal.text() ),
 	progressAmount = progressAmount || parseFloat( $progress.text() ),
    percentageAmount =  Math.min( Math.round(progressAmount / goalAmount * 1000) / 10, 100); //make sure we have 1 decimal point

    //let's format the numbers and put them back in the DOM
    $goal.find(".amount").text( "$" + formatCurrency( goalAmount ) );
    $progress.find(".amount").text( "$" + formatCurrency( progressAmount ) );


    //let's set the progress indicator
    $progress.find(".amount").hide();
    if (animate !== false) {
    	$progress.animate({
    		"height": percentageAmount + "%"
    	}, 1200, function(){
    		$(this).find(".amount").fadeIn(500);
    	});
    }
    else {
    	$progress.css({
    		"height": percentageAmount + "%"
    	});
    	$progress.find(".amount").fadeIn(500);
    }
}

$(document).ready(function(){

    //call without the parameters to have it read from the DOM
    thermometer();
    // or with parameters if you want to update it using JavaScript.
    // you can update it live, and choose whether to show the animation
    // (which you might not if the updates are relatively small)
    //thermometer( 1000000, 425610, false );

});
}
catch (e) { }
}
}
}
// End of file
}(); 