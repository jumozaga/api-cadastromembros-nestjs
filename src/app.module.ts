import { Module } from '@nestjs/common';
//import { AxiosModule } from '@nestjs/axios';
// import { MembrosModule } from './membros/membros.module';
// import { PrismaService } from './prisma.service';
import { MemberController } from './member/member.controller';
import { PrismaService } from './prisma.service';

@Module({
  imports: [],
  controllers: [MemberController],
  providers: [PrismaService],
})
export class AppModule {}
