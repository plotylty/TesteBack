import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CelulaController } from './celula.controller';
import { CelulaService } from './celula.service';

@Module({
  imports: [],
  controllers: [CelulaController],
  providers: [PrismaService, CelulaService],
})
export class CelulaModule {}
