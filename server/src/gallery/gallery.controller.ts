import {
  Body,
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PostGalleryDTO, UpdateGalleryDTO } from './dto';
import { GalleryService } from './gallery.service';

@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Get()
  public async getGaleries() {
    const response = await this.galleryService.getGalleries();
    return response;
  }

  @Post()
  public async postGallery(@Body() postGalleryDTO: PostGalleryDTO) {
    const response = await this.galleryService.postGallery(postGalleryDTO);
    return response;
  }

  @Patch()
  public async updateGallery(
    @Query('id') id: number,
    @Body() updateGalleryDTO: UpdateGalleryDTO,
  ) {
    const response = await this.galleryService.updateGallery(
      id,
      updateGalleryDTO,
    );
    return response;
  }

  @Delete()
  public async deleteGallery(@Query('id') id: number) {
    const response = await this.galleryService.deleteGallery(id);
    return response;
  }
}
