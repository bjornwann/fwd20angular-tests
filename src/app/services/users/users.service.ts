import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  users: Array<object> = [
      {
        id:'1',
        name: 'Bjorn',
        role: 'Teacher',
        pokemon: 'Blastoise'
      },
      {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      }
    ];
  constructor() { }

  all(): Array<object> {
    return this.users;
  }

  findOne(id: string): object {
    const user = this.users.find((u:any) => {
      return u.id === id;
    });
    return user;
  }
}
