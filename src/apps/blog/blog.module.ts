import { Module } from '@nestjs/common';
import { PostController } from './controllers/post/post.controller';
import { PostService } from './services/post/post.service';

@Module({
    imports: [],
    controllers: [PostController],
    providers: [PostService],
})
export class BlogModule { }
