 function text() {
 	 var x=document.getElementById('titleInput').value;
 	localStorage.setItem("result1", x);
 	console.log(x)
 	
 }

  function price() {
 	 var y=document.getElementById('inputPrice').value;
 	localStorage.setItem("result2", y);
 	
 } 
 function desecription() {
 	var z=document.getElementById('inputDescription').value;
 	localStorage.setItem("result3", z);
 	
 } 
 function date() {
 	var t=document.getElementById('inputDate').value;
 	localStorage.setItem("result4", t);
 	
 }
function appendText() {
 	 var a      = localStorage.getItem("result1");
      var b     = localStorage.getItem("result2");
      var c     = localStorage.getItem("result3");
      var d     = localStorage.getItem("result4");
      document.getElementById('event').innerHTML += '<div class="container">'+'<div class="row div1">'+
   '<div class="card mb-3" >'+
  '<div class="row no-gutters">'+
    '<div class="col-md-4">'+
      '<img src="img/workshop.jpg" class="card-img img" alt="...">'+

    '</div>'+
    '<div class="col-md-8">'+
     '<div class="card-body">'+ 
     '<h5 class="card-title  title1 title"> '+a+'</h5>'+
     '<p class="card-text description1">'+c+'</p>'+
     '<p class="card-text "><small class="text-body price1">The Ticket price:'+ b+'JD</small></p>'+
     '<p class="card-text date"> The Date:'+d+'</p>'+
     '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>';
    
 }
 $(document).ready(function(){
  $(".button").click(function(){
    $("#submitEvent").show();
  });
  
});
 $(document).ready(function(){
  $(".submit").click(function () {
 $(".div1").show();
});
  
});
  $(document).ready(function(){
    $(".success").click(function(){
      $("#successDiv").text("you register successfully");});

    
  });