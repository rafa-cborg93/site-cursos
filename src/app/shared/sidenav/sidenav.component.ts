import { SidenavService } from '../../services/sidenav.service'
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  constructor(public sidenavservice: SidenavService) { }

  ngOnInit(): void {
  }

}

