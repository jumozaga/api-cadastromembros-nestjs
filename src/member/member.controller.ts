import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
} from '@nestjs/common';
import { PrismaService } from '../prisma.service';


@Controller('member')
export class MemberController {
  constructor(private readonly prismaService: PrismaService) {}

  @Post()
  async create(@Body() data: any) {
    return this.prismaService.member.create({ data });
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.prismaService.member.findUnique({
      where: { id: Number(id) },
    });
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: any) {
    return this.prismaService.member.update({
      where: { id: Number(id) },
      data: { ...data },
    });
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.prismaService.member.delete({
      id: Number(id),
    });
  }

  @Get()
  async findAll() {
    return this.prismaService.member.findMany();
  }
}

