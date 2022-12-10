import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChallengeComponent } from './assessments/challenge/challenge.component';
import { InstructionsComponent } from './assessments/instructions/instructions.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { CompaniesPageComponent } from './companies-page/companies-page.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'companies', component: CompaniesPageComponent },
    { path: 'assessments', children: [
        { path: 'instructions', component: InstructionsComponent },
        { path: 'challenge', component: ChallengeComponent }
    ]},
    { path: 'auth', children: [
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
