import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { PersonalDetailComponent } from './personal-detail/personal-detail.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { AddressComponent } from './address/address.component';
import { SkillComponent } from './skills/skill.component';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonalDetailComponent,
    ContactInfoComponent,
    SkillComponent,
    AddressComponent,
    EducationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
