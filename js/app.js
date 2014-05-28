$(document).ready(function() {
	$('.add').mouseenter(function() {
		$('.dormant-plus').hide();
		$('.hide-plus').show();
	})
	.mouseleave(function() {
		$('.hide-plus').hide();
		$('.dormant-plus').show();
	})
	.on('click', function() {
		var itemText = $("#add-name").val().trim();
		var newRow = $(
						"<li class=\"new-row\">" + 
							"<div class=\"checkbox\">" +
								"<div class=\"dormant-checked\"></div>" +
								"<div class=\"hide-checked\"></div>" +
							"</div>" +
							"<span class=\"item-name\">" + itemText + "</span>" +
							"<div class=\"hide-trash\"></div>" +
						"</li>"
						);

		$('.new-row').mouseenter(function() {
		$(this).find('.hide-trash').show();
		})
		.mouseleave(function() {
		$(this).find('.hide-trash').hide();
		});
		
		$('.hide-trash').click(function() {
		$(this).closest('li').remove();
		});

		$('.checkbox').mouseenter(function() {
		$(this).find('.hide-checked').show();
		$(this).find('.dormant-checked').hide();
		})
		.mouseleave(function() {
		$(this).find('.dormant-checked').show();
		$(this).find('.hide-checked').hide();
		})
		.click(function () {
		$(this).next('span').fadeTo("slow").toggleClass('item-name completed');
		});

		if (itemText.length > 0) {
		newRow.appendTo('.shopping-list');
		newRow.css('opacity','0')
		.css('marginTop','-40px')
        .animate(
            {marginTop: "0px"},
            { queue: false}
        )
        .delay(300)
        .animate(
			{ opacity: "1" },
            { queue: true}
        );
		$("#add-name").val("");
		return false;
		};
	});

	$('input').focus(function() {
		$('.new-item').css('border-color','#00adef');
	})
	.blur(function(){
		$('.new-item').css('border-color','#d2d2d2');
	});
});