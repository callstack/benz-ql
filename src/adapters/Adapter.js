import nodeFetch from 'node-fetch';
import scopes from '../scopes';

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
    return nodeFetch(this.getUrl() + url, {
      headers: {
        authorization: `Bearer ${this.token}`,
      },
    }).then(res => res.json());
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

export default Adapter;
