
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var menuItem1 = {};	// @menuItem
	var menuItem5 = {};	// @menuItem
	var menuItem4 = {};	// @menuItem
	var menuItem3 = {};	// @menuItem
	var menuItem2 = {};	// @menuItem
	var button4 = {};	// @button
	var button3 = {};	// @button
	var button2 = {};	// @button
	var button1 = {};	// @button
	var documentEvent = {};	// @document
// @endregion// @endlock


function escapeHTML (unsafe_str) {
	unsafe_str
  	.replace(/&/g, '&amp;')
   	.replace(/</g, '&lt;')
   	.replace(/>/g, '&gt;')
   	.replace(/\"/g, '&quot;')
   	.replace(/\'/g, '&#39;'); 
   	return unsafe_str;
}


// eventHandlers// @lock

	menuItem1.click = function menuItem1_click (event)// @startlock
	{// @endlock

	};// @lock

	menuItem5.click = function menuItem5_click (event)// @startlock
	{// @endlock
		$('#container4').html("");
		$$('richText12').show();
		$$('richText9').show();
		$$('richText10').show();
		$$('richText11').show();
		$$('richText13').show();
	};// @lock

	menuItem4.click = function menuItem4_click (event)// @startlock
	{// @endlock
		$('#container3').html("");
		$$('richText12').show();
		$$('richText9').show();
		$$('richText10').show();
		$$('richText11').show();
		$$('richText13').show();
	};// @lock

	menuItem3.click = function menuItem3_click (event)// @startlock
	{// @endlock
		$('#container2').html("");	
		$$('richText12').show();
		$$('richText9').show();
		$$('richText10').show();
		$$('richText11').show();
		$$('richText13').show();
	};// @lock

	menuItem2.click = function menuItem2_click (event)// @startlock
	{// @endlock
		$('#container13').html("");	
		$$('richText12').show();
		$$('richText9').show();
		$$('richText10').show();
		$$('richText11').show();
		$$('richText13').show();	
	};// @lock

	button4.click = function button4_click (event)// @startlock
	{// @endlock
		//Method 4. One Call to server class method
		var start3 = new Date();
		ds.City.getCities({
			onSuccess: function(event) {
				var myHTML = '';
				var myArray = event.result;
				myArray.forEach(function(elem) {
					myHTML += '<p>' + escapeHTML(elem.name) + '</p>';
				});
				var stop3 = new Date();
				var executionTime3 = stop3 - start3;
				$('#container4').html(myHTML);
				$$('richText11').setValue(executionTime3+ "ms");	
			}
		});
	};// @lock

	button3.click = function button3_click (event)// @startlock
	{// @endlock
		//Method 3. Loads all 497 cities. Only two calls to the server.
		var start2 = new Date();
		ds.City.all({orderBy:"name", onSuccess:function(event) {	
			event.entityCollection.toArray("name, ID", {
				onSuccess: function(ev) {
					var arr = ev.result;
					var myHTML = '';
					arr.forEach(function(elem) { 
						myHTML += '<p>' + escapeHTML(elem.name) + '</p>';
					});
					var stop2 = new Date();
					var executionTime2 = stop2 - start2;
					$('#container3').html(myHTML);
					$$('richText10').setValue(executionTime2 + "ms");	
				}
			});
		}});
	};// @lock

	button2.click = function button2_click (event)// @startlock
	{// @endlock
		//Method 2. Loads all 497 cities. But 12 calls to server.
		var start = new Date();
		ds.City.all({orderBy:"name", onSuccess:function(event) {	
			var count = event.entityCollection.length; 
			var myHTML = '';	
			
			event.entityCollection.forEach({
				onSuccess: function(event2) {
					myHTML += '<p>' + escapeHTML(event2.entity.name.getValue()) + '</p>';
				},
				atTheEnd: function(end) {
					var stop = new Date();
					var executionTime = stop - start;
					$('#container2').html(myHTML);
					$$('richText9').setValue(executionTime+ "ms");	
				}
			});
		}});
		
	};// @lock

	button1.click = function button1_click (event)// @startlock
	{// @endlock
		//Method 1. Not so good. Only loads first 40 cities.
		ds.City.all({orderBy:"name", onSuccess:function(event) {	
			var count = event.entityCollection.length; 
			var myHTML = '';
			for (var i = 0; i < count; i++) {
				event.entityCollection.getEntity(i,  {onSuccess:function(event) {				
					myHTML += '<p>' + escapeHTML(event.entity.name.getValue()) + '</p>';
				}});
			}
			$('#container13').html(myHTML);	
			$$('richText13').setValue("failed");		
		}});
		
	};// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		$$('richText12').hide();
		$$('richText9').hide();
		$$('richText10').hide();
		$$('richText11').hide();
		$$('richText13').hide();
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("menuItem1", "click", menuItem1.click, "WAF");
	WAF.addListener("menuItem5", "click", menuItem5.click, "WAF");
	WAF.addListener("menuItem4", "click", menuItem4.click, "WAF");
	WAF.addListener("menuItem3", "click", menuItem3.click, "WAF");
	WAF.addListener("menuItem2", "click", menuItem2.click, "WAF");
	WAF.addListener("button4", "click", button4.click, "WAF");
	WAF.addListener("button3", "click", button3.click, "WAF");
	WAF.addListener("button2", "click", button2.click, "WAF");
	WAF.addListener("button1", "click", button1.click, "WAF");
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
