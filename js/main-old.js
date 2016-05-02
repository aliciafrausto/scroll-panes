(function() {
	function getViewportSize () {
        return { 
        	width: Math.round( Math.max(document.documentElement.clientWidth, window.innerWidth || 0) ),
        	height: Math.round( Math.max(document.documentElement.clientHeight, window.innerHeight || 0) )
        }
    }
	function sizeScrollPane() {
		var v = getViewportSize();
		$('.scroll-pane').each( function( idx, elem ) {
			var $pane = $(elem);
			var offset = $pane.offset();
			$pane.outerHeight( v.height - offset.top );
		});		
	}
	function checkShadow() {
		var showShadow = false;
		$('.scroll-pane').each( function( idx, elem ) {
			var $pane = $(elem);
			var scrollTop = $pane.scrollTop();
			showShadow = scrollTop > 0;// || showShadow	
			$pane.removeClass('shadow');
			if ( showShadow ) {
				$pane.addClass('shadow');
			}
		});
		// $('.header-secondary').removeClass('shadow');
		// if ( showShadow ) {
		// 	$('.header-secondary').addClass('shadow');
		// }
	}
	
	sizeScrollPane();
	checkShadow();

	$(window).resize( sizeScrollPane );
	$('.scroll-pane').on( 'scroll', checkShadow );
})();
