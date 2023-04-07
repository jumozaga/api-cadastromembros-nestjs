import { Module } from '@nestjs/common';
//import { AxiosModule } from '@nestjs/axios';
import { MembrosModule } from './membros/membros.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [ 
     
     MembrosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
