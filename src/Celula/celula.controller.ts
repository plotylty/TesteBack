import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Celula } from '@prisma/client';
import { CelulaService } from './celula.service';

@Controller('Celula')
export class CelulaController {
  constructor(private readonly CelulaService: CelulaService) {}

  @Get()
  async listarCelulas(): Promise<{
    data: Celula[];
  }> {
    const data = await this.CelulaService.listarCelulas({});
    return {
      data,
    };
  }

  @Post()
  async cadastrarCelula(@Body() body: { titulo: string }): Promise<Celula> {
    return await this.CelulaService.cadastrarCelula({
      ...body,
    });
  }

  @Put(':id')
  async atualizarCelula(
    @Param('id') id: string,
    @Body() { titulo }: { titulo: string },
  ): Promise<Celula> {
    return await this.CelulaService.atualizarCelula({
      id,
      titulo,
    });
  }

  @Delete(':id')
  async deletarCelula(@Param('id') id: string): Promise<Celula> {
    return await this.CelulaService.deletarCelula({
      id,
    });
  }
}
