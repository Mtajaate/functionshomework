// Je gaat functies schrijven die we kunnen hergebruiken om sommige emailadressen te checken. Nu zul je gaan merken hoe handig functies kunnen zijn!
// Je zult hier methoden van het String Object voor nodig hebben, dus pak de paragraaf op EdHub over het String Object er even bij.


/* Opdracht  1 */
// Schrijf een functie genaamd getEmailDomain, die een emailadres verwacht en de domeinnaam teruggeeft. Een domeinnaam is hetgeen dat na het @ in het adres staat
// ---- Verwachte uitkomsten:
// getEmailDomain("n.eeken@novi-education.nl") geeft novi-education.nl
// getEmailDomain("t.mellink@novi.nl") geeft novi.nl
// getEmailDomain("a.wiersma@outlook.com") geeft outlook.com
function getEmailDomain(email){
    const getIndexNumber = email.indexOf("@");

    const domain = email.substring(getIndexNumber + 1);

 return domain;


}
const changedEmail = getEmailDomain("n.eeken@novi-education.nl");
const changedEmail1 = getEmailDomain("t.mellink@novi.nl");
const changedEmail2 = getEmailDomain("a.wiersma@outlook.com");

console.log(changedEmail);
console.log(changedEmail1);
console.log(changedEmail2);


/* Opdracht  2 */
// Schrijf een functie genaamd typeOfEmail, die een emailadres verwacht. De functie checkt of het emailadres een novi domein heeft (medewerker), een novi-education domein (student), of extern domein (zoals gmail of outlook)
// ---- Verwachte uitkomsten:
// typeOfEmail("n.eeken@novi-education.nl") geeft "Student"
// typeOfEmail("t.mellink@novi.nl") geeft geeft "Medewerker"
// typeOfEmail("novi.nlaapjesk@outlook.com") geeft geeft "Extern" <-- deze moet het ook doen!
// typeOfEmail("a.wiersma@outlook.com") geeft "Extern"

function typeOfEmail(emails){
    const getIndexNumber = emails.indexOf("@");
    const domain = emails.substring(getIndexNumber + 1)

    if(domain === "novi-education.nl") {
         return "Student"
    } else if(domain === "novi.nl"){
        return "Medewerker"
    } else {
       return "Extern"
    }


}

const check = typeOfEmail("n.eeken@novi-education.nl");
const check1 = typeOfEmail("t.mellink@novi.nl");
const check2 = typeOfEmail("novi.nlaapjesk@outlook.com");
const check3 = typeOfEmail("a.wiersma@outlook.com");

console.log(check);
console.log(check1);
console.log(check2);
console.log(check3);

/* Opdracht  3 */
// Schrijf een functie genaamd checkEmailValidity, die een emailadres verwacht en checkt of het emailadres valide is. De functie returned true of false, afhankelijk van de uitkomst.
// Een emailadres is valide wanneer:
// * Er een @ in voorkomt
// * Er géén , in voorkomt
// * Er géén . in voorkomt als allerlaatste karakter (dus hotmail.com is valide, net als outlook.nl, maar outlooknl. niet)
// ---- Verwachte uitkomsten:
// checkEmailValidity("n.eeken@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("tessmellink@novi.nl") geeft true - want @ en punt op de juiste plek
// checkEmailValidity("n.eekenanovi.nl") geeft false - want geen @
// checkEmailValidity("n.eeken@novinl.") geeft false - want de punt mag niet als laatst
// checkEmailValidity("tessmellink@novi,nl") geeft false - want er staat een komma in

function checkEmailValidity (emailadres){
    const containsMonkeyTail = emailadres.includes("@");
    const containsComma = emailadres.includes(",");
    const containsDot= emailadres.lastIndexOf(".");

    const checkDot = containsDot !== emailadres.length -1

    if (containsMonkeyTail && !containsComma && checkDot) {
        return true
    }else{
        return false
    }

}

const validity = checkEmailValidity("n.eeken@novi.nl");
const validity2 = checkEmailValidity("tessmellink@novi.nl");
const validity3 = checkEmailValidity("n.eekenanovi.nl");
const validity4 = checkEmailValidity("n.eeken@novinl.");
const validity5 = checkEmailValidity("tessmellink@novi,nl");

console.log(validity);
console.log(validity2);
console.log(validity3);
console.log(validity4);
console.log(validity5);