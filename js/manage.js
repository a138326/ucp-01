$(document).ready(function(){
	
    
    

    //$("#saved-mastercard-01").hide();
   // $("#saved-bank-acc-01").hide();
    $(".alert").hide();
    
    function addModal_reset() {
        $(".input-group.payment-methods").show();
        $(".payment-forms-wrapper").hide();
        $("#paywith-credit-card").hide();
        $("#paywith-bank-acc").hide();
        $("#add-method-selected-credit-card").hide();
        $("#add-method-selected-bank-acc").hide();
    }
	
	addModal_reset();
	
    
    $(".payMethod-bank-acc").click(function() {
        $("#paywith-bank-acc").show();
        $(".payment-forms-wrapper").show();
        $("#add-method-selected-bank-acc").show();
        $(".input-group.payment-methods").hide();
    });
    
    $(".payMethod-credit-card").click(function() {
		 $("#paywith-credit-card").show();
        $(".payment-forms-wrapper").show();
		 $(".input-group.payment-methods").hide();
        $("#add-method-selected-credit-card").show();
    });
	
    
     $("#wallet-save-credit-card").click(function() {
		 $("#saved-mastercard-01").show();
         $("#notif-mastercard-01-added").show();
    });
    
    $("#wallet-save-bank-acc").click(function() {
		 $("#saved-bank-acc-01").show();
        $("#notif-bank-acc-01-added").show();
    });

    
    
   
    
   $(".wallet-add-card").click(function() {
		 addModal_reset();
        $(".alert").hide();
    });
    
    $(".dismiss-modal-btn").click(function() {
		 addModal_reset();
    });
    
    $("#change-add-method").click(function() {
		 addModal_reset();
    });
    
    
    //manage
    
    $(".otp-manage-intro-more").hide();
    $("#otp-show-less").hide();
    $("#otp-manage-switch-off").hide();
    $("#otp-manage-details-off").hide();
    
    $("#otp-show-more").click(function() {
		 $(".otp-manage-intro-more").toggle();
        $("#otp-show-less").toggle();
        $("#otp-show-more").toggle();
    });
    $("#otp-show-less").click(function() {
		 $(".otp-manage-intro-more").toggle();
        $("#otp-show-less").toggle();
        $("#otp-show-more").toggle();
    });
    
    $("#otp-manage-switch-on").click(function() {
        $("#otp-manage-switch-on").toggle();
        $("#otp-manage-switch-off").toggle();
        $("#otp-manage-details-on").toggle();
        $("#otp-manage-details-off").toggle();
        $(".wallet-card-tag").hide();
    });
    $("#otp-manage-switch-off").click(function() {
        $("#otp-manage-switch-on").toggle();
        $("#otp-manage-switch-off").toggle();
        $("#otp-manage-details-on").toggle();
        $("#otp-manage-details-off").toggle();
        $(".wallet-card-tag").show();
        
    });
    
    
    
    
});
