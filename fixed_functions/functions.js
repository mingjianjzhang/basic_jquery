$(document).ready(function(){
			$("#accordion").accordion({
				heightStyle: "content"
			});

			$('#addClass > button').click(function() {
				$('#addClass > p').addClass("addedClass");
			});

			$('#focus input').focus(function(){
				$('#dialog').dialog();
				$(this).addClass("addedClass")
			});

			$('#val form').submit(function(){
				$('#val p').text($('#val > form > input[type="text"]').val());
				return false;
			});

			$('#attr form').submit(function(){
				$('#attr img').attr({src: $('#attr > form > input[type="text"]').val(), width: "100", height: "100"});
				return false
			});
		
			$('#html form').submit(function(){
				$('#textBox').html("<p style='background-color:" + $('#background').val() + 
								   "; color:" + $('#fontColor').val() + "'>" +
								   $('#text').val() + "</p>");
				return false;
			});

			var clickCounter = 0;
			$('#data').data("counter", clickCounter);
			$('#clickCounter').click(function() {
				clickCounter++;
				$('#data').data("counter", clickCounter);
			});

			$('#clickDisplayer').click(function(){
				$('#data').append("<p>You clicked that button " + $('#data').data("counter") + " times.</p>");
			});

			$('#beforeAfter form').submit(function() {
				if ($('#before').is(":checked")) {
					$('#beforeHeader').before('<h3 class="ui-accordion-header ui-state-default ui-accordion-icons">' + $('#headerText').val() + "</h3>" + "<div class='ui-accordion-content ui-helper-reset ui-widget-content'>" + $('#content').val() + "</div></div>");
					return false;
				} else if($('#after').is(":checked")) {
					$('#beforeAfter').after('<h3 class="ui-accordion-header ui-state-default ui-accordion-icons">' + $('#headerText').val() + "</h3>" + "<div class='ui-accordion-content ui-helper-reset ui-widget-content'>" + $('#content').val() + "</div></div>");
					return false;
				}; 
			});

			$('#show-click').click(function(){
				$('.ghost').show();
			});

			$('#hide-click').click(function(){
				$('.ghost').hide();
			});
			$('#toggle-click').click(function(){
				$('.ghost').toggle();
			})
		

			$('#fade h3').hover(
				function() {
					$('#fade img').fadeIn();
				}, function(){
					$('#fade img').fadeOut();
				}
			)
			
			$('#up').click(function(){
				$('#slide img').slideDown(1000);
				
			})
			$('#down').click(function(){
				$('#slide img').slideUp(1000);
				
			})
			$('#updown').click(function(){
				$('#slide img').slideToggle(1000);

			})

});
