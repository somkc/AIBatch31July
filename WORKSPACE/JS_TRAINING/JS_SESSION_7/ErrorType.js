function testError(value){
if(value==1){
    throw new ReferenceError("Variable does not exist");
}
if(value ==2){
    throw new TypeError("invalid data type");
}
if(value==3){
    throw new RangeError("value is not in the range");
}
if(value==4){
    throw new Error("Error");
}

if(value==5){
    throw new SyntaxError("Syntax error");
}
}


testError(5);