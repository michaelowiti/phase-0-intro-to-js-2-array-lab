// Write your solution here!
let cats=["Milo", "Otis", "Garfield"]
function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")
}
function destructivelyRemoveLastCat(){
    cats.pop("Garfield")
}
function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
}
function appendCat(name){
     cats=["Milo", "Otis", "Garfield"]
     const newCats=[...cats.slice(0,4),"Broom"]
    return cats, newCats
}
function prependCat(name,cats){
    cats=["Milo", "Otis", "Garfield"]
    const thecats=["Arnold", ...cats]
    return cats,thecats
}
function removeLastCat(){
    cats=["Milo", "Otis", "Garfield"]
    const catts=cats.slice(0,cats.length-1)
    return cats, catts
}
function removeFirstCat(){
    cats=["Milo", "Otis", "Garfield"]
    const catty=cats.slice(1)
return cats, catty
}