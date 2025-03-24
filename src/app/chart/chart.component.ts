import { Component } from '@angular/core';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [ NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent {
  public barChartOptions: any = {
    responsive: true,
    plugins: {
      legend: { display: true, position: 'top' },
    },
  };

  public barChartLabels: string[] = [];
  public barChartData: any = { datasets: [] };
  public ChartType: ChartType = 'bar';  

  constructor(private chart: ChartService) {}
  
  ngOnInit(): void {
    this.chart.getChartData().subscribe({
        next: (data) => {
         
            this.barChartLabels = data.labels;
            this.barChartData = {
                datasets: data.datasets
            };
            console.log("result",data); 
        },
        error: (err) => {
            console.log(err);
        }
    })
  }
}

