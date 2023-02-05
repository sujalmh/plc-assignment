const inputs = document.querySelectorAll('.form-control');
var verified = 0;
const patterns = {
  name: /^[a-zA-Z\s]*$/,
  emailAddress: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  number: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
  message: /^[a-zA-Z]*$/
};

inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    validate(e.target, patterns[e.target.attributes.id.value]);

  });
});


function restrictAlphabets(e) {
  var x = e.which || e.keycode;
  if ((x >= 48 && x <= 57))
      return true;
  else
      return false;
}

function sleep(ms) {
  return new Promise(
    resolve => setTimeout(resolve, ms)
  );
}


async function onClick(){
  var element = document.querySelector('#submitButton');
  element.classList.remove("unchecked");
  var element1 = document.querySelector('#checkmark');
  element1.classList.remove("checkmark");
  element.classList.add("clicked");
  await sleep(5000);
  element.classList.add("unchecked");
  element1.classList.add("checkmark");
  element.classList.remove("clicked");

}

function validate(field, regex) {
  if (regex.test(field.value)) {
    field.className = 'form-control is-valid';
  } else {
    field.className = 'form-control is-invalid';
  }
  if (field.classList.contains('is-valid')&& (field.value>0)) {
    verified+=1;
  }
  else{
    verified=0;
  }
  
  if(verified>0){
    document.querySelector('#submitButton').disabled = false;
  }
  console.log(verified)

}

