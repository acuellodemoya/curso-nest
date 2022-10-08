import { Module } from '@nestjs/common';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path'
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname,'..','public'),
      }),
    PokemonModule
  ],
})
export class AppModule {}




/**
 * if the error "Cannot find module 'path'"
 * appears, then install the package '@types/node'
 * in the dependencies, not in devDependencies.
 */
