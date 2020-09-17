const Account = function(obj) {
  this.login = obj.login;
  this.email = obj.email;
}

Account.prototype.getInfo = function() {
  console.log(`Login ${this.login}, email: ${this.email}`);
}

const mango = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
const poly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});

mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof
poly.getInfo(); // Login: Poly, Email: poly@mail.com
console.log(Account.prototype.getInfo); // function