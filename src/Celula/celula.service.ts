import { Injectable, Query } from '@nestjs/common';
import { Celula, Prisma } from '@prisma/client';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class CelulaService {
  constructor(private prisma: PrismaService) {}
  async listarCelulas(
    @Query()
    {
      take,
      skip,
      where,
      orderBy = { dataCriacao: 'desc' },
    }: {
      take?: number;
      skip?: number;
      where?: Prisma.CelulaWhereInput;
      orderBy?: Prisma.CelulaOrderByWithRelationInput;
    },
  ): Promise<Celula[]> {
    return await this.prisma.celula.findMany({
      where,
      take,
      skip,
      orderBy,
    });
  }

  async cadastrarCelula({ titulo }: { titulo: string }): Promise<Celula> {
    return await this.prisma.celula.create({
      data: {
        titulo,
      },
    });
  }

  async atualizarCelula({
    id,
    titulo,
  }: {
    id: string;
    titulo: string;
  }): Promise<Celula> {
    return await this.prisma.celula.update({
      where: {
        id,
      },
      data: {
        titulo,
      },
    });
  }
  async deletarCelula({ id }: { id: string }): Promise<Celula> {
    return await this.prisma.celula.delete({
      where: {
        id,
      },
    });
  }
}
