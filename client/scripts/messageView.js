var MessageView = {

  render: _.template(`
  <!--
  -->
      <div class="chat">
        <div class=username ><%- username %></div>
        <div class=createdAt ><%- createdAt %></div>
        <div class=objectId><%- objectId %></div>
        <div class=text ><%- text %></div>
        <div class=updatedAt ><%- updatedAt %></div>
        <div class=roomname ><%- roomname %></div>
      </div>
      <!--
      -->
    `)

};