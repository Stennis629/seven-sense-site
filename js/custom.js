$(function(){

	$('#textModal').on('show.bs.modal', function (event) {
  		var button = $(event.relatedTarget) // Button that triggered the modal
  		var modalTitle = button.data('whatever') // Extract info from data-* attributes
  		// If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  		// Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  		var modal = $(this)
  		modal.find('.modal-title').text(modalTitle)

  		if (modalTitle === "Meet the Bands!") {
  			
  			var bands = [
  							{
  								band : 'Fly Golden Eagle',
  								url : 'https://www.facebook.com/FlyGoldenEagle'
  							},
  							{
  								band : 'Gill Landry',
  								url : 'https://www.facebook.com/gilllandrymusic'
  							},
  							{
  								band : 'Morning Teleportation',
  								url : 'https://www.facebook.com/morningteleportation'
  							},
  							{
  								band : 'Desert Noises',
  								url : 'https://www.facebook.com/desertnoises'
  							}, 
  							{
  								band : 'Margo and the Pricetags',
  								url : 'https://www.facebook.com/MargoAndThePriceTags'
  							},
  							{
  								band : 'Sol Cat',
  								url : 'https://www.facebook.com/solcatmusic'
  							},
  							{
  								band : 'Shivering Timbers',
  								url : 'https://www.facebook.com/ShiveringTimbersMusic'
  							},
  							{
  								band : 'Jamaican Queens',
  								url : 'https://www.facebook.com/jamaicanqueens'
  							},
  							{
  								band : 'Starbenders',
  								url : 'https://www.facebook.com/starbenders'
  							}, 
  							{
  								band : 'Ancient Warfare',
  								url : 'https://www.facebook.com/AncientWarfare'
  							},
  							{
  								band : 'Scott Carney Band (WAX FANG)',
  								url : 'https://www.facebook.com/waxfangmusic'
  							},
  							{
  								band : 'Billy Goat Strut Revue',
  								url : 'https://www.facebook.com/billygoatstrutrevue'
  							}, 
  							{
  								band : 'Seluah',
  								url : 'https://www.facebook.com/pages/Seluah/103225963080742'
  							}, 
  							{
  								band : 'Peter Searcy Band',
  								url : 'https://www.facebook.com/pages/Peter-Searcy/9748266827'
  							}, 
  							{
  								band : 'Graffiti',
  								url : 'https://www.facebook.com/graffititheband'
  							},
  							{
  								band : 'The Instruction',
  								url : 'https://www.facebook.com/theinstruction'
  							}, 
  							{
  								band : 'BIGBIG',
  								url : 'https://www.facebook.com/pages/BIGBIG/695079587223428'
  							}, 
  							{
  								band : 'Vessel',
  								url : 'https://www.facebook.com/louivessel'
  							},
  							{
  								band : 'Whiskey Bent Valley',
  								url : 'https://www.facebook.com/whiskey.valley'
  							},
  							{
  								band : 'ZLP (Zach Longoria Project)',
  								url : 'https://www.facebook.com/zachlongoriaproject'
  							}, 
  							{
  								band : 'Thirty Spokes',
  								url : 'https://www.facebook.com/ThirtySpokes'
  							},
  							{
  								band : 'Tall Squares',
  								url : 'https://www.facebook.com/tallsquares'
  							},
  							{
  								band : 'Brother Wolves',
  								url : 'https://www.facebook.com/brotherwolveshowl'
  							},
  							{
  								band : 'Quiet Hollers',
  								url : 'https://www.facebook.com/QuietHollers'
  							},
  							{
  								band : 'Black Birds of Paradise',
  								url : 'https://www.facebook.com/BlackBirdsofParadise'
  							}, 
  							{
  								band : 'Bottom Sop',
  								url : 'https://www.facebook.com/bottomsop'
  							},
  							{
  								band : 'Billy Seckman & Momo’s Omen',
  								url : 'https://www.facebook.com/billyseckmanband'
  							},
  							{
  								band : 'JK Mabry',
  								url : 'https://www.facebook.com/jkmabry'
  							},
  							{
  								band : 'Jonathan Glen Wood Ensemble',
  								url : 'https://www.facebook.com/jonathanglenwood'
  							},
  							{
  								band : 'Alex Wright and the Maven Down',
  								url : 'https://www.facebook.com/hearalexwright'
  							},
  							{
  								band : '1200',
  								url : 'https://www.facebook.com/1200music'
  							},
  							{
  								band : 'The Hot Wires',
  								url : 'https://www.facebook.com/TheHotWires'
  							},
  							{
  								band : 'The Misty Mountain String Band',
  								url : 'https://www.facebook.com/themistymountainstringband'
  							},
  							{
  								band : 'Joann & The Dakota',
  								url : 'https://www.facebook.com/joannthedakota'
  							},
  							{
  								band : 'Satellite Twin',
  								url : 'https://www.facebook.com/pages/SATELLITE-TWIN/162581357138228'
  							},
  							{
  								band : 'White Crosses: A Tribute to the Ramones',
  								url : 'https://www.facebook.com/theramones'
  							},
  							{
  								band : 'The Dammit',
  								url : 'https://www.facebook.com/TheDammit'
  							},
  							{
  								band : 'The Tunesmiths',
  								url : 'https://www.facebook.com/TheTunesmiths'
  							},
  							{
  								band : 'Brooks Ritter',
  								url : 'https://www.facebook.com/brooksrittermusic'
  							}

  						];

  			var anchorHTML = '';
  			for (var i=0; i<bands.length; i++){
  				  	var newName = bands[i].band;
  					var newURL = bands[i].url;
  					anchorHTML += '<a href="' + newURL + '">' + newName + '</a><br>';
  					// console.log(anchorHTML);
  			 } 
  			 document.getElementById('mod-body').innerHTML = anchorHTML;

  		} else if (modalTitle === "Breweries") {
  			var breweries = [
  							{
  								brewer : "Bell's Brewery",
  								url : 'http://bellsbeer.com/'
  							},
  							{
  								brewer : 'Founders Brewing Company',
  								url : 'http://foundersbrewing.com'
  							},
  							{
  								brewer : 'Lagunitas Brewing Company',
  								url : 'https://lagunitas.com/'
  							},
  							{
  								brewer : 'Blue Point Brewing Company',
  								url : 'http://www.bluepointbrewing.com/'
  							}  							
  							];

  			var anchorHTML = '';
  			for (var i=0; i<breweries.length; i++){
  				  	var newName = breweries[i].brewer;
  					var newURL = breweries[i].url;
  					anchorHTML += '<a href="' + newURL + '">' + newName + '</a><br>';
  			 } 
  			 document.getElementById('mod-body').innerHTML = anchorHTML;

  		} else if (modalTitle === "Spirits") {
  			var spirits = [
  							{
  								spirit : "Larceny Bourbon",
  								url : 'http://larcenybourbon.com/home/'
  							},
  							{
  								spirit : 'Elijah Craig Bourbon',
  								url : 'http://heavenhill.com/brands'
  							},
  							{
  								spirit : 'Evan Williams Bourbon',
  								url : 'http://heavenhill.com/brands'
  							},
  							{
  								spirit : 'Lunazul Tequila',
  								url : 'http://lunazultequila.com/'
  							},  	
  							{
  								spirit : "Tito's Handmade Vodka",
  								url : 'http://www.titosvodka.com/'
  							},  	
  							{  							  							
  								spirit : 'Red Bull Energy Drink',
  								url : 'http://www.redbull.com/'
  							},  	
  							{
  								spirit : 'Horseshoe Bend Vineyards and Winery',
  								url : 'http://www.horseshoebend-ky.com/'
  							}  	  							
						];

  			var anchorHTML = '';
  			for (var i=0; i<spirits.length; i++){
  				  	var newName = spirits[i].spirit;
  					var newURL = spirits[i].url;
  					anchorHTML += '<a href="' + newURL + '">' + newName + '</a><br>';
  			 } 
  			 document.getElementById('mod-body').innerHTML = anchorHTML;
  		} else if (modalTitle === "Food") {
  			var foods = [
  						{
  								food : "Momma’s Mustard, Pickles & BBQ",
  								url : 'http://mommasbbq.com/'
  							},
  							{
  								food : 'Dragon King’s Daughter',
  								url : 'http://dragonkingsdaughter.com/'
  							},
  							{
  								food : 'El Taco Luchador',
  								url : 'https://www.facebook.com/eltacoluchador'
  							},
  							{
  								food : 'V-Grits',
  								url : 'http://www.vgrits.com/'
  							},  	
  							{
  								food : "Lil Cheezers",
  								url : 'https://www.facebook.com/LilCheezers'
  							},  	
  							{  							  							
  								food : 'Tasty Tuxedo Treats',
  								url : 'http://www.tastytuxedo.com/'
  							},  	
  							{
  								food : 'Country Loves Breakfast',
  								url : 'https://www.facebook.com/Countrylovesbfast'
  							}  	  							
						];

  			var anchorHTML = '';
  			for (var i=0; i<foods.length; i++){
  				  	var newName = foods[i].food;
  					var newURL = foods[i].url;
  					anchorHTML += '<a href="' + newURL + '">' + newName + '</a><br>';
  			 } 
  			 document.getElementById('mod-body').innerHTML = anchorHTML;
  		} else if (modalTitle === "Vendors") {
  			var vendors = [
  						'Coming Soon!'
						];
			var anchorHTML = '<p>' + vendors + '</p>';

  			document.getElementById('mod-body').innerHTML = anchorHTML;
  		} else if (modalTitle === "Boys & Girls Haven") {
  			var bghaven = [
  							{
  							benefit : "Proceeds benefit Boys & Girls Haven",
  							url : "http://www.boyshaven.org/"
  							}
						];
						console.log(bghaven[0].benefit);
			var anchorHTML = '<a href=' + bghaven[0].url + '>' + bghaven[0].benefit + '</a>';
}
  			document.getElementById('mod-body').innerHTML = anchorHTML;
  		
	});
});
