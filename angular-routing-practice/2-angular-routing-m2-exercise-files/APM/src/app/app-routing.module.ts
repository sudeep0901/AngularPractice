import { PageNotFoundComponent } from './page-not-found.component';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component'; 

const ROUTES = [
    { path: 'welcome', component: WelcomeComponent },
    { path: '', redirectTo: 'welcome', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent }
];

@NgModule({
    imports: [
        // RouterModule.forRoot([
        //     { path: 'welcome', component: WelcomeComponent },
        //     { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        //     { path: '**', component: PageNotFoundComponent }
        // ], { useHash: true }),
        
        //Another syntax anything workds
        RouterModule.forRoot(ROUTES, { useHash: true, enableTracing: true }, ),    
        

    ],

    exports: [RouterModule]
})

export class AppRoutingModule {

}

