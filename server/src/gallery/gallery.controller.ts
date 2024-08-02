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

@Controller('gallery')
export class GalleryController {
  @Get()
  public async getGaleries() {
    const response = await this.getGaleries();
    return response;
  }

  @Post()
  public async postGallery(@Body() postGalleryDTO: PostGalleryDTO) {
    const response = await this.postGallery(postGalleryDTO);
    return response;
  }

  @Patch()
  public async updateGallery(
    @Query('id') id: number,
    @Body() updateGalleryDTO: UpdateGalleryDTO,
  ) {
    const response = await this.updateGallery(id, updateGalleryDTO);
    return response;
  }

  @Delete()
  public async deleteGallery(@Query('id') id: number) {
    const response = await this.deleteGallery(id);
    return response;
  }
}
