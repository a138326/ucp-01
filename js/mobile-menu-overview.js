$(document).ready(function(){
	
    
    
    
  
    
  $("#nav-drawer-btn").click(function() {
      $(".mobile-nav-top").show();
      $(".mobile-nav-manage-menu").hide();
    });
  
    $(".mobile-nav-manage-menu").hide();


    
    $(".mobile-nav-manage").click(function() {
		 $(".mobile-nav-manage-menu").toggle();
        $(".mobile-nav-top").toggle();
    });
    
    $(".mobile-nav-manage-back").click(function() {
		 $(".mobile-nav-manage-menu").toggle();
        $(".mobile-nav-top").toggle();
    });
    
    
    
});
