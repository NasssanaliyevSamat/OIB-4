let Names = [];

let Emails = [];

let Passwords = [];

let BlockedUsers = [];

const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const container = document.getElementById('container');

const SignUp = document.getElementById('Sign_Up');
const SignIn = document.getElementById('Sign_In');




SignUp.addEventListener('click', () =>{
	const Password = document.getElementById('Password').value;
	const Email = document.getElementById('Email').value;
	const Name = document.getElementById('Name').value;
	Names.push(Name);
	Emails.push(Email);
	Passwords.push(Password);
	BlockedUsers.push(true);
	document.getElementById('Name').value = "";
	document.getElementById('Email').value = "";
	document.getElementById('Password').value = "";
	// window.alert(Passwords[0]);
	

});

var flag = false;
var countWrong = 1;

function validateLogin(){
	const LoginEmail = document.getElementById('LoginEmail').value;
	// window.alert(LoginEmail);

	const LoginPassword = document.getElementById('LoginPassword').value;
	// window.alert(LoginPassword);

	const lenghtEmails = Emails.length;
	// window.alert(lenghtEmails);

	const lengthPasswords = Passwords.length;
	// window.alert(lengthPasswords);

	for (var i = 0; i <= lenghtEmails; i++) {
		if(LoginEmail == Emails[i] && LoginPassword == Passwords[i] && BlockedUsers[i] != false){
			window.alert('Login is true');
			flag = true;
			break;
		}
		else if (LoginEmail == Emails[i] && LoginPassword != Passwords[i] && BlockedUsers[i] != false){
			window.alert('Login or password is wrong');
			if(countWrong >= 3){
				BlockedUsers[i] = false;
				window.alert(LoginEmail + 'has been blocked');
				// DeleteUser(LoginEmail);
				break;
			}
			window.alert('Counter wrong login or password = '+ countWrong)
			countWrong++;

		}

	}
	return flag;
}

var o = true;
function NewRegistration(){
	window.open("index.html")
	window.close("changePass.html");
}

function ChangePass(){
	
	setTimeout(Ch,2000);
}
function Ch() {
	const ExEmail = document.getElementById('ExistingEmail').value;
	const ExPass = document.getElementById('ExistingPassword').value;
	const NewPassword = document.getElementById('NewPassword').value;
	
	
	for (var i = 0; i <= Emails.length; i++) {
		if(Emails[i] == ExEmail && Passwords[i] == ExPass){
			Passwords[i] = NewPassword;
			window.alert('Password has been changed! New password is' + NewPassword);
		}
		else{
			window.alert('Account not found');
		}
	}
}

function UnlockPass(){
	const Ex_Email = document.getElementById('user1').value;
	const Ex_Pass = document.getElementById('pass1').value;
	window.alert('dd');
	for(var i = 0; i <= Emails.length;i++){
		if(Ex_Email == Emails[i] && Ex_Pass == Passwords[i]){
			BlockedUsers[i] = true;
			
		}
		else{
			window.alert('Account not found');
		}
	}

}


signUpButton.addEventListener('click', () => {
	container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
	container.classList.remove("right-panel-active");
});

	

