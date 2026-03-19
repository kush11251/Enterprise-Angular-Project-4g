// User adapter for data transformation
import { IUser } from '../models/user.model';
export class UserAdapter {
  adapt(user: any): IUser {
    return {
      id: user.id,
      name: user.name,
      email: user.email
    };
  }
}