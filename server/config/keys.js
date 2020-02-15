// keys.js

if (process.env.NODE_ENV === 'production') {
   // return production keys
   module.exports = require('./prod');
} else {
   // return dev keys
   module.exports = require('./dev');
}

// production
// mongodb+srv://myuser:myuserpass@cluster0-rkogh.mongodb.net/test?retryWrites=true&w=majority

//id: 182224866699-2u0qa9j3p8uih3o6nigfmof6gvagqlmg.apps.googleusercontent.com
//secret: yzJTO7Vtbr6QJtlcyiEAA6ni
