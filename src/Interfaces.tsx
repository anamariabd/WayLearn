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
  id?: number|null;
  number: String;
  amount: Number;
  teacher?: String;
  subjects?: String;
  listStudent?: String;
}

export interface course{
  IdCourse: string|null,
  selected: string|null
}

export interface CreateGroup{
    idTeacher:Number,
    grupo: Group
}

export interface Estudiante {
  firstName: string,
  lastName: string,
  email?: String,
  cc?: String,
  id: String;
}