import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-charts',
  templateUrl: './my-charts.component.html',
  styleUrls: ['./my-charts.component.css']
})
export class MyChartsComponent implements OnInit {

  subHeaderImage:string;
  subHeaderText:string;

  lineChartData: Array<any>;
  lineChartLabels: Array<any>;
  lineChartOptions: any;
  lineChartColors: Array<any>;
  lineChartLegend: boolean;
  lineChartType: string;

  barChartOptions: any;
  barChartLabels: string[];
  barChartType: string;
  barChartLegend: boolean;
  barChartData: any[];

  doughnutChartLabels: string[];
  doughnutChartData: number[];
  doughnutChartType: string;

  radarChartLabels: string[];
  radarChartData: any;
  radarChartType: string;

  pieChartLabels: string[];
  pieChartData: number[];
  pieChartType: string;

  polarAreaChartLabels: string[];
  polarAreaChartData: number[];
  polarAreaLegend: boolean;
  polarAreaChartType: string;

  lineChartData1: Array<any>;
  lineChartLabels1: Array<any>;
  lineChartType1: string;
  pieChartLabels1: string[];
  pieChartData1: number[];
  pieChartType1: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.subHeaderImage = "assets/content/images/home/3.jpg";
    this.subHeaderText ="Charts";

    this.buildLineChart();
    this.buildBarChart();
    this.buildDoughnutChart();
    this.buildRadarChart();
    this.buildPieChart();
    this.buildPolarAeraChart();
    this.dynamicTypeChart();
  }

  buildLineChart(): void {
    // lineChart
    this.lineChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' },
        { data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C' }
    ];
    this.lineChartLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.lineChartOptions = {
        responsive: true
    };
    this.lineChartColors = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    this.lineChartLegend = true;
    this.lineChartType = 'line';
}

randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
        _lineChartData[i] = { data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label };
        for (let j = 0; j < this.lineChartData[i].data.length; j++) {
            _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
        }
    }
    this.lineChartData = _lineChartData;
}

buildBarChart(): void {
    this.barChartOptions = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
    this.barChartType = 'bar';
    this.barChartLegend = true;

    this.barChartData = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
    ];
}

randomizeBar(): void {
    // Only Change 3 values
    let data = [
        Math.round(Math.random() * 100),
        59,
        80,
        (Math.random() * 100),
        56,
        (Math.random() * 100),
        40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;

}

buildDoughnutChart(): void {
    this.doughnutChartLabels = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
    this.doughnutChartData = [350, 450, 100];
    this.doughnutChartType = 'doughnut';
}

buildRadarChart(): void {
    this.radarChartLabels = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

    this.radarChartData = [
        { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
        { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    this.radarChartType = 'radar';
}

buildPieChart(): void {
    this.pieChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    this.pieChartData = [300, 500, 100];
    this.pieChartType = 'pie';
}

buildPolarAeraChart(): void {
    this.polarAreaChartLabels = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
    this.polarAreaChartData = [300, 500, 100, 40, 120];
    this.polarAreaLegend = true;

    this.polarAreaChartType = 'polarArea';
}


dynamicTypeChart(): void {
    // lineChart
    this.lineChartData1 = [
        [65, 59, 80, 81, 56, 55, 40],
        [28, 48, 40, 19, 86, 27, 90]
    ];
    this.lineChartLabels1 = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    this.lineChartType1 = 'line';
    this.pieChartType1 = 'pie';

    // Pie
    this.pieChartLabels1 = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
    this.pieChartData1 = [300, 500, 100];
}

public randomizeType(): void {
    this.lineChartType1 = this.lineChartType1 === 'line' ? 'bar' : 'line';
    this.pieChartType1 = this.pieChartType1 === 'doughnut' ? 'pie' : 'doughnut';
}

// events
public chartClicked(e: any): void {
    console.log(e);
}

public chartHovered(e: any): void {
    console.log(e);
}

}
