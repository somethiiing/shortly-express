Shortly.createLinkView = Backbone.View.extend({
  className: 'creator',

  template: Templates['login'],

  // on submit:
    // check if user is in the database, and if yes, authenticate
    // if not in the database, redirect to sign up
  // THIS NEEDS TO CHANGE
  events: {
    'submit': 'login'
  },

  render: function() {
    this.$el.html( this.template() );
    return this;
  },

  // CHANGE EVENT TO REDIRECT
  shortenUrl: function(e) {
    e.preventDefault();
    var $form = this.$el.find('form .text');
    var link = new Shortly.Link({ url: $form.val() });
    link.on('request', this.startSpinner, this);
    link.on('sync', this.success, this);
    link.on('error', this.failure, this);
    link.save({});
    $form.val('');
  },
  // CHANGE SUCCESS TO WHATEVER IS APPROPRIATE
  success: function(link) {
    // this.stopSpinner();
    // var view = new Shortly.LinkView({ model: link });
    // this.$el.find('.message').append(view.render().$el.hide().fadeIn());
  },

  failure: function(model, res) {
    // this.stopSpinner();
    // this.$el.find('.message')
    //   .html('Please enter a valid URL')
    //   .addClass('error');
    // return this;
  }


});
