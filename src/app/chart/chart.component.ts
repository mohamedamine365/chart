
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { ChartType } from 'chart.js';
import { ChartService } from '../chart.service';

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, NgChartsModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
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

  constructor(private chartService: ChartService) {}

  ngOnInit(): void {
    this.chartService.getChartData().subscribe({
        next: (data) => {
            console.log("Data received:", data);

            this.barChartLabels = data.labels;
            this.barChartData = {
                labels: this.barChartLabels,  // Ensure labels are assigned
                datasets: data.datasets
            };

            console.log("Updated Chart Data:", this.barChartData);
        },
        error: (err) => {
            console.error("Error fetching data:", err);
        }
    })
  }
}