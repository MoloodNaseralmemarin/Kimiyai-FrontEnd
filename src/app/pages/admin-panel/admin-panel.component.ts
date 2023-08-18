
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as GC from '@grapecity/spread-sheets';
import {saveAs} from 'file-saver';
import * as Excel from '@grapecity/spread-excelio';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})


export class AdminPanelComponent  implements OnInit {
  @ViewChild('htmlData') htmlData!: ElementRef;

 // spreadBackColor = 'aliceblue';
 // hostStyle = {
  //  width: '95vw',
 //   height: '80vh'
 // };
 // private spread;
 // private excelIO;

//   constructor() {
//     this.spread = new GC.Spread.Sheets.Workbook();
//     this.excelIO = new Excel.IO();
//   }

//   chartOptions = {
//     title: {
//       text: "نمایش دما بر حسب زمان"
//     },
//     data: [{
//       type: "column",
//       dataPoints: [
//         { label: "9",  y: 25  },
//         { label: "9:10", y: 15  },
//         { label: "9:15", y: 25  },
//         { label:"9:20",  y: 30  },
//         { label: "9:25",  y: 28  },
//         { label: "9:30",  y: 28  },
//         { label: "9:35",  y: 28  },
//         { label:"9:40",  y: 28  },
//         { label: "9:50",  y: 28  },
//         { label: "10",  y: 10  },
//         { label: "10:10", y: 15  },
//         { label: "10:15", y: 25  },
//         { label:"10:20",  y: 30  },
//         { label: "10:25",  y: 28  },
//         { label: "10:30",  y: 28  },
//         { label: "10:35",  y: 28  },
//         { label:"10:40",  y: 28  },
//         { label: "10:45",  y: 28  }
//       ]
//     }]
//   };

//   workbookInit(args: any) {
//     const self = this;
//     self.spread = args.spread;
//     const sheet = self.spread.getActiveSheet();
//     sheet.getCell(0, 0).text('Test Excel').foreColor('blue');
//     sheet.getCell(1, 0).text('Test Excel').foreColor('blue');
//     sheet.getCell(2, 0).text('Test Excel').foreColor('blue');
//     sheet.getCell(3, 0).text('Test Excel').foreColor('blue');
//     sheet.getCell(0, 1).text('Test Excel').foreColor('blue');
//     sheet.getCell(1, 1).text('Test Excel').foreColor('blue');
//     sheet.getCell(2, 1).text('Test Excel').foreColor('blue');
//     sheet.getCell(3, 1).text('Test Excel').foreColor('blue');
//     sheet.getCell(0, 2).text('Test Excel').foreColor('blue');
//     sheet.getCell(1, 2).text('Test Excel').foreColor('blue');
//     sheet.getCell(2, 2).text('Test Excel').foreColor('blue');
//     sheet.getCell(3, 2).text('Test Excel').foreColor('blue');
//     sheet.getCell(0, 3).text('Test Excel').foreColor('blue');
//     sheet.getCell(1, 3).text('Test Excel').foreColor('blue');
//     sheet.getCell(2, 3).text('Test Excel').foreColor('blue');
//     sheet.getCell(3, 3).text('Test Excel').foreColor('blue');
//  }



//   ngOnInit(): void {
//   }


//   onFileChange(args: any) {
//     const self = this, file = args.srcElement && args.srcElement.files && args.srcElement.files[0];
//     if (self.spread && file) {
//       self.excelIO.open(file, (json: any) => {
//         self.spread.fromJSON(json, {});
//         setTimeout(() => {
//           alert('load successfully');
//         }, 0);
//       }, (error: any) => {
//         alert('load fail');
//       });
//     }
//   }

//   onClickMe(args: any) {
//     const self = this;
//     const filename = 'exportExcel.xlsx';
//     const json = JSON.stringify(self.spread.toJSON());
//     self.excelIO.save(json, function (blob) {
//       saveAs(blob, filename);
//     }, function (error: any) {
//       console.log(error);
//     });
//   }

//   public openPDF(): void {
//     let DATA: any = document.getElementById('htmlData');
//     html2canvas(DATA).then((canvas) => {
//       let fileWidth = 208;
//       let fileHeight = (canvas.height * fileWidth) / canvas.width;
//       const FILEURI = canvas.toDataURL('image/png');
//       let PDF = new jsPDF('p', 'mm', 'a4');
//       let position = 0;
//       PDF.addImage(FILEURI, 'PNG', 0, position, fileWidth, fileHeight);
//       PDF.save('angular-demo.pdf');
//     });
//   }
//   pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";


//   shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

// }



public lineBigDashboardChartType;
public gradientStroke;
public chartColor;
public canvas : any;
public ctx;
public gradientFill;
public lineBigDashboardChartData:Array<any>;
public lineBigDashboardChartOptions:any;
public lineBigDashboardChartLabels:Array<any>;
public lineBigDashboardChartColors:Array<any>

public gradientChartOptionsConfiguration: any;
public gradientChartOptionsConfigurationWithNumbersAndGrid: any;

public lineChartType;
public lineChartData:Array<any>;
public lineChartOptions:any;
public lineChartLabels:Array<any>;
public lineChartColors:Array<any>

public lineChartWithNumbersAndGridType;
public lineChartWithNumbersAndGridData:Array<any>;
public lineChartWithNumbersAndGridOptions:any;
public lineChartWithNumbersAndGridLabels:Array<any>;
public lineChartWithNumbersAndGridColors:Array<any>

public lineChartGradientsNumbersType;
public lineChartGradientsNumbersData:Array<any>;
public lineChartGradientsNumbersOptions:any;
public lineChartGradientsNumbersLabels:Array<any>;
public lineChartGradientsNumbersColors:Array<any>
// events
public chartClicked(e:any):void {
  console.log(e);
}

public chartHovered(e:any):void {
  console.log(e);
}
public hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}
constructor() { }

ngOnInit() {
  this.chartColor = "#FFFFFF";
  this.canvas = document.getElementById("bigDashboardChart");
  this.ctx = this.canvas.getContext("2d");

  this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
  this.gradientStroke.addColorStop(0, '#80b6f4');
  this.gradientStroke.addColorStop(1, this.chartColor);

  this.gradientFill = this.ctx.createLinearGradient(0, 200, 0, 50);
  this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  this.gradientFill.addColorStop(1, "rgba(255, 255, 255, 0.24)");

  this.lineBigDashboardChartData = [
      {
        label: "Data",

        pointBorderWidth: 1,
        pointHoverRadius: 7,
        pointHoverBorderWidth: 2,
        pointRadius: 5,
        fill: true,

        borderWidth: 2,
        data: [50, 150, 100, 190, 130, 90, 150, 160, 120, 140, 190, 95]
      }
    ];
    this.lineBigDashboardChartColors = [
     {
       backgroundColor: this.gradientFill,
       borderColor: this.chartColor,
       pointBorderColor: this.chartColor,
       pointBackgroundColor: "#2c2c2c",
       pointHoverBackgroundColor: "#2c2c2c",
       pointHoverBorderColor: this.chartColor,
     }
   ];
  this.lineBigDashboardChartLabels = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
  this.lineBigDashboardChartOptions = {

        layout: {
            padding: {
                left: 20,
                right: 20,
                top: 0,
                bottom: 0
            }
        },
        maintainAspectRatio: false,
        tooltips: {
          backgroundColor: '#fff',
          titleFontColor: '#333',
          bodyFontColor: '#666',
          bodySpacing: 4,
          xPadding: 12,
          mode: "nearest",
          intersect: 0,
          position: "nearest"
        },
        legend: {
            position: "bottom",
            fillStyle: "#FFF",
            display: false
        },
        scales: {
            yAxes: [{
                ticks: {
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold",
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    padding: 10
                },
                gridLines: {
                    drawTicks: true,
                    drawBorder: false,
                    display: true,
                    color: "rgba(255,255,255,0.1)",
                    zeroLineColor: "transparent"
                }

            }],
            xAxes: [{
                gridLines: {
                    zeroLineColor: "transparent",
                    display: false,

                },
                ticks: {
                    padding: 10,
                    fontColor: "rgba(255,255,255,0.4)",
                    fontStyle: "bold"
                }
            }]
        }
  };

  this.lineBigDashboardChartType = 'line';


  this.gradientChartOptionsConfiguration = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: 1,
    scales: {
      yAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }],
      xAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
  };

  this.gradientChartOptionsConfigurationWithNumbersAndGrid = {
    maintainAspectRatio: false,
    legend: {
      display: false
    },
    tooltips: {
      bodySpacing: 4,
      mode: "nearest",
      intersect: 0,
      position: "nearest",
      xPadding: 10,
      yPadding: 10,
      caretPadding: 10
    },
    responsive: true,
    scales: {
      yAxes: [{
        gridLines: {
          zeroLineColor: "transparent",
          drawBorder: false
        },
        ticks: {
            stepSize: 500
        }
      }],
      xAxes: [{
        display: 0,
        ticks: {
          display: false
        },
        gridLines: {
          zeroLineColor: "transparent",
          drawTicks: false,
          display: false,
          drawBorder: false
        }
      }]
    },
    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 15,
        bottom: 15
      }
    }
  };

  this.canvas = document.getElementById("lineChartExample");
  this.ctx = this.canvas.getContext("2d");

  this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
  this.gradientStroke.addColorStop(0, '#80b6f4');
  this.gradientStroke.addColorStop(1, this.chartColor);

  this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
  this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  this.gradientFill.addColorStop(1, "rgba(249, 99, 59, 0.40)");

  this.lineChartData = [
      {
        label: "Active Users",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 2,
        data: [542, 480, 430, 550, 530, 453, 380, 434, 568, 610, 700, 630]
      }
    ];
    this.lineChartColors = [
     {
       borderColor: "#f96332",
       pointBorderColor: "#FFF",
       pointBackgroundColor: "#f96332",
       backgroundColor: this.gradientFill
     }
   ];
  this.lineChartLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  this.lineChartOptions = this.gradientChartOptionsConfiguration;

  this.lineChartType = 'line';

  this.canvas = document.getElementById("lineChartExampleWithNumbersAndGrid");
  this.ctx = this.canvas.getContext("2d");

  this.gradientStroke = this.ctx.createLinearGradient(500, 0, 100, 0);
  this.gradientStroke.addColorStop(0, '#18ce0f');
  this.gradientStroke.addColorStop(1, this.chartColor);

  this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
  this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  this.gradientFill.addColorStop(1, this.hexToRGB('#18ce0f', 0.4));

  this.lineChartWithNumbersAndGridData = [
      {
        label: "Email Stats",
         pointBorderWidth: 2,
         pointHoverRadius: 4,
         pointHoverBorderWidth: 1,
         pointRadius: 4,
         fill: true,
         borderWidth: 2,
        data: [40, 500, 650, 700, 1200, 1250, 1300, 1900]
      }
    ];
    this.lineChartWithNumbersAndGridColors = [
     {
       borderColor: "#18ce0f",
       pointBorderColor: "#FFF",
       pointBackgroundColor: "#18ce0f",
       backgroundColor: this.gradientFill
     }
   ];
  this.lineChartWithNumbersAndGridLabels = ["12pm,", "3pm", "6pm", "9pm", "12am", "3am", "6am", "9am"];
  this.lineChartWithNumbersAndGridOptions = this.gradientChartOptionsConfigurationWithNumbersAndGrid;

  this.lineChartWithNumbersAndGridType = 'line';




  this.canvas = document.getElementById("barChartSimpleGradientsNumbers");
  this.ctx = this.canvas.getContext("2d");

  this.gradientFill = this.ctx.createLinearGradient(0, 170, 0, 50);
  this.gradientFill.addColorStop(0, "rgba(128, 182, 244, 0)");
  this.gradientFill.addColorStop(1, this.hexToRGB('#2CA8FF', 0.6));


  this.lineChartGradientsNumbersData = [
      {
        label: "Active Countries",
        pointBorderWidth: 2,
        pointHoverRadius: 4,
        pointHoverBorderWidth: 1,
        pointRadius: 4,
        fill: true,
        borderWidth: 1,
        data: [80, 99, 86, 96, 123, 85, 100, 75, 88, 90, 123, 155]
      }
    ];
  this.lineChartGradientsNumbersColors = [
   {
     backgroundColor: this.gradientFill,
     borderColor: "#2CA8FF",
     pointBorderColor: "#FFF",
     pointBackgroundColor: "#2CA8FF",
   }
 ];
  this.lineChartGradientsNumbersLabels = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  this.lineChartGradientsNumbersOptions = {
      maintainAspectRatio: false,
      legend: {
        display: false
      },
      tooltips: {
        bodySpacing: 4,
        mode: "nearest",
        intersect: 0,
        position: "nearest",
        xPadding: 10,
        yPadding: 10,
        caretPadding: 10
      },
      responsive: 1,
      scales: {
        yAxes: [{
          gridLines: {
            zeroLineColor: "transparent",
            drawBorder: false
          },
          ticks: {
              stepSize: 20
          }
        }],
        xAxes: [{
          display: 0,
          ticks: {
            display: false
          },
          gridLines: {
            zeroLineColor: "transparent",
            drawTicks: false,
            display: false,
            drawBorder: false
          }
        }]
      },
      layout: {
        padding: {
          left: 0,
          right: 0,
          top: 15,
          bottom: 15
        }
      }
    }

  this.lineChartGradientsNumbersType = 'bar';
}
}
