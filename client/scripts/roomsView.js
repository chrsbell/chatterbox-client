var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  getTag: function() {
    return _.template('<option value= <%= name %> ><%= name %></option>');
  },

  initialize: function() {
  },

  render: function() {
    //If it does --> only display messages that have matching room property

  },

  //Add renderRoom function
  renderRoom: function (room) {
    // if the room does not exist --> add room
    if (rooms.length === 0) {
      // add the room to the array of rooms
      rooms.push(room);
    }
    // access the select menu with jquery and add option element
    tag = this.getTag({name: room});
    this.$select.append(tag);


  }

};
