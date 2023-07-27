export class Config {
  private baseUrl: string;

  constructor(){
    // this.baseUrl = 'https://rocky-woodland-82968.herokuapp.com';
    this.baseUrl = 'https://crud-mongodb-pweb-production.up.railway.app';
  }

  getApiDomain(){
    return this.baseUrl;
  }
}
