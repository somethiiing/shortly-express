Shortly.createLinkView = Backbone.View.extend({
  className: 'login',

  template: Templates['login'],

  // on submit:
    // check if user is in the database, and if yes, authenticate
    // if not in the database, redirect to sign up
  // THIS NEEDS TO CHANGE
  events: {
    'submit': 'login'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  login: function(e) {
    e.preventDefault();
    // create variables for what should be 
    // the username and the password
    var $username = this.$el.find('form #username');
    var $password = this.$el.find('form #password');
    console.log(username);
    console.log(password);
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
