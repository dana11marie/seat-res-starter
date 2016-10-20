$("div.available").click(function(){
    // $(this).replaceWith(function(){
      $("div#form").append(
// Creating Form Div and Adding <h2> and <p> Paragraph Tag in it.
$("<p/>").text("Enter your contact information to reserve this ticket."), $("<form/>", {
action: '#',
method: '#'
}).append(
// Create <form> Tag and Appending in HTML Div form1.
$("<input/>", {
type: 'text',
id: 'vname',
name: 'name',
placeholder: 'Your Name'
}), // Creating Input Element With Attribute.
$("<input/>", {
type: 'text',
id: 'vemail',
name: 'email',
placeholder: 'Your Email'
}), $("<br/>"), $("<input/>", {
type: 'submit',
id: 'submit',
value: 'Submit'
})));
$("#submit").click(function(){
  $("div.available").toggleClass(".reserved");
});
  });
