import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-links',
  templateUrl: './fav-links.component.html',
  styleUrls: ['./fav-links.component.css']
})
export class FavLinksComponent implements OnInit {
  favLinks = ['https://www.google.com/webhp?hl=en&sa=X&ved=0ahUKEwiMn-jznOL4AhXEkYkEHUX7ASAQPAgI', 'https://www.google.com/maps/@40.0346544,-75.0494215,15z'];

  constructor() { }

  ngOnInit() {
  }

}
