(function ($, window, undefined) {
	'use strict';

	$(window.document).ready(function () {
		if ($('[ng-app="News"]').length > 0) {

			// expand on hover
			$('#app-content').on('hover', '.feed_item', function() {
				var isOpened = $(this).hasClass('opened');
				$('.feed_item.opened').removeClass('opened');

				if(!isOpened) {
					$(this).addClass('opened');
				}
			});

			// dont mark items read on scroll
			$('#app-content').attr('news-item-scroll', 'false');

		}
	});

})(jQuery, window);
