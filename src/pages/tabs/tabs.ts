import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { PersonPage } from '../person/person';
import { CartPage } from '../cart/cart';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CartPage;
  tab3Root = ContactPage;
  tab4Root = PersonPage;

  constructor() {

  }
}
