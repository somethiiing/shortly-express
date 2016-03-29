Shortly.createLinkView = Backbone.View.extend({
  className: 'creator',

  template: Templates['create'],

  // on submit, go to index.html
  // THIS NEEDS TO CHANGE
  events: {
    'submit': 'signup'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  signup: function() {

  }, 
 
  // CHANGE SUCCESS TO WHATEVER IS APPROPRIATE
  success: function() {
  },

  failure: function() {
  }, 

  startSpinner: function() {
    this.$el.find('img').show();
    this.$el.find('form input[type=submit]').attr('disabled', 'true');
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  },

  stopSpinner: function() {
    this.$el.find('img').fadeOut('fast');
    this.$el.find('form input[type=submit]').attr('disabled', null);
    this.$el.find('.message')
      .html('')
      .removeClass('error');
  }

});
