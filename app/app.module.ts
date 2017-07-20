/**
 * Created by Chehonte on 11.01.2017.
 */
import {BrowserModule} from "@angular/platform-browser";

import {NgModule} from "@angular/core";

import {AppComponent} from "./app.component";


import {bootstrap} from "@angular/upgrade/src/angular_js";


import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http"
import {HttpService} from "./http.service";
import {QuestionsList} from "./questions-list";


@NgModule({
    imports: [BrowserModule,HttpModule,FormsModule,
   ],

    declarations: [AppComponent, QuestionsList],
    providers:[],

    bootstrap:   [AppComponent],


})

export class AppModule {}