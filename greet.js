let obj1={
    name:"Ishaan",
    greet: function(){
        console.log("Hello from", this.name);
    }
};

let obj2={
    name:"Simran"
};
obj1.greet();
obj2.greet = obj1.greet;
obj2.greet();

let greetFunc =obj1.greet;
greetFunc()