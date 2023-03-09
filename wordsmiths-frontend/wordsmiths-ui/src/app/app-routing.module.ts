import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WordtypesListComponent } from './components/wordtypes-list/wordtypes-list.component';
import { WordtypeDetailsComponent } from './components/wordtype-details/wordtype-details.component';
import { AddWordtypeComponent } from './components/add-wordtype/add-wordtype.component';

import { WordListComponent } from './components/word-list/word-list.component';
import { WordDetailsComponent } from './components/word-details/word-details.component';
import { AddWordComponent } from './components/add-word/add-word.component';

import { SentenceListComponent } from './components/sentence-list/sentence-list.component';
import { SentenceDetailsComponent } from './components/sentence-details/sentence-details.component';
import { AddSentenceComponent } from './components/add-sentence/add-sentence.component';

const routes: Routes = [
  { path: '', redirectTo: 'wordtypes', pathMatch: 'full' },
  { path: 'wordtypes', component: WordtypesListComponent },
  { path: 'wordtype/:id', component: WordtypeDetailsComponent },
  { path: 'addwordtype', component: AddWordtypeComponent },

  { path: 'words', component: WordListComponent },
  { path: 'word/:id', component: WordDetailsComponent },
  { path: 'addword', component: AddWordComponent },

  { path: 'sentences', component: SentenceListComponent },
  { path: 'sentence/:id', component: SentenceDetailsComponent },
  { path: 'addSentence', component: AddSentenceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
