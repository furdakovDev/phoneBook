export class Contact {
  public firstName: string;
  public lastName: string;
  public id?: string;
  public phone: string;
  public gender: string;

  constructor(firstName: string, lastName: string, id: string, phone: string, gender: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.phone = phone;
    this.gender = gender;
  }
}
