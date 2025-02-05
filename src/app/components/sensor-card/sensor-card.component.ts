import { Component, Input, OnInit } from '@angular/core';
import { SensorService } from 'src/app/services/sensor.service';

@Component({
  selector: 'app-sensor-card',
  templateUrl: './sensor-card.component.html',
  styleUrls: ['./sensor-card.component.css']
})
export class SensorCardComponent implements OnInit {
  @Input() sensor!: any;

  constructor(private sensorService: SensorService) { }

  ngOnInit(): void {
  }
  getStatusColor(): string {
    return this.sensor.DeviceOK === 1 ? 'green' : 'red';
  }

  getFormattedDate(): string {
    return new Date(this.sensor.LastReportDate).toLocaleString('he-IL', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }

  getImagePath(): string {
    return `assets/${this.sensor.Picture}.png`;
  }
  toggleStatus(): void {
    // find the DeviceId in the sensors array and toggle the status
    this.sensorService.toggleSensorStatus(this.sensor.DeviceId);
    // this.sensor.DeviceOK = this.sensor.DeviceOK === 1 ? 0 : 1;
    // this.sensor.LastReportDate = new Date().toISOString(); // Update last modified date
  }

}
