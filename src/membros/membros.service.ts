import { Injectable } from '@nestjs/common';
import { Membro } from './membro.model';

@Injectable()
export class MembrosService {
  private membros: Membro[] = [];

  findAll(): Membro[] {
    return this.membros;
  }

  findById(id: number): Membro {
    return this.membros.find(membro => membro.id === id);
  }

  create(membro: Membro): Membro {
    membro.id = this.membros.length + 1;
    this.membros.push(membro);
    return membro;
  }

  update(id: number, membro: Membro): Membro {
    const index = this.membros.findIndex(membro => membro.id === id);
    this.membros[index] = {...membro, id};
    return this.membros[index];
  }

  delete(id: number): void {
    this.membros = this.membros.filter(membro => membro.id !== id);
  }
}

