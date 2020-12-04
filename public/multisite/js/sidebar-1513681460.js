

function moveNavInToModuleBody() {
  $('#module_body .mainMenu').html('<div id="catNavLeft"></div>');

  $('#main_nav-outer nav').each(function () {
    $('#module_body .mainMenu').append($(this).html());
  });

}



function addSideBar(){
  $('#module_body').prepend('<div class="mainMenu mainMenuSidebar"> </div>');
  moveNavInToModuleBody();
}


$(document).ready(function(){
    addSideBar();
});