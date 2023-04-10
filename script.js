//your JS code here. If required.

function result(){
	let fname = document.getElementById('fname').value;
	let lname = document.getElementById('lname').value;
	let phone = document.getElementById('phone').value;
	let email = document.getElementById('email').value;
	let str = `First Name: ${fname} \n Last Name: ${lname} \n Phone Number: ${phone} \n Email ID: ${email}`
	alert(str);
}