function scuberGreetingForFeet(ride){
  if(ride <= 400) {
    return("This one is on me!");
  }else if(ride > 2500){
    return('No can do.')
  }else if(ride > 2000){
    return('I will gladly take your thirty bucks.')
  }
}

function ternaryCheckCity(destination) {
  return destination === "NYC" ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(amount){
  switch (amount) {
    case "generous":
      return("Thank you so much.")
      break
    case "not as generous":
      return("Thank you.")  
      break
    default:
      return("Bye.")

  }
}