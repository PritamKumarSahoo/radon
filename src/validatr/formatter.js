const trim =function (){
    let nameTrim= "   functionUp   "
    console.log(nameTrim.trim())
}

const lowerCase = function(){
      let nameLowerCase="PRITAM KUMAR SAHOO"
      console.log("toLowercase:"+nameLowerCase.toLowerCase())
}
const upperCase = function(){
    let nameUpperCase="pritam kumar sahoo"
    console.log("toUppercase:"+nameUpperCase.toUpperCase())
}
module.exports.trim = trim
module.exports.lowerCase = lowerCase
module.exports.upperCase = upperCase