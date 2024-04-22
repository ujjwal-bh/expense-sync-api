import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth.module';
import { ConfigModule } from '@nestjs/config';
import config from './Config/config';

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true,
    load: [config]
  }),
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
