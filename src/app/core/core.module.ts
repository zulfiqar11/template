import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material.module';
import { ToolbarComponent } from '../ui/toolbar/toolbar.component';


@NgModule({
  declarations: [ToolbarComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class CoreModule { }

// import { LayoutModule } from '@angular/cdk/layout';
// import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';

// LayoutModule,
// MatToolbarModule,
// MatButtonModule,
// MatSidenavModule,
// MatIconModule,
// MatListModule
