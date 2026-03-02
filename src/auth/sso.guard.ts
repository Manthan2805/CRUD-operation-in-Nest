import { Injectable, CanActivate, UnauthorizedException } from '@nestjs/common';

@Injectable()
export class SsoGuard implements CanActivate {
  canActivate(): boolean {
    return true;
    // Non-working SSO: Always throws error to simulate failed login/not configured
    throw new UnauthorizedException('SSO Login required. Placeholder logic is currently non-working.');
  }
}