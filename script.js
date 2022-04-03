function operate(data) {
  let val = document.getElementById('val').innerHTML;
  if (data) {
    document.getElementById('val').innerHTML = Number(val) + 1;
    let grandTotal = 199 * Number(val);
    document.getElementById('subtotal').innerHTML = `$${grandTotal}.00`;
    document.getElementById('total').innerHTML = `$${grandTotal + 10}.00`;
  } else {
    document.getElementById('val').innerHTML = Number(val) - 1;
    let grandTotal = 199 * Number(val) - 199;
    document.getElementById('subtotal').innerHTML = `$${grandTotal}.00`;
    document.getElementById('total').innerHTML = `$${grandTotal + 10}.00`;
  }
}
