var userWorkResponses = [];
var userFunResponses = [];
var workTransportationMode = "";
var funTransportationMode = "";
var capitalWorkTransportationMode = "";
var capitalFunTransportationMode = "";

$(document).ready(function(){



  $("form#transportationSurvey").submit(function(event){
    event.preventDefault();


    $("input:checkbox[name=work-transportation]:checked").each(function(){
      workTransportationMode = $(this).val();
      userWorkResponses.push(workTransportationMode);
      capitalWorkTransportationMode = workTransportationMode.toUpperCase();
      $("ul#responsesWork").append("<li>" + capitalWorkTransportationMode + "</li>");
    });
    $("input:checkbox[name=fun-transportation]:checked").each(function(){
      funTransportationMode = $(this).val();
      userFunResponses.push(funTransportationMode);
      capitalFunTransportationMode = funTransportationMode.toUpperCase();
      $("ul#responsesFun").append("<li>" + capitalFunTransportationMode + "</li>");
    });
    $("div#workResponses").show();

    $("div#funResponses").show();

    $("form#transportationSurvey").hide();

  });

  console.log(userWorkResponses);
  console.log(userFunResponses);

});
