(function($) {
	var methods = {
		init: function(element){
			var self = this;
	        self.element = $(element);
	        self.createDropdown();
	        self.element.hide();
		},

		closeDropdowns: function(){
			var dropDown = $('.form-control.dropdown');
			dropDown.find('ul').slideUp();
			dropDown.removeClass('focus');
		},

		createDropdown: function(){
			var self = this;

			self.dropdown = $('<div/>', {
		        html: $('<p/>').append(self.element.find('option:selected').text()),
			}).addClass('form-control dropdown').insertAfter(self.element);

			self.dropdown.bind('click.myDropdown', function(event){
				event.stopPropagation();
				if (!$(this).hasClass('focus')){
					self.closeDropdowns();
				}
				self.dropdown.toggleClass('focus');
				self.toggleDropdown();
			});

	        self.detectDropdownOtsideClick();
			self.createOptions();

		},

		toggleDropdown: function(){
			var self = this;
			self.dropdown.find('ul').slideToggle(250);
		},

		createOptions: function(){
			var self = this;
			var option = self.element.find('option');
			var container = $('<ul/>');

			if (self.element.closest('select').data('placeholder') === true){
				var deletePlaceholder = true;
			}
			
			option.each(function(index){
				if (index === 0 && deletePlaceholder === true){
					return;
				}

				self.option = $('<li/>',{
		            text: $(this).text(),
		            'data-value': $(this).val()
		        }).bind('click.myDropdown', function(){
		        	self.passOption(this);
		        }).appendTo(container);
			});

			container.appendTo(self.dropdown);
		},

		passOption: function(option){
			var self = this;
			var option = $(option);

			self.element.val(option.data('value')).change();
            self.dropdown.find('p').text(option.text());
		},

		detectDropdownOtsideClick: function(){
			var self = this;
			var outsideArea = $('html');
			if( !outsideArea.data('bound') ){
				outsideArea.data('bound', true);
				outsideArea.on('click.myDropdown', function(){
					self.closeDropdowns();
				});
			}
		},

		destroy: function(){
			var dropdown = $(this).next();
			dropdown.remove();
		}
	};

	$.fn.myDropdown = function( method ) {
		 if ( methods[method] ) {
	      return methods[method].apply( this, Array.prototype.slice.call( arguments, 1 ));
	    } else if ( typeof method === 'object' || ! method ) {
	      return this.each(function() {
			var select = Object.create( methods );
			select.init( this );
			$.data( this, 'myDropdown', select );
		});


	    } else {
	      $.error( 'Метод с именем ' +  method + ' не существует для jQuery.tooltip' );
	    }   

	};

})( jQuery );

