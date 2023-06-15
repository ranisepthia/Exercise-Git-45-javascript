const password = '12345'
const validPassword = "123456"
var retry =0;

if(password==validPassword){
    console.log("Selamat datang!")
}   else {
    console.log("Password Salah, cobalagi!")
}

retry=1

if(password==validPassword){
    console.log("Selamat datang!")
    retry++;
}   else if(retry<3){
    console.log("Ulangi!")
}   else{
    console.log("Batas pengisian")
}