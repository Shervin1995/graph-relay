import USER from "../DataBase/connection"
  
  //
  class Friend {
    constructor({id, fname, age, gender, contacts}) {
      this.id = id;
      this.fname = fname; 
      this.age = age; 
      this.gender = gender; 
      this.contacts = contacts; 
    }
  }


//
const getOneFriend = async ({id}) => {
    
  const user = await USER.findOne({
    where: {id}
  });

  if (user) return new Friend(user); else return null;

}

//
const createFriend = async ({input}) => {
    var id = await USER.max('id', {}) + 1
    USER.create({id , ...input})
    return new Friend({id , ...input});
}
 
//
const updateFriend = async ({input}) => { 
 
  return USER.update({
    fname: input.fname
  },{
    where: {id: input.id}
  }).then((x) => {  

    if (x[0] == 1) { 
      return new Friend(input);
    } else {
      return new Friend({id: null});
    }

  }); 

}

//
function deleteFriend({id}) { 

  //
  return USER.destroy({
    where: {id}
  }).then(res => {

    if (res == 1) {
      return "Deleted Successfully!"
    } else {
      return "Didn't deleted!"
    }
    
  })

  //

}

//
function getAliens() {
  return USER.findAll({})
}

// ----------------------------------
// 
// ----------------------------------
var resolvers = {
  getOneFriend,
  getAliens,
  createFriend, 
  updateFriend,
  deleteFriend
};


//
export default resolvers