import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule }   from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {NgxPaginationModule} from 'ngx-pagination';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { OrderModule } from 'ngx-order-pipe';

import { AppComponent } from './app.component';
import { UsersComponent } from './feature/users/users.component';
import { ListingComponent } from './feature/users/listing/listing.component';
import { HeaderComponent } from './core/header/header.component';
import { UserService } from './feature/users/users.service';
import { AddUserComponent } from './feature/users/add-user/add-user.component';
import { LoginComponent } from './shared/login/login.component';
import { FooterComponent } from './core/footer/footer.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ListingComponent,
    HeaderComponent,
    AddUserComponent,
    LoginComponent,
    FooterComponent,
  
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    OrderModule,
    RouterModule.forRoot([
      { path: '', component: LoginComponent },
      { path: 'users', component: UsersComponent },
      { path: 'users/add', component: AddUserComponent },
      { path: 'users/edit/:id', component: AddUserComponent },
      { path: 'logout', redirectTo: '', pathMatch: 'full' },
      { path: '**', redirectTo: '', pathMatch: 'full' },
    ]),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
