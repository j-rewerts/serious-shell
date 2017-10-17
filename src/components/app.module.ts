import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app/app.component';
import { SeriousShellComponent } from './serious-shell/serious-shell.component';
import { ConsolePromptComponent } from './console-prompt/console-prompt.component';
import { ConsoleCursorComponent } from './console-cursor/console-cursor.component';

@NgModule({
  declarations: [
    AppComponent,
    SeriousShellComponent,
    ConsolePromptComponent,
    ConsoleCursorComponent
],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
