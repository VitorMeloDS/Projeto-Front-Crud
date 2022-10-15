export class Config {
  private baseUrl: string;

  constructor(){
    this.baseUrl = 'https://rocky-woodland-82968.herokuapp.com';
  }

  getApiDomain(){
    return this.baseUrl;
  }
}
