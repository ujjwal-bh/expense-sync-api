export default () => ({
    PORT: process.env.PORT || 5000,
    JWTSECRET: process.env.JWTSECRET,
    JWTREFRESHSECRET: process.env.JWTREFRESHSECRET,
    TOKENEXPIRYSTR: process.env.TOKENEXPIRYSTR,
    REFRESHTOKENEXPIRYSTR: process.env.REFRESHTOKENEXPIRYSTR

  });