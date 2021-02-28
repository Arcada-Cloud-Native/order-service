const requestUserData = userId => {
    // TODO:
    // skicka GET req till users APIn för o få ut all
    // info om användaren med det här ID
    let firstName = "first"; 
    let lastName = "last";
    let email = "email3@email.com"; 
    let address = "streer";
    let town = "town"; 
    let state = "state";
    let phoneNumber = "12334566";
    let zipCode = 12345;
    
    return {firstName, lastName, email, address, town, state, phoneNumber, zipCode}
}
module.exports = requestUserData;
