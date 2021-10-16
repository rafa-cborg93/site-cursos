import { SidenavService } from '../../services/sidenav.service';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private sidenavservice: SidenavService) { }

  //resgata a funcao toogle() do sidenavservice
  public onToggle(){
    this.sidenavservice.toggle()
  }
  ngOnInit(): void {
  }

}
