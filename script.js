
function translatePigLatin(str) {
  if (!/[aeiou]/i.test(str)) {
    return str + "ay";

  } else if (/[aeiou]/i.test(str[0])) {
    return str + "way";

  } else {
    const arr = [...str];

    while (!/[aeiou]/i.test(arr[0])) {
      arr.push(arr.shift());
    }

    return arr.join("") + "ay";
  }


}
console.log(translatePigLatin("swefhg"));
console.log(translatePigLatin("dfg4557"));
console.log(translatePigLatin("swe76&"));
console.log(translatePigLatin("*^89fhg"));
console.log(translatePigLatin("swe-_+fhg"));
console.log(translatePigLatin("qwr456-fhg"));

