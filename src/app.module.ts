import { Module } from '@nestjs/common';
import { Routes, RouterModule } from 'nest-router';
import { TypeOrmModule } from '@nestjs/typeorm';

import { BlogModule } from './apps/blog/blog.module';

import { Post } from './apps/blog/entities/post.entity';

const routes: Routes = [
  {
    path: "/api/v1/posts",
    module: BlogModule
  }
]

@Module({
  imports: [
    RouterModule.forRoutes(routes),
    BlogModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.NEST_DB_HOST,
      port: +process.env.NEST_DB_PORT,
      username: process.env.NEST_DB_USERNAME,
      password: process.env.NEST_DB_PASSWORD,
      database: process.env.NEST_DB_NAME,
      entities: [
        Post
      ],
      synchronize: true,
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
