import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AddTodo } from './components/AddTodo';
import { DoneTabComponent } from './components/DoneTab';
import { ElementComponent } from './components/Element';
import { TabsComponent } from './components/Tabs';
import { TodoTabComponent } from './components/TodoTab';
import { NavbarComponent } from './components/Navbar';

@NgModule({
  declarations: [
    AppComponent,
    AddTodo,
    DoneTabComponent,
    ElementComponent,
    NavbarComponent,
    TabsComponent,
    TodoTabComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
