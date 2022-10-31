greet = (name) => {
    if (name === null){
        return "Hello, there!"
    }
    if (name.upper() === true) {
        return "HELLO" + name;
    }   
    else{
        return "Hello, " + name;
    }
}
