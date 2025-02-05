import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SensorListComponent } from './components/sensor-list/sensor-list.component';
import { AddSensorComponent } from './components/add-sensor/add-sensor.component';

const routes: Routes = [
  { path: '', component: SensorListComponent }, // Default route
  { path: 'add-sensor', component: AddSensorComponent } // Add sensor route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
