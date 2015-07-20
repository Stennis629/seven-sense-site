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
  						'Fly Golden Eagle', 
  						' Gill Landry', 
  						' Morning Teleportation',
  						' Desert Noises',
						' Margo and the Pricetags',
						' Sol Cat',
						' Shivering Timbers',
						' Jamaican Queens',
						' Starbenders',
						' Ancient Warfare',
						' Scott Carney (WAX FANG)',
						' Billy Goat Strut Revue',
						' Seluah',
						' Peter Searcy Band',
						' GRAFFITI the band',
						' The Instruction',
						' BIGBIG',
						' Vessel',
						' Whiskey Bent Valley',
						' ZLP (Zach Longoria Project)',
						' Thirty Spokes',
						' Tall Squares',
						' Adventure',
						' Brother Wolves',
						' Quiet Hollers',
						' Black Birds of Paradise',
						' Bottom Sop',
						" Billy Seckman & Momo's Omen",
						' JK Mabry',
						' Jaye Jayle',
						' Hear Alex Wright & The Maven Down',
						' 1200',
						' The Hot Wires (Louisville, KY)',
						' The Misty Mountain String Band',
						' Joann & The Dakota',
						' SATELLITE TWIN', 
						' White Crosses: A Tribute to the Ramones',
						' The Dammit',
						' The Tunesmiths'
						];

  			// console.log(bands)
  			modal.find('.modal-body').text(bands)


  		};










	});
});