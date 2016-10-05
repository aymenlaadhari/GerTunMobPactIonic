export class Artikel {
  public description: string;
  public name: string;
  public image: string;
  public nummer: string;

  constructor(name: string, description: string, image: string, nummer: string) {
    this.name = name;
    this.description = description;
    this.image = image;
    this.nummer = nummer;
  }
}