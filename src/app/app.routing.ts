import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostTileComponent } from './post-tile/post-tile.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent } from './about/about.component';
import { NewestPostsComponent } from './newest-posts/newest-posts.component';

const appRoutes: Routes = [
  {
    path: '',
    component: PostTileComponent,
  },
  {
    path: 'welcome',
    component: WelcomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'newest-posts',
    component: NewestPostsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
