import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { CreatePTNComponent } from './create-ptn/create-ptn.component';
import { LoginComponent } from './login/login.component';
import { UpdatePTNComponent } from './update-ptn/update-ptn.component';
import { PTNListComponent } from './ptnlist/ptnlist.component';
import { PTNListDetailComponent } from './ptnlist-detail/ptnlist-detail.component';
import { HttpClientModule } from '@angular/common/http';
import { DatepickerPopupComponent } from './datepicker-popup/datepicker-popup.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    CreatePTNComponent,
    LoginComponent,
    UpdatePTNComponent,
    PTNListComponent,
    PTNListDetailComponent,
    DatepickerPopupComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
