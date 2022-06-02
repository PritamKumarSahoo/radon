const trim =function (){
    let nameTrim= "   functionUp   "
    console.log(nameTrim.trim())
}

const lowercase = function(){
      let nameLowerCase="PRITAM KUMAR SAHOO"
      console.log("toLowercase:"+nameLowerCase.toLowerCase())
}
const uppercase = function(){
    let nameUpperrCase="pritam kumar sahoo"
    console.log("toUppercase:"+nameUpperCase.toUpperCase())
}
module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase