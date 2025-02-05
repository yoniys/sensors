import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Sensor } from 'src/app/models/sensor.model';
import { SensorService } from 'src/app/services/sensor.service';

@Component({
  selector: 'app-sensor-list',
  templateUrl: './sensor-list.component.html',
  styleUrls: ['./sensor-list.component.css']
})
export class SensorListComponent implements OnInit {
  sensors: Sensor[] = [];
  workingCount = 0;
  faultyCount = 0;



  constructor(private http: HttpClient,private sensorService: SensorService) {}


  ngOnInit(): void {
    this.sensorService.loadSensors();
    this.sensorService.getSensors().subscribe(sensors => {
      this.sensors = sensors;
      this.updateCounts();
    });
    this.http.get('http://localhost:4200/assets/sensors.json')
                 .subscribe(data => console.log(data));
  }

  toggleStatus(DeviceId: string): void {
    this.sensorService.toggleSensorStatus(DeviceId);
    this.updateCounts();
  }

  updateCounts(): void {
    this.workingCount = this.sensors.filter(s => s.DeviceOK === 1).length;
    this.faultyCount = this.sensors.length - this.workingCount;
  }



}








