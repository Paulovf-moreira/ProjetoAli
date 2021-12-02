import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import { XboxComponent } from './xbox/xbox.component';
import { PlaystationComponent } from './playstation/playstation.component';
import {MatBreadcrumbModule} from "mat-breadcrumb";
import { HomeComponent } from './home/home.component';
import { NintendoComponent } from './nintendo/nintendo.component';
import { ClassicosComponent } from './classicos/classicos.component';
import { PCComponent } from './pc/pc.component';
import { GeekENerdComponent } from './geek-e-nerd/geek-e-nerd.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { MobileComponent } from './mobile/mobile.component';
import { DisneyInfinityComponent } from './disney-infinity/disney-infinity.component';
import { SeminovosComponent } from './seminovos/seminovos.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CadastroProdutosComponent } from './cadastro-produtos/cadastro-produtos.component';
import { LoginComponent } from './login/login.component';
import { CarrinhoComponent } from './carrinho/carrinho.component';



@NgModule({
  declarations: [
    AppComponent,
    XboxComponent,
    PlaystationComponent,
    HomeComponent,
    NintendoComponent,
    ClassicosComponent,
    PCComponent,
    GeekENerdComponent,
    AcessoriosComponent,
    MobileComponent,
    DisneyInfinityComponent,
    SeminovosComponent,
    CadastroUsuarioComponent,
    CadastroProdutosComponent,
    LoginComponent,
    CarrinhoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatBreadcrumbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
