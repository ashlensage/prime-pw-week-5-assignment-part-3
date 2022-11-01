console.log('***** Music Collection *****');
const collection = [];
function addToCollection(title, artist, yearPublished) {
    const newItem = {
        title, 
        artist, 
        yearPublished
    };
    collection.push(newItem);
    return newItem;
}

console.log('item added to collection:', addToCollection('Drivers license', 'Olivia Rodrigo', 2021));
console.log('item added to collection:', addToCollection('Coaster', 'Khalid', 2017));
console.log('item added to collection:', addToCollection('The Call', 'Regina Spektor', 2009));
console.log('item added to collection:', addToCollection('Hold Me While You Wait', 'Lewis Capaldi', 2019));
console.log('item added to collection:', addToCollection('Someone You Loved', 'Lewis Capaldi', 2019));
console.log('item added to collection:', addToCollection('Boys Like You', 'Anna Clendening', 2017));

console.log('collection:', collection);

function showCollection(array) {
    console.log('number of items in array:', array.length);
    for (let i = 0; i < array.length; i++) {
        console.log(`"${array[i].title}" by ${array[i].artist}, published in ${array[i].yearPublished}`);
    }
} 
showCollection(collection);

function findByArtist(artist) {
    const foundMatches = [];
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].artist === artist) {
            foundMatches.push(collection[i]);
        }
    }
    return foundMatches;
}

console.log('find a single artist:', findByArtist('Khalid'));
console.log('find artist multiple matches:', findByArtist('Lewis Capaldi'));
console.log('unable to find artist:', findByArtist('Selena Gomez'));
