import { TestBed } from '@angular/core/testing';

import { UsersService } from './users.service';

describe('UsersService', () => {
  let usersService: UsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    usersService = TestBed.inject(UsersService);
  });

  it('should be created', () => {
    expect(usersService).toBeTruthy();
  });

  it('should return all users', ()=> {
    const userResponse = [
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
    expect(usersService.all()).toEqual(userResponse);
  })

  describe('findOne', () => {
    it('should return single user', ()=> {
      const userResponse = {
        id: '2',
        name: 'Bob',
        role: 'Developer',
        pokemon: 'Charizard'
      };
      expect(usersService.findOne('2')).toEqual(userResponse);
    })
  })

});
