function validate() {
	let firstNameInput = document.getElementById('first-name').value
	let lastNameInput = document.getElementById('last-name').value
	let emailInput = document.getElementById('email').value
	let phoneInput = document.getElementById('Phone-Number').value
	let batchInput = document.getElementById('Batch-No').value
	let ModuleInput = document.getElementById('Current-Module').value
	let tnCInput = document.getElementById('tnC').checked

	let error = false

	if( firstNameInput && firstNameInput.match(/[a-z]/i)&&firstNameInput.length>=3){

		document.getElementById('first-name-valid').style.display = 'block'
		document.getElementById('first-name-invalid').style.display = 'none'
	} else {
		document.getElementById('first-name-invalid').style.display = 'block'
		document.getElementById('first-name-valid').style.display = 'none'
		error = true
	}

	if(lastNameInput && lastNameInput.match(/[a-z]/i)&&lastNameInput.length>=3){
		document.getElementById('last-name-valid').style.display = 'block'
		document.getElementById('last-name-invalid').style.display = 'none'
	} else {
		document.getElementById('last-name-invalid').style.display = 'block'
		document.getElementById('last-name-valid').style.display = 'none'
		error = true
	}

	if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
		emailInput.indexOf('@') !== 0
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
		error = true
  }

	if(phoneInput &&phoneInput.length===10) {
		document.getElementById("Phone-Number-valid").style.display = "block";
		document.getElementById("Phone-Number-invalid").style.display = "none";
	} else {
		document.getElementById("Phone-Number-invalid").style.display = "block";
		document.getElementById("Phone-Number-valid").style.display = "none";
		error = true
	}

	if(batchInput !== 'None'){
		document.getElementById('Batch-No-valid').style.display = "block";
		document.getElementById('Batch-No-invalid').style.display = "none";
	} else {
		document.getElementById('Batch-No-invalid').style.display = "block";
		document.getElementById('Batch-No-valid').style.display = "none";
		error = true
	}
	if(ModuleInput !== 'None'){
		document.getElementById('Current-Module-valid').style.display = "block";
		document.getElementById('Current-Module-invalid').style.display = "none";
	} else {
		document.getElementById('Current-Module-invalid').style.display = "block";
		document.getElementById('Current-Module-valid').style.display = "none";
		error = true
	}

	if(tnCInput) {
		document.getElementById("tnC-invalid").style.display = "none";
	} else {
		document.getElementById("tnC-invalid").style.display = "block";
		error = true
	}

	if(!error) {
		alert('Your details have been saved successfully!')
		document.getElementById('first-name').value = ''
		document.getElementById('last-name').value = ''
		document.getElementById('email').value = ''
		document.getElementById('Phone-Number').value = ''
		document.getElementById('Batch-No').value = 'None'
		document.getElementById('Current-Module').value = 'None'
		document.getElementById('tnC').checked = false

		document.getElementById('first-name-valid').style.display = 'none'
		document.getElementById('last-name-valid').style.display = 'none'
		document.getElementById("email-valid").style.display = "none"
		document.getElementById("Phone-Number-valid").style.display = "none";
		document.getElementById('Batch-No-valid').style.display = "none";
		document.getElementById('Current-Module-valid').style.display = "none";
	}
}

	