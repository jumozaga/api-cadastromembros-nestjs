import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Membro } from './membro.model';
import { MembrosService } from './membros.service';

@Controller('membros')
export class MembrosController {
  constructor(private membrosService: MembrosService) {}

  @Get()
  findAll(): Membro[] {
    return this.membrosService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: number): Membro {
    return this.membrosService.findById(id);
  }

  @Post()
  create(@Body() membro: Membro): Membro {
    return this.membrosService.create(membro);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() membro: Membro): Membro {
    return this.membrosService.update(id, membro);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.membrosService.delete(id);
  }
}

