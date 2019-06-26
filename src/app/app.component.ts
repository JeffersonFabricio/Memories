import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos = [
    {
      url: 'https://img.ibxk.com.br///2019/04/01/01110608727063-t1200x480.jpg',
      description: 'Você é o cara'
    },
    {
      url: 'https://amp.businessinsider.com/images/5d0bae5ce3ecba536905f1c3-750-563.jpg',
      description: 'Hmm'
    },
    {
      url: 'https://cms.qz.com/wp-content/uploads/2018/11/elon-musk-tesla-paypal-credit-card.jpg?quality=75&strip=all&w=410&h=230.625',
      description: 'Hmm2'
    }

    
  ];
}
