import { Injectable } from '@nestjs/common';
import prisma from 'src/lib/prisma.lib';
import { PostGalleryDTO, UpdateGalleryDTO } from './dto';

@Injectable()
export class GalleryService {
  public async getGalleries() {
    const response = await prisma.gallery.findMany({
      where: {
        deletedAt: {
          equals: null,
        },
      },
    });
    return response;
  }

  public async postGallery(postGalleryDTO: PostGalleryDTO) {
    const response = await prisma.gallery.create({
      data: postGalleryDTO,
    });
    return response;
  }

  public async updateGallery(id: number, updateGalleryDTO: UpdateGalleryDTO) {
    const response = await prisma.gallery.update({
      data: updateGalleryDTO,
      where: {
        id,
      },
    });
    return response;
  }

  public async deleteGallery(id: number) {
    const response = await prisma.gallery.update({
      data: {
        deletedAt: new Date().toISOString(),
      },
      where: {
        id,
      },
    });
    return response;
  }
}
