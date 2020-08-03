const tls = require("tls");
const michromaCredentials = require("./michromaCredentials");
const paltaCredentials = require("./paltaCredentials");

const certs = {
  "palta.tech": paltaCredentials,
  "michroma.co": michromaCredentials,
};

const getSecureContexts = (certs) => {
  const certsToReturn = {};

  Object.keys(certs).map(
    (serverName) =>
      (certsToReturn[serverName] = tls.createSecureContext(certs[serverName]))
  );

  return certsToReturn;
};

const credentials = {
  SNICallback: (servername, cb) => {
    if (cb) {
      cb(null, getSecureContexts(certs)[servername]);
    } else {
      return getSecureContexts(certs)[servername];
    }
  },
};

module.exports = credentials;
