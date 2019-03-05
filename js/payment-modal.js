$(document).ready(function(){
	
    
    

    
    function payModal_reset() {
        $("#paywith-credit-card").hide();
		$("#paywith-bank-acc").hide();
		$("#paywith-paypal").hide();
        $(".payment-methods").show();
        $("#make-payment-modal-conent").show();
        $("#make-payment-success-modal-conent").hide();
        $("#make-payment-otp-success-modal-conent").hide();
    }
	
	payModal_reset();
	
	
	
	$(".checkbox-box").click(function() {
		$("#check-saveCard").toggleClass("checkbox-unchecked");
		$("#check-saveCard").toggleClass("checkbox-checked");
        $("#check-bankAcc").toggleClass("checkbox-unchecked");
		$("#check-bankAcc").toggleClass("checkbox-checked");
	});	
    
    
    // choose payment methods
	$("#payMethod-bank-acc").click(function() {
		 $("#paywith-bank-acc").show();
		 $(".payment-methods").hide();
    });
    $("#payMethod-paypal").click(function() {
		 $("#paywith-paypal").show();
		 $(".payment-methods").hide();
    });
    $("#paywith-paypal-change").click(function() {
		 $("#paywith-paypal").hide();
		 $(".payment-methods").show();
    });
    
    
    // change back payment methods
    $("#paywith-bank-acc-change").click(function() {
		 $("#paywith-bank-acc").hide();
		 $(".payment-methods").show();
    });
    $("#paywith-credit-card-change").click(function() {
		 $("#paywith-credit-card").hide();
		 $(".payment-methods").show();
    });
	
	$("#payMethod-credit-card").click(function() {
		 $("#paywith-credit-card").show();
		 $(".payment-methods").hide();
    });
    
    
    
    $(".otp-success-copy .btn-tert").click(function() {
		 window.location = "02-payment-savedMethod.html"; 
    });
    
    $(".otp-success-copy .btn-primary").click(function() {
		 window.location = "03-manage-otp.html"; 
    });
    
    
    
    

     //make payment – load success screen
    $(".make-payment-btn").click(function() {
		 $("#make-payment-modal-conent").hide();
		 $("#make-payment-success-modal-conent").show();
         $("#myModal").scrollTop(0);
		$("#payment-screens").scrollTop(0);
		$(document).scrollTop(0);
		$(window).scrollTop(0);
		
    });
    
    
    $("#otp-optin-btn").click(function() {
		 $("#make-payment-otp-success-modal-conent").show();
		 $("#make-payment-success-modal-conent").hide();
         $(".welcome-sms-alert").toggleClass("welcome-sms-alert-show");
        $("#myModal").scrollTop(0);
		$("#payment-screens").scrollTop(0);
		$(document).scrollTop(0);
		$(window).scrollTop(0);
    });
    
    
    $(".dismiss-modal-btn").click(function() {
		 payModal_reset();
    });
    
   
    //email fx
    $("#email-share").hide();
    $("#email-sent").hide();
    
    $(".email-discrete-link").click(function() {
		 $("#email-share").show();
        $("#email-sent").hide();
    });
    
    $("#send-email-btn").click(function() {
		 $("#email-share").hide();
        $("#email-sent").show();
    });


    
    
});
