import {
    CanActivate,
    ExecutionContext,
    Injectable,
    UnauthorizedException,
  } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
  import { JwtService } from '@nestjs/jwt';
  import { Request } from 'express';
import { JWTPayloadDto } from 'src/dto/jwtpayload.dto';
  
  @Injectable()
  export class JwtGuard implements CanActivate {
    constructor(private jwtService: JwtService, private configService: ConfigService) {}
    async canActivate(context: ExecutionContext): Promise<boolean> {
      const request = context.switchToHttp().getRequest();
      const token = this.extractTokenFromCookie(request);
  
      if (!token) throw new UnauthorizedException();
  
      try {
        const payload: JWTPayloadDto = await this.jwtService.verifyAsync(token, {
          secret: this.configService.get("JWTSECRET")
        });
        request['user'] = payload;
      } catch {
        throw new UnauthorizedException();
      }
      return true;
    }
  
    private extractTokenFromCookie(request: Request) {
     return request.cookies?.["access_token"] ? request.cookies?.["access_token"] : undefined;
    }
  }
  