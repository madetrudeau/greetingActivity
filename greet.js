greet = (name) => {
    if (name === null){
        return "Hello, there!"
    }
    if (name.toUpperCase() === name) {
        return "HELLO " + name + "!";
    } 
    if (name.isArray) {
        let nameArray = ['Hello '];
        for (let i = 0; i < name.length(); i++){
            nameArray.push(name[i])
        }
        return 'Hello' + nameArray.join(', ')
    }  
    else {
        return "Hello, " + name;
    }
}
