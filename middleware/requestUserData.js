const requestUserData = userId => {
    // TODO:
    // skicka GET req till users APIn för o få ut all
    // info om användaren med det här ID
    let user_id = "123jd1rjf1";
    let firstName = "first"; 
    let lastName = "last";
    let email = "email3@email.com"; 
    let address = "streer";
    let town = "town"; 
    let state = "state";
    let phoneNumber = "12334566";
    let zipCode = 12345;
    
    return {user_id, firstName, lastName, email, address, town, state, phoneNumber, zipCode}
}
module.exports = requestUserData;
