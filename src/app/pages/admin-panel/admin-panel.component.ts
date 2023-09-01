
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subject, Subscription, interval, takeUntil } from 'rxjs';

interface IUnit{
  time: string
  value: number
}

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})



export class AdminPanelComponent  implements OnInit, OnDestroy {

  matrix: IUnit[] = []
  lastIndexChanged = 0
  randomInterval = interval(1000)//1min

  dataPoints: {label:string, y: number}[] = []

  chartOptions = {
    title: {
      text: "نمودار بر حسب رطوبت"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "00:00:00",  y: 40  },

      ]
    }]
  }

  private subscription: Subscription
  private _destroy$ = new Subject<void>()

  constructor() {
    this.initMatrix()

    this.subscription = this.randomInterval
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.GenerateRandomMatrix(0, 40))
  }

  initMatrix() {
    Array.from(
      { length: 40 },
      () => this.matrix.push({time: '', value: 0}))
  }

  ngOnInit() {
  }

  private GenerateRandomMatrix(min: number, max: number): void {
    this.matrix[this.lastIndexChanged] = {
      time: new Date().toLocaleTimeString('it-IT'),
      value: Math.floor(Math.random() * (max - min + 1) + min)
    }

    const dataPoints: {label:string, y: number}[] = []

    this.matrix.forEach(elm =>{
      if(elm.value > 0){
        dataPoints.push({label: elm.time, y: elm.value})
      }
    })

    this.dataPoints = dataPoints

    this.chartOptions.data[0].dataPoints = this.dataPoints
this.chartOptions = structuredClone(this.chartOptions)

    this.lastIndexChanged++
    if(this.lastIndexChanged > 39){
      this.subscription.unsubscribe()
    }
  }

  ngOnDestroy
  (): void {
    this._destroy$.next()
    this._destroy$.complete()
  }
}
