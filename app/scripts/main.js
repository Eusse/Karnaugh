var karnaugh = -1;
var qmc = -1;
function run() {
  qmc = new QuineMcCluskey("fakeDivId", 2, 4, 0); 
  //qmc = new QuineMcCluskey("myQmcDisplay", 2, 4, 0); // enable for debugging
  qmc.init();
  karnaugh = new KarnaughMap("kmap", qmc);
  karnaugh.init();
}

function noOfVarsChanged() {
  var d = document.getElementById("noOfVarsChanged_id").value;
  karnaugh.setNoOfVars(d);
}

function dontCareChanged() {
  var d = document.getElementById("select_dontCare").value;
  karnaugh.allowDontCares(d);
}

$(document).ready(function(){
  run();
});