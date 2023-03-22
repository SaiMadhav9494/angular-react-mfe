import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebComponentWrapper, WebComponentWrapperOptions } from '@angular-architects/module-federation-tools';
import { HelloComponent } from 'projects/shell/src/app/hello/hello.component';

const routes: Routes = [
  {
    path: 'react',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4201/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './react-app',
      elementName: 'react-element'
    } as WebComponentWrapperOptions
  },
  {
    path: 'hello',
    component: HelloComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
