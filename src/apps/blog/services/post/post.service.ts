import { Injectable } from '@nestjs/common';

@Injectable()
export class PostService {
    getAllPosts() {
        return 'All posts'
    }

    getPostById(id: number) {
        return `Post ${id}`
    }
}
