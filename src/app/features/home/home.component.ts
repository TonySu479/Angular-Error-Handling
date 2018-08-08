import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../core/services/http/http.service';
import { NotificationService } from '../../core/services/notification/notification.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,
    private httpService: HttpService,
    private notificationService: NotificationService, ) { }
  // fireClientError() {
  //   // throw new Error('Client Error. Shit happens :)');
  //   // it is not defined, ups
  //   return it.happens;

  // }

  fireServerError() {
    this.httpService
      .get('https://jsonplaceholder.typicode.com/1')
      .subscribe();
  }
  ngOnInit() {
  }

}
