
import { Component, OnDestroy, OnInit } from '@angular/core';
import {  Subject, Subscription, interval, takeUntil } from 'rxjs';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})



export class AdminPanelComponent  implements OnInit, OnDestroy {

  matrix: number[] = Array.from({ length: 40 }, () => 0)
  lastIndexChanged = 0
  randomInterval = interval(100)

  private subscription: Subscription
  private _destroy$ = new Subject<void>()

  constructor() {
    this.subscription = this.randomInterval
      .pipe(takeUntil(this._destroy$))
      .subscribe(() => this.GenerateRandomMatrix(0, 40))
  }

  ngOnInit() {
  }

  private GenerateRandomMatrix(min: number, max: number): void {
    this.matrix[this.lastIndexChanged]= Math.floor(Math.random() * (max - min + 1) + min)

    this.lastIndexChanged++
    if(this.lastIndexChanged > 39){
      this.subscription.unsubscribe()
    }
  }
  ngOnDestroy(): void {
    this._destroy$.next()
    this._destroy$.complete()
  }
}
