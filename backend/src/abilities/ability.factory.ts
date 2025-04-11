import { Injectable } from '@nestjs/common';
import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  InferSubjects,
} from '@casl/ability';
import { Role } from '@prisma/client';

export type Actions = 'manage' | 'read' | 'create' | 'update' | 'delete';
export type Subjects = 'User' | 'Article' |'all';
export type AppAbility = Ability<[Actions, Subjects]>;

@Injectable()
export class AbilityFactory {
  createForUser(user: { role: Role }): AppAbility {
    const { can, build } = new AbilityBuilder<AppAbility>(
      Ability as AbilityClass<AppAbility>,
    );
    if (user.role === Role.ADMIN) {
      can('manage', 'all');
    }
    //  else {
    //   can('read', 'User');
    // }

    return build();
  }
}
