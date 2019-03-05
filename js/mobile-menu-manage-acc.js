$(document).ready(function(){
	
    
    
    
  
    
  $("#nav-drawer-btn").click(function() {
      $(".mobile-nav-top").hide();
      $(".mobile-nav-manage-menu").show();
    });
  
    $(".mobile-nav-top").hide();
      $(".mobile-nav-manage-menu").show();


    
    $(".mobile-nav-manage").click(function() {
		 $(".mobile-nav-manage-menu").toggle();
        $(".mobile-nav-top").toggle();
    });
    
    $(".mobile-nav-manage-back").click(function() {
		 $(".mobile-nav-manage-menu").toggle();
        $(".mobile-nav-top").toggle();
    });
    
    
    
});
