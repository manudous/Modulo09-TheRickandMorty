import "./styles.css";

import * as DataBusiness from "./data-business";
import * as Utils from "./utils";

DataBusiness.getActors().then(users => {
  const element = document.getElementById('root');
  element.innerText = "";

  const nodes = [];

  for (let user of users) {
    const node = Utils.createCharacterRow(user);

    node.addEventListener('click', characterDetail);
    function characterDetail(id) {
      // console.log(user)
      DataBusiness.getActor(user.id).then(user => {
        Utils.showCharacter(user);      
      })
      
      
    }

    nodes.push(node);

  }

  for (let node of nodes) {
    document.getElementById('root').append(node);
    
  }
})



