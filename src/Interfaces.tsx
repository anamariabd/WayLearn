export interface User {
  id: Number;
  username: String;
  roles: String;
  accessToken: String;
  tokenType: String;
}

export interface profile{
  id: Number,
  firstName: String,
  lastName: String,
  email: String
}

export interface Group{
  id?: Number;
  number: String;
  amount: Number;
  teacher?: String;
  subjects?: String;
  listStudent?: String;
}

export interface CreateGroup{
    idTeacher:Number,
    grupo: Group
}

export interface Estudiante {
  Nombre: string;
  Apellido: string;
  Id: String;
}