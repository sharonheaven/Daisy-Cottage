$('form.ajax').on('submit', function() {
	var that = $(this),
		url = that.attr('action'),
		type = that.attr('method'),
		data = {};
	
	that.find('[name]').each(function() {
		var that = $(this),
			name = that.attr('name'),
			value = that.val();
		
		data[name] = value;
	});
	
	$.ajax({
		
		url: url,
		type: type,
		data: data,
		success: function(response) {
			var el = "";
			
			if(response.toLowerCase() == "true"){
				el = '<div id="response" class="alert alert-success" role="alert"><strong>The message has sent successfully.</strong> We will get back to you as soon as we can!</div>';
			}
			else {
				el = '<div id="response" class="alert alert-danger" role="alert"><strong>The message failed to send.</strong> Try again at another time or use another point of contact!</div>';
			}
			
			$('div#response').replaceWith(el);
		}
		
	});
	
	return false;
});