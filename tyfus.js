let persons = []


let jessy = {
    name : 'jessy',
    age : 28,
    car: 'civic'
}

let remy = {
    name : 'remy',
    age : 27,
    car: 'corsa'
}

console.log(jessy.car) // Civic


persons.push(jessy, remy)

console.log(Object.values(jessy));





Object.values(persons).forEach(person => {
    let markup = document.createElement('p')

    markup.innerHTML = `${person.name} - ${person.age} - ${person.car}`

    document.body.appendChild(markup)


})

// push voegt het toe aan je array 

// object.values toont de waardes die in je object staan als array

// object.keys toont de keys die in de object staan als array 

//  array.forEach loopt over een array. hierna kan je met de waardes iets doen.

// document.createElement() maakt een HTML element aan. de soort element die je wilt vul je in binnen () ook kan je een ul element toevoegen bvb.

// document.body.appendChild voegt een HTMl child toe aan je geselecteerde element.