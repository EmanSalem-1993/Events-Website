
  $(document).ready(function(){
  $(".button").click(function(){
    $("#submitEvent").show();
  });
  
});
  
  $(document).ready(function(){
    $(".success").click(function(){
      $("#successDiv").text("you register successfully");});

    
  });
  $(document).ready(function(){
  $(".submit").click(function () {
 
  $("#event").append( '<div class="container">'+'<div class="row div1">'+
   '<div class="card mb-3" >'+
  '<div class="row no-gutters">'+
    '<div class="col-md-4">'+
      '<img src="img/workshop.jpg" class="card-img img" alt="...">'+

    '</div>'+
    '<div class="col-md-8">'+
     '<div class="card-body">'+ 
     '<h5 class="card-title  title1 title"></h5>'+
     '<p class="card-text description1"></p>'+
     '<p class="card-text "><small class="text-body price1"></small></p>'+
     '<p class="card-text date"></p>'+
     '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>'+
    '</div>');
  $(".div1").show(); 
    x=$(".titleInput").val();  
    y=$(".inputDescription").val(); 
    z=$(".inputPrice").val();
    t=$(".inputDate").val();
    
    
    localStorage.setItem("result1", x);
    localStorage.setItem("result2", y);
    localStorage.setItem("result3", z);
    localStorage.setItem("result4", t);
     var a      = localStorage.getItem("result1");
      var b     = localStorage.getItem("result2");
      var c     = localStorage.getItem("result3");
      var d     = localStorage.getItem("result4");
      $(".title1").html(a);
      $(".description1").html(b);
      $(".price1").html( "The Ticket price:"+c+"JD");
       $(".date1").html( "The Date:"+d);
     
       
});
  
});
  
  
	