import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AddWordtypeComponent } from './components/add-wordtype/add-wordtype.component';
import { WordtypeDetailsComponent } from './components/wordtype-details/wordtype-details.component';
import { WordtypesListComponent } from './components/wordtypes-list/wordtypes-list.component';

import { AddWordComponent } from './components/add-word/add-word.component';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { WordListComponent } from './components/word-list/word-list.component';

import { AddSentenceComponent } from './components/add-sentence/add-sentence.component';
import { SentenceDetailsComponent } from './components/sentence-details/sentence-details.component';
import { SentenceListComponent } from './components/sentence-list/sentence-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AddWordtypeComponent,
    WordtypeDetailsComponent,
    WordtypesListComponent,
    AddWordComponent,
    WordDetailsComponent,
    WordListComponent,
    AddSentenceComponent,
    SentenceDetailsComponent,
    SentenceListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
