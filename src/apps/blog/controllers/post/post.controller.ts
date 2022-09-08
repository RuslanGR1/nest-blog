import { Controller, Get, Param } from '@nestjs/common';
import { PostService } from '../../services/post/post.service';

@Controller('/')
export class PostController {
    constructor(private readonly postService: PostService) { }

    @Get()
    getAllPosts(): string {
        return this.postService.getAllPosts()
    }

    @Get(':id')
    getPostById(@Param('id') id: number) {
        return this.postService.getPostById(id)
    }
}
