
exports.config = {

  // Two locations are specified: one for the static site,
  // and one for the downloads area.  Both paths are relative
  // to the given rootServerPath.
  rootServerPath: __dirname,
  staticSiteLoc: 'restricted',
  homePage: 'index.html',
  downloadsLoc: 'ark',

  // This is the anchor text shown to the user to give access
  // to the static site.
  staticSiteName: 'my site',

  // If passwordIsUsername is true, the login screen will have only
  // one <input> just for simplicity.
  passwordIsUsername: true,

  // Next we set up a user list.
  // If passwordIsUsername is false, then this is list of space-delimted
  // user-pwd pairs.  Passwords are plaintext here, but they're not plaintext
  // in the server code, in case you want to hook it up to a real database.
  userSpecs: ['foobar'],

  // Lastly, configure some standard web server stuff.
  cookieSecret: 'Blue canary in the outlet by the light switch.',
  port: 3000
};
