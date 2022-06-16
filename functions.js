// Oefening: stap 1

const functions = {
    isNull: function() {
      console.log("Hallo");

      return null;

    },

    checkValue: function(x) {
      return x;
    },
    createUser: function() {
      const user = { 
        firstName: 'Brad' 
      };
      user['lastName'] = 'Traversy';
      return user;
    }
  };
  
  
  module.exports = functions;

