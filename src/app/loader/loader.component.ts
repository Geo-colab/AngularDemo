import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { LoaderService } from '../services/loader.service';

@Component({
  selector: 'ad-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {

  showSpinner = false;

  constructor(private loaderService: LoaderService, private cdRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.init();
  }

  init() {

    this.loaderService.getSpinnerObserver().subscribe((status) => {
      this.showSpinner = (status === 'start');
      this.cdRef.detectChanges();
    });
  }

}

 
