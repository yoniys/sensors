import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Sensor } from 'src/app/models/sensor.model';
import { SensorService } from 'src/app/services/sensor.service';

@Component({
  selector: 'app-add-sensor',
  templateUrl: './add-sensor.component.html',
  styleUrls: ['./add-sensor.component.css']
})
export class AddSensorComponent implements OnInit {


  ngOnInit(): void {
  }

  newSensor: Sensor = {
    DeviceId: (Math.floor(Math.random() * 15)+20).toString(),
     WebSiteDeviceName: '',
      DeviceOK: 1,
       LastReportDate: new Date().toISOString(),
        DeviceType: '',
         DeviceTypeHebrew: '',
         InstallDate: new Date().toISOString(),
          Picture: 'motion_hanxi' };

  constructor(private sensorService: SensorService, private router: Router) {}

  addSensor(): void {
    this.sensorService.addSensor(this.newSensor);
    this.router.navigate(['/']);
  }
}
