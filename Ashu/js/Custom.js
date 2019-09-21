// alert("It's working");





var wrapper = document.querySelector(".wrapper");
var user_section = document.querySelector(".user-section");
var user_section_login = document.querySelector(".user-section-login");
var signupBtn = document.querySelector(".signup");
var loginBtn = document.querySelector(".login");
var close_btn = document.querySelector(".close-btn");
var close_btn_login = document.querySelector(".close-btn-login");




//SIGNUP SECTION
signupBtn.addEventListener("click", function() {
	user_section.style.display = "block";

});

close_btn.addEventListener("click", function () {
	user_section.style.display = "none";
	});


//LOGIN SECTION
loginBtn.addEventListener("click", function() {
	user_section_login.style.display = "block";
	
});

close_btn_login.addEventListener("click", function () {
	user_section_login.style.display = "none";

	});