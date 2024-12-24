const user={
    fn:"sim",
    ln:"sah",
    age:19,
    // add:""
}
console.log(user.add && user.add.city);
console.log("" || 9);
console.log(user?.add?.());//checks wheather exits or not.. ye nhi dekhta truthy h ya falsy..


//oop and factory function
function create(first,last,a){
    const using={
first,
last,a,
faltu(){
    return 2
}
    }
    return using
}


function fake(){
    console.log(this)
    return 2
}
function cr(first,last,a){
    const using={
first,
last,a,
fake
    }
    return using
}



// mjdates p-1
Date.now()//static methods(function s function call krrhe h)
mal='9/8/2005'.split('/').reverse().join('/')
// accepted format new Date('mm/dd/yyyy' or 'yyyy/mm/dd') 

