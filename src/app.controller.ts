import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/auth')
  @UseGuards(AuthGuard('google'))
  async googleAuth() {
    console.log('login with google');
  }

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuthRedirect(@Req() req) {
    return this.appService.googleLogin(req);
  }

  @Get('/hello')
  getHello() {
    return { message: 'Hello Word' };
  }
}
