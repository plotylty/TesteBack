import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CelulaModule } from './celula/celula.module';

@Module({
  imports: [CelulaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
