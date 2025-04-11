import { AuthGuard } from './auth.guard';
import { JwtService } from '@nestjs/jwt';

describe('AuthGuard', () => {
  it('should be defined', () => {
    const mockJwtService = {
      verifyAsync: jest.fn(),
    } as unknown as JwtService;

    const guard = new AuthGuard(mockJwtService);
    expect(guard).toBeDefined();
  });
});
