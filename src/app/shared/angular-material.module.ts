import { NgModule } from '@angular/core';

import {
    MatCommonModule,
    MatButtonModule,
    MatButton,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatIconModule,
    MatIcon,
    MatMenuModule,
    MatBadgeModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatStepperModule
} from '@angular/material';

const MODULES = [
    // BrowserAnimationsModule,
    MatCommonModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatInputModule,
    MatNativeDateModule,
    MatSlideToggleModule,
    MatMenuModule,
    MatIconModule,
    MatBadgeModule,
    MatListModule,
    MatCardModule,
    MatGridListModule,
    MatDialogModule,
    MatTableModule,
    MatAutocompleteModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatStepperModule
];

const COMPONENTS = [
    MatButton,
    MatIcon
];

@NgModule({
    imports: [
        ...MODULES
    ],
    declarations: [],
    exports: [...MODULES, ...COMPONENTS],
    entryComponents: [],
    providers: []
})
export class AngularMaterialModule { }

