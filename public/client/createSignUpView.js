Shortly.createLinkView = Backbone.View.extend({
  className: 'creator',

  template: Templates['login'],

  // on submit, go to index.html
  // THIS NEEDS TO CHANGE
  events: {
    'submit': 'shortenUrl'
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
  success: function() {
  },

  failure: function() {
  }

});
