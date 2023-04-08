import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService {
  private prisma = new PrismaClient();
  member: any;

  constructor() {
    this.member = this.prisma.member;
  }

  async createMember(data: any) {
    return this.prisma.member.create({
      data,
    });
  }

  async findUniqueMember(args: any) {
    return this.prisma.member.findUnique(args);
  }

  async updateMember(args: any) {
    return this.prisma.member.update(args);
  }

  async deleteMember(where: any) {
    return this.prisma.member.delete({
      where,
    });
  }

  async findManyMembers() {
    return this.member.findMany();
  }
}
