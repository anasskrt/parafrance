import { Role } from '@prisma/client';
import { Request } from 'express';

export interface UserRequest extends Request {
  user: {
    sub: number;
    email: string;
    role: Role;
  };
}
