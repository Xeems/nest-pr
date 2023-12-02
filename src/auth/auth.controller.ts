import { Controller, Get, Req, UseGuards, Post, Request } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { JwtService } from '@nestjs/jwt';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService,
        private readonly jwtService: JwtService) { }

    @Get('github')
    @UseGuards(AuthGuard('github'))
    async githubLogin(@Req() req) {
        
    }

    @Get('github/callback')
    @UseGuards(AuthGuard('github'))
    async githubCallback(@Req() req) {
        return this.authService.handleGithubCallback(req)
    }

    @Post('local')
    @UseGuards(AuthGuard('local'))
    async localLogin(@Request() req){
        return this.authService.login(req.user);
    }

}
