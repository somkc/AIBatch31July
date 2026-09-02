class bank{
    location="newyork";
    roi(){
        console.log("roi is 4.3");
    }
}
class westpac extends bank{

    credit(){
        console.log("credit interest is 6.0");
    }
}
class westJunior extends westpac{


}

let w = new westpac();
w.credit();
w.roi();
console.log(w.location);