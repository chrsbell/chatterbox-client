var MessagesView = {
//should be able to add messages and rooms to the DOM

  // accesses the div 'chats' from chatterbox.html
  $chats: $('#chats'),

  initialize: function() {
  },

  render: function() {

  },

  // input: message
  // output: html
  renderMessage: function (message) {
    // convert input message into templated HTML to be rendered on DOM
    // create variable representing rendered message
    var htmlMessage = MessageView.render(message);
    this.$chats.append(htmlMessage);
  }

};