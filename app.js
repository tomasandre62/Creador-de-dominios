function unir (){
    let pronoun = ['the', 'our'];
    let adj = ['great', 'big'];
    let noun = ['jogger', 'racoon'];
    for (i = 1; i <= 8; i++){
      if (i == 1){
        console.log(pronoun[0]+adj[0]+noun[0]+".com")
      }
      else if (i == 2){
        console.log(pronoun[0]+adj[0]+noun[1]+".com")
      }
      else if (i == 3){
        console.log(pronoun[0]+adj[1]+noun[0]+".com")
      }
      else if (i == 4){
        console.log(pronoun[0]+adj[1]+noun[1]+".com")
      }
      else if (i == 5){
        console.log(pronoun[1]+adj[0]+noun[0]+".com")
      }
      else if (i == 6){
        console.log(pronoun[1]+adj[0]+noun[1]+".com")
      }
      else if (i == 7){
        console.log(pronoun[1]+adj[1]+noun[0]+".com")
      }
      else {
        console.log(pronoun[1]+adj[1]+noun[1]+".com")
      }
    }
  }
  unir() 