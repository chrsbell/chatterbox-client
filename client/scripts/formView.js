var FormView = {

  $form: $('form'),

  initialize: function() {
    FormView.$form.on('submit', FormView.handleSubmit);
  },

  handleSubmit: function(event) {
    // Stop the browser from submitting the form
    event.preventDefault();

    var text = $('input').first().val();

    //AJAX Post Request Format
    var message = {
      username: App.username,
      text: text,
      roomname: '4chan'
    };
    console.log('message :', message);

    // //success Callback
    // var sendSuccess = function() {
    //   console.log('Successfully sent message:' , message);
    // };

    // var sendFailure = function() {
    //   console.log('Failed to send message:', message);
    // };

    Parse.create(message);

    console.log('click!');
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  }

};