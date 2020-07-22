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
    const ctx = getSecureContexts(certs)[servername];

    if (!ctx) {
      console.log(`Not found SSL certificate for host: ${servername}`);
    } else {
      console.log(
        `SSL certificate has been found and assigned to ${servername}`
      );
    }

    if (cb) {
      cb(null, ctx);
    } else {
      return ctx;
    }
  },
};

module.exports = credentials;
