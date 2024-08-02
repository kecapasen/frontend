import { Module } from '@nestjs/common';
import { MenuModule } from './menu/menu.module';
import { NewsModule } from './news/news.module';
import { GalleryModule } from './gallery/gallery.module';
import { ContactModule } from './contact/contact.module';
import { SiteModule } from './site/site.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [MenuModule, NewsModule, GalleryModule, ContactModule, SiteModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
