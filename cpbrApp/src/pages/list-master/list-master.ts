import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'list-master.html'
})
export class ListMasterPage {
  currentItems: Item[];

  url:string= 'https://sandboxapi.campuse.ro/event/list/';
  lista:any;

  constructor(private http: Http,public navCtrl: NavController, public items: Items, public modalCtrl: ModalController) {
    this.currentItems = this.items.query();

    getItens();

  }

getItens (): Observable<Client[]> {
    return this.http.get(this.url)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.results || { };
  }

  private handleError (error: any) {
    let errMsg = 'mensagem de erro';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }



  // /**
  //  * The view loaded, let's query our items for the list
  //  */
  // ionViewDidLoad() {
  // }
  //
  // /**
  //  * Prompt the user to add a new item. This shows our ItemCreatePage in a
  //  * modal and then adds the new item to our data source if the user created one.
  //  */
  // addItem() {
  //   let addModal = this.modalCtrl.create('ItemCreatePage');
  //   addModal.onDidDismiss(item => {
  //     if (item) {
  //       this.items.add(item);
  //     }
  //   })
  //   addModal.present();
  // }

  /**
  //  * Delete an item from the list of items.
  //  */
  // deleteItem(item) {
  //   this.items.delete(item);
  // }
  //
  // /**
  //  * Navigate to the detail page for this item.
  //  */
  // openItem(item: Item) {
  //   this.navCtrl.push('ItemDetailPage', {
  //     item: item
  //   });
  // }
}
