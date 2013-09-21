var bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "555-5555",
  email: "bill@msoft.com"
};

var steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "555-5555",
  email: "steve@apple.com"
};

var contacts = [bill,steve];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
	var contactsLength = contacts.length;
	for (var i = 0; i < contactsLength; i++) {
		printPerson(contacts[i]);
	}
}


var search = function(name) {
  for(var prop in contacts) {
    if(contacts[prop].firstName === name) {
      console.log(contacts[prop]);
      return contacts[prop];
    }
  }
};

function add(firstName,lastName,number,email){
    var newPerson = {
        firstName: firstName,
        lastName: lastName,
        number: number,
        email: email
    };
    contacts[contacts.length]=newPerson;
}


//list(contacts);
//search("Steve");

//add("sid","g","1@2.3","1234");