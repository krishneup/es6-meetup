const members = ['Ram','shyam','gyan','sita','gita','rita']

const[a,b,...rest] = members;


console.log(a);
console.log(b);
console.log(rest);



const PersonName = {
    name: 'Rajesh Hamal',
    profession: 'actor',
    phone_number : '100',
    moredata: {
        married:'yes'
    }
}

const {name,phone_number,moredata : {married}} = PersonName


function printUser({name}) {
    console.log('functional: ' +name )
}


printUser(PersonName)


console.log(name);
console.log(married);