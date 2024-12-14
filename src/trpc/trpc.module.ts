import { Module } from '@nestjs/common';
import { TRPCModule } from 'nestjs-trpc';
import { TrpcPanelController } from './trpc-panel.controller';
import { LoggerMiddleware } from './middleware/logger.midleware';
import { AppContext } from './context/app.context';

@Module({
  imports: [
    TRPCModule.forRoot({
      autoSchemaFile: 'src/trpc/@generated',
      context: AppContext,
    }),
  ],
  controllers: [TrpcPanelController],
  providers: [LoggerMiddleware, AppContext],
})
export class TrpcModule {}
