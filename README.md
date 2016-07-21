# node-ldap-server
## Setup
1. Clone the repo
2. `npm install`
3. Add the following environment variables:
  * `SECRET`: Any secure passphrase will do
  * `LDAP_BIND_DN` and `LDAP_BIND_CREDENTIALS`: Credentials for LDAP service account; given out on a need-to-know basis

And you're all set! `node server.js` to run the server.
