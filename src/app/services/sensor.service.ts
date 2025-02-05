import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Sensor } from '../models/sensor.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SensorService {

  private sensorsUrl = '/../../assets/sensors.json';
  private sensors$ = new BehaviorSubject<Sensor[]>([]);

  constructor(private http: HttpClient) {}

  loadSensors(): void {
    if (this.sensors$.value.length) {
      return;
    }
    this.http.get<Sensor[]>("http://localhost:4200/assets/sensors.json").subscribe(sensors => {
      this.sensors$.next(sensors);
    });
    this.http.get('http://localhost:4200/assets/sensors.json')
                 .subscribe(data => console.log(data));
  }

  getSensors(): Observable<Sensor[]> {
        return this.sensors$.asObservable();
      }

      toggleSensorStatus(DeviceId: string): void {
        const updatedSensors = this.sensors$.value.map(sensor =>
          sensor.DeviceId === DeviceId
            ? { ...sensor, DeviceOK: sensor.DeviceOK === 1 ? 0 : 1, LastReportDate: new Date().toISOString() }
            : sensor
        );
        console.log("updatedSensors2", updatedSensors);
        this.sensors$.next(updatedSensors as Sensor[]);
      }

      addSensor(newSensor: Sensor): void {
        console.log(newSensor);
        const updatedSensors = [...this.sensors$.value, newSensor];
        this.sensors$.next(updatedSensors);
        console.log("updatedSensors", this.sensors$.value);
        // this.http.post('http://localhost:4200/assets/sensors.json', updatedSensors)
        //          .subscribe(data => console.log(data));
      }

}

