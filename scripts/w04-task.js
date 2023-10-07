/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = 
    {
        name: "Brandon Cushenberry",
        photo: "images/bc-profile-small.jpg",
        favoriteFoods: ["Brownies", " Ice Cream", " PB & Chocolate Shakes", " Tacos", " Burritos"],
        hobbies: ["Watching movies/shows", "Exploring the city", "Playing games", "Software development",
        "Anything tech-related"],
        placesLived: []
    };

/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "Vancouver, Canada",
        length: "0.5 years",
    }
);

myProfile.placesLived.push(
    {
        place: "Seoul, Korea",
        length: "5 years",
    }
);

myProfile.placesLived.push(
    {
        place: "Tokyo, Japan",
        length: "11 years"
    }
);

console.log(myProfile.placesLived)
/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.getElementById('photo').src = myProfile.photo;
document.getElementById('photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => 
    {
        let li = document.createElement('li');
        li.textContent = food;
        document.querySelector('#favorite-foods').appendChild(li);
    }
);

/* Hobbies List */
myProfile.hobbies.forEach(hobby => 
    {
        let li = document.createElement('li');
        li.textContent = hobby;
        document.querySelector('#hobbies').appendChild(li);
    }
);

/* Places Lived DataList */
myProfile.placesLived.forEach(object => 
    {
        let dt = document.createElement('dt');
        dt.textContent = object.place;

        let dd = document.createElement('dd');
        dd.textContent = object.length;

        document.querySelector('#places-lived').append(dt);
        document.querySelector('#places-lived').append(dd);
    }
);