function sendMessage(){
  var name =$("#name").val();
  var email=$("#email").val();
  var message=$("#message").val();
  if (name === "" || email==="" || message===""){
    $("#response").html("");
    //$("#error").html("Please fill in all fields!");
 }else{
  $("#error").html("");
  $("#response").focus();
  $("#response").html("Thank you " +name+"! Your message has been received. We shall get back to you shorty");
  //alert("Thank you " + name + "! Your message has been received. We shall get back to you shortly.");          
};
}
