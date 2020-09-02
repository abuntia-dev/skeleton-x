import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ServeStaticModule } from '@nestjs/serve-static';
import { PUBLIC_DIR } from './lib/env.enum';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => [{
        rootPath: configService.get<string>(...PUBLIC_DIR)
      }],
      inject: [ConfigService]
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
