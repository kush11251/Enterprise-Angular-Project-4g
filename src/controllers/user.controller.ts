// User controller for business logic
import { IUser } from '../models/user.model';
import { UserService } from '../services/user.service';
export class UserController {
  constructor(private userService: UserService) {}
  getUsers(): any {
    return this.userService.getUsers();
  }
}