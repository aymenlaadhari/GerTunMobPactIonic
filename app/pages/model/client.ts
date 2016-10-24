export class Clients {
  public description: string;
  public name: string;
  public image: string;
  public country: string;
  public products: string;
  public revenues: string;
  

  constructor(name: string, description: string, image: string, country: string, products: string, revenues: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.country = country;
    this.products = products;
    this.revenues = revenues;
  }
}