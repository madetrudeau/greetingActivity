greet = (name) => {
    if (name === null){
        return "Hello, there!"
    }
    if (name.toUpperCase() === name) {
        return "HELLO" + name;
    }   
    else{
        return "Hello, " + name;
    }
}
