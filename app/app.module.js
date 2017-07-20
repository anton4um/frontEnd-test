"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
/**
 * Created by Chehonte on 11.01.2017.
 */
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var app_component_1 = require("./app.component");
var navidation_component_1 = require("./navidation.component");
var letter_list_component_1 = require("./letter-list.component");
var letters_service_received_1 = require("./letters.service.received");
var letter_detail_component_1 = require("./letter-detail.component");
var letters_service_outgoing_1 = require("./letters.service.outgoing");
var router_1 = require("@angular/router");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule,
                router_1.RouterModule.forRoot([
                    {
                        path: 'letter-list',
                        cpomponent: letter_list_component_1.LettersListComponent,
                    }
                ])
            ],
            declarations: [app_component_1.AppComponent, navidation_component_1.NavigationComponent, letter_list_component_1.LettersListComponent, letter_detail_component_1.LetterDetailComponent],
            providers: [letters_service_received_1.LettersService, letters_service_outgoing_1.OutgoingService],
            bootstrap: [app_component_1.AppComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map