const nodeFetch = require('node-fetch');

const scopes = require('../scopes');

class Adapter {
  constructor(sandboxUrl, prodUrl) {
    this.scope = scopes.SANDBOX;
    this.token = '';
    this.SANDBOX_URL = sandboxUrl;
    this.PROD_URL = prodUrl;
  }

  getUrl() {
    if (this.scope === scopes.PROD) {
      return this.PROD_URL;
    }
    return this.SANDBOX_URL;
  }

  performRequest(url) {
    try {
      console.log(this.getUrl() + url, {
        authorization: `Bearer ${this.token}`,
      });

      return nodeFetch(this.getUrl() + url, {
        headers: {
          authorization: `Bearer ${this.token}`,
        },
      }).then(res => res.json());
    } catch (e) {
      console.log('error', e);
      return {};
    }
  }

  withScope(scope) {
    this.scope = scope;
    return this;
  }

  withToken(token) {
    this.token = token;
    return this;
  }
}

module.exports = Adapter;
