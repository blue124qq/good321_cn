$modulus.siteEntryReady(function(){$modulus.siteEntry().setPasswordConfirmInputFunction(function(){})});$modulus.signUpReady(function(){$modulus.signUp().setPasswordConfirmInputFunction(function(){$("#password").val("")})});function init_newsletter(){var a=$(".load-newsletter-form");if(a.length==0){return false}var b="function=newsletter_form";$modulus.ajaxCallback("newsletter_module",b,function(d){if($modulus.isset(d.newsletter_form)){var c=false;a.each(function(){$(this).html(d.newsletter_form);c=true});if(($modulus.isset(window.contentOffer))&&$modulus.functionExists(window.contentOffer.initPackery)){window.contentOffer.initPackery()}if(c&&$modulus.isset(d.shadow_newsletter_form)){$("body").append('<div style="display:none;">'+d.shadow_newsletter_form+"</div>")}}})}$(document).ready(function(){$modulus.siteEntryReady(function(){$modulus.siteEntry().initLoginBox();$modulus.siteEntry().initSignUpBox();$modulus.siteEntry().initSudoSignUpBox();$modulus.callOnce("newsletterInit",function(){$modulus.siteEntry().initNewsletterSignUp()});$modulus.siteEntry().autoTriggerLaunch()});$modulus.autoFacebookSignUp()});