import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-forecast-bar-chart',
  template: '<div class="d3-chart" #chart></div>',
  styleUrls: ['./forecast-bar-chart.component.sass']
})
export class ForecastBarChartComponent implements OnInit {
  @Input() forecast: any;
  @ViewChild('chart') private chartContainer: ElementRef;
  private margin: any = {top: 20, bottom: 20, left: 50, right: 50};
  private chart: any;
  private width: number;
  private height: number;
  private xScale: any;
  private yScale: any;
  private icons: any;
  private readonly colors: any;
  private xAxis: any;
  private yAxis: any;
  private yDomain: any = [-20, 120];
  private barWidth = 20;
  private xAxisHeight = 100;


  constructor() {
    this.colors = d3.scaleLinear()
                    .domain(this.yDomain)
                    .range(['#abf3ff', '#ff180c'] as any[]);
    this.colors.domain(this.yDomain);
  }


  ngOnInit() {
    this.createChart();
    this.update();
  }

  ngOnChanges() {
    this.update();
  }

  createChart() {
    const element = this.chartContainer.nativeElement;
    this.width = element.offsetWidth - this.margin.left - this.margin.right;
    this.height = element.offsetHeight - this.margin.top - this.margin.bottom;
    const svg = d3.select(element)
                  .append('svg')
                  .attr('width', element.offsetWidth)
                  .attr('height', element.offsetHeight);
    this.chart = svg.append('g')
                    .attr('class', 'bars')
                    .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    this.icons = svg.append('g')
                    .attr('class', 'icons')
                    .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);
    this.xScale = d3.scaleTime()
                    .range([0, this.width]);
    this.yScale = d3.scaleLinear()
                    .domain(this.yDomain)
                    .range([this.height - this.xAxisHeight, 0]);
    this.xAxis = svg.append('g')
                    .attr('class', 'axis axis-x')
                    .attr('transform', `translate(${this.margin.left}, ${this.margin.top + this.height - this.xAxisHeight})`);
    this.yAxis = svg.append('g')
                    .attr('class', 'axis axis-y')
                    .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`)
                    .call(d3.axisLeft(this.yScale));
  }

  update() {
    if (!this.chart || !this.forecast) {
      return;
    }
    const forecastData = this.forecast.map(d => ({
      date: d3.utcParse('%Y-%m-%d %H:%M:%S')(d.dt_txt),
      temp: d.main.temp,
      icon: d.weather[0].icon
    }));
    this.xScale.domain(d3.extent(forecastData.map(d => d.date)))
        .range([0, this.width - this.margin.right]);
    this.xAxis.transition()
        .call(d3.axisBottom(this.xScale)
                .tickFormat(d3.timeFormat('%a %d %I:%M %p')))
        .selectAll('text')
        .style('text-anchor', 'end')
        .attr('dx', '-.8em')
        .attr('dy', '.15em')
        .attr('transform', 'rotate(-65)');
    this.yAxis.transition()
        .call(d3.axisLeft(this.yScale));
    const bars = this.chart.selectAll('.bar')
                     .data(forecastData);
    const icons = this.chart.selectAll('.icon')
                      .data(forecastData);
    bars.exit()
        .remove();

    icons.exit()
         .remove();

    bars.enter()
        .append('rect')
        .attr('class', 'bar')
        .attr('x', d => this.xScale(d.date))
        .attr('y', this.yScale(0))
        .attr('width', this.barWidth)
        .attr('height', 0)
        .style('fill', d => this.colors(d.temp))
        .transition()
        .delay((d, i) => i * 4)
        .attr('y', d => this.yScale(d.temp))
        .attr('height', d => this.height - this.xAxisHeight - this.yScale(d.temp));

    icons.enter()
         .append('image')
         .attr('x', d => this.xScale(d.date) - 4)
         .attr('y', this.yScale(0))
         .attr('width', 28)
         .attr('height', 28)
         .attr('href', d => `http://openweathermap.org/img/w/${d.icon}.png`)
         .transition()
         .delay((d, i) => i * 4)
         .attr('y', d => this.yScale(d.temp) - 30);

  }

}
