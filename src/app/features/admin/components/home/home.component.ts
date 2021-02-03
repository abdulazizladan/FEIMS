import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  public barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true
  };  
  public barChartLabels = [
    '2014', 
    '2015', 
    '2016', 
    '2017', 
    '2018', 
    '2019', 
    '2020'
  ];
  
  public barChartType = 'bar';
  
  public barChartLegend = true;  
  
  public barChartData = [
    { 
      data: [
        65_000_000, 
        59_000_000, 
        80_000_000, 
        81_000_000, 
        56_000_000, 
        58_000_000, 
        57_000_000
      ], 
      label: 'Yearly repair cost'
    }
  ];

  ngOnInit(): void {
  }

}
