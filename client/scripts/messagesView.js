var MessagesView = {
//should be able to add messages and rooms to the DOM

  // accesses the div 'chats' from chatterbox.html
  $chats: $('#chats'),

  initialize: function() {
    // FormView.$form.on('submit', FormView.handleSubmit);
    $('#refresh').on('click', function() {
      App.fetch();
    });

  },

  render: function() {
    var msg = messages.results;
    console.log(msg);
    //msg.forEach(MessagesView.renderMessage);
    for (var i = 0; i < msg.length; i++) {
      MessagesView.renderMessage(msg[i]);
    }
  },

  // input: message
  // output: html
  renderMessage: function (message) {
    // convert input message into templated HTML to be rendered on DOM
    // create variable representing rendered message
    console.log(message);
    debugger;
    //if message.createdAt is undefined, add
    if (!message.createdAt) {
      //Assign message.createdAt to
      message.createdAt = new Date();
    }

    //if message.objectId is undefined, add
    if (!message.objectId) {
      //Assign message.objectId to
      message.objectId = 'string';
    }

    //if message.updatedAt is undefined, add
    if (!message.updatedAt) {
      //Assign message.updatedAt to
      message.updatedAt = new Date();
    }

    var htmlMessage = MessageView.render(message);
    MessagesView.$chats.prepend(htmlMessage);
  }



};