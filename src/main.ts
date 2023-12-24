import {bootstrapApplication} from '@angular/platform-browser';
import {appConfig} from './app/app.config';
import {AppComponent} from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));

export interface Post {
  id: number;
  title: string;
  content: string;
  tags: string;
  imageUrl: string;
  user: {
    _id: string;
    fullName: string;
  };
}

export interface User {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  avatarUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Comment {
  _id: string;
  text: string;
  user: {
    _id: string;
    fullName: string;
  };
  post: {
    _id: number;
    title: string;
  };
  createdAt: Date;
  updatedAt: Date;
}
