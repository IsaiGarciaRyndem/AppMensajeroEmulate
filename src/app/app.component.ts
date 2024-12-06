import {Component} from '@angular/core';
import {Platform} from "@ionic/angular";
import {Router} from "@angular/router";
import {StatusBar, Style} from "@capacitor/status-bar";
import {LoginComponent} from "./pages/login/login.component";
import {TabsComponent} from "./components/tabs/tabs.component";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  rootPage: any = LoginComponent;
  tabs = TabsComponent;

  constructor(
    private platform: Platform,
    private router: Router,
  ) {
  }

/*  async initializeApp() {
    this.platform.ready().then(async () => {
      // Configuración de la barra de estado
      await StatusBar.setStyle({ style: Style.Default });

      // Establecer la página inicial usando rutas
      await this.router.navigate(['/login']);
    });
  }*/
}
