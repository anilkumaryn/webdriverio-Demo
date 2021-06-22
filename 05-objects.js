const cookie={
    name :"Chocholate chip",
    isGluteFree : false,
    myCookie : function () {
        console.log("eating from cookie from object litterls"+this.name);
    }
};
cookie.myCookie();
cookie.name ="Butter cookies"
//console.log(Cookie.name);
cookie.isGluteFree = true;
//console.log(Cookie.isGluteFree)

class Cookie {
    //creating a constructor in class for assgining outside this class 
    constructor(name,isGluteFree){
        this.name= name;
        this.isGluteFree=isGluteFree;

    }
    //this is a method/function (inside a class doesnt need function keyword)
    eatCookie() {
        console.log("im eating inside class "+this.name ,"cookie ")

    }
}
//creating new objec or menthod for cookie class and passing parameters for this variables created in main class
const eatMyCookie = new Cookie("ragi", true);
// calling eatcookie which inside classs by newly created method
eatMyCookie.eatCookie();


