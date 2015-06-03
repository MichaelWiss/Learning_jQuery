// $(document).ready(function() {
//    $('#switcher-default').addClass('selected')
//    $('#switcher button') .click(function() {
//    	   var bodyClass = this.id.split('-') [1];
//    	   $('body').removeClass().addClass(bodyClass);
//    	   $('#switcher button').removeClass('selected');
//    	   $(this).addClass('selected');
//    });
//    //$('#switcher-narrow').on('click', function() {
//    // 	   $('body').addClass('narrow');
//    // });
//    // $('#switcher-large').on('click', function() {
//    //     $('body').addClass('large');
// 	  // });
// });

// $(document).ready(function() {
// 	$('#switcher').hover(function() {
// 		$(this).addClass('hover');
//   }, function() {
//   	$('#switcher button').toggleClass('hidden');
// 	});
// });


// $(document).ready(function() {
// 	$('#switcher').click(function(event) {
// 	if (event.target == this) {
// 		$('#switcher button').toggleClass('hidden');
// 	}
// 	});
// });
// $(document).ready(function() {
//    $('#switcher-default').addClass('selected')
//    $('#switcher button') .click(function(event) {
//    	   var bodyClass = this.id.split('-') [1];
//    	   $('body').removeClass().addClass(bodyClass);
//    	   $('#switcher button').removeClass('selected');
//    	   $(this).addClass('selected');
//    	   event.stopPropagation();
//    });
//  });

$(document).ready(function() {
   $('#switcher').click(function(event) {
      if ($(event.target).is('button')) {
         var bodyClass = event.target.id.split('-') [1];
         $('body').removeClass().addClass(bodyClass);
         $('#switcher button').removeClass('selected');
         $(event.target).addClass('selected');
         event.stopPropagation();
      }
   });
});