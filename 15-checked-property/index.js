// Chapter 15: Checked properties

document.getElementById('my-button').onclick = function() {
  const myCheckbox = document.getElementById('my-checkbox');
  if (myCheckbox.checked) {
    console.log('You are subscribed!');
  } else { 
    console.log('You are unsubscribed.');
  }

  const visaOpt = document.getElementById('visa-opt');
  const mastercardOpt = document.getElementById('mastercard-opt');
  const amexOpt = document.getElementById('amex-opt');

  if (visaOpt.checked) {
    console.log('Paid with VISA.');
  } else if (mastercardOpt.checked) {
    console.log('Paid with Mastercard.');
  } else if (amexOpt.checked) {
    console.log('Paid with American Express.');
  } else { 
    console.log('You must select a payment type.');
  }
}