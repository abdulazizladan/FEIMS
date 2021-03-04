import { Component, OnInit } from '@angular/core';
//import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { RepairUpdateData } from '../../models/update.model';
import { UpdateHistoryData } from '../../models/history.model';

const REPAIR_UPDATE_DATA : RepairUpdateData[]= [
  {
    activity : "Ceiling repair on LAB ABU/LAW/CVL/LT01",
    date : "01/01/2021",
    cost : 80000
  },
  {
    activity : "Windows replacement on LAB ABU/LAW/CVL/LT02",
    date : "01/01/2021",
    cost : 128000
  },
  {
    activity : "Flush door replacement on LAB ABU/ENG/CVL/LB01",
    date : "01/01/2021",
    cost : 750000
  },
  {
    activity : "Saddle housing repair on LAB ABU/ENG/MEC/LB04/LTHE045",
    date : "01/01/2021",
    cost : 2500000
  },
  {
    activity : "Window welding at LAB ABU/LAW/CVL/LT05",
    date : "01/01/2021",
    cost : 126000
  }
]

const UPDATE_HISTORY_DATA : UpdateHistoryData[] = [
  {
    activity : "Acquired 2 airconditioners for Mechanical Engineering Lab 001",
    date : "01/01/2021",
    cost : 80000
  },
  {
    activity : "Fixed 2km of road from main gate",
    date : "01/01/2021",
    cost : 80000
  },
  {
    activity : "Repair on MECH/LT windows",
    date : "01/01/2021",
    cost : 80000
  },
  {
    activity : "Ceiling repair on LAB ABU/LAW/CVL/LT01",
    date : "01/01/2021",
    cost : 80000
  },
  {
    activity : "Ceiling repair on LAB ABU/LAW/CVL/LT01",
    date : "01/01/2021",
    cost : 80000
  },
]

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  userData: any;
  fullName: string;
  role: string;
  institution: string;
  update_dataSource = REPAIR_UPDATE_DATA;
  history_dataSource = UPDATE_HISTORY_DATA;
  displayedColumns: string[] = ['date', 'activity', 'cost'];
  constructor() {

  }

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

  public barChartColors: Color[] = [
    { backgroundColor: '#00695c' }
  ]

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
      label: 'Yearly repair cost',
      maxBarThickness : 50
    }
  ];

  ngOnInit(): void {
    this.userData = JSON.parse(localStorage.getItem("data"));
    this.fullName = this.userData.user.fullName;
    this.role = this.userData.user.userRole;
    this.institution = this.userData.user.institution.name;
  }

}
