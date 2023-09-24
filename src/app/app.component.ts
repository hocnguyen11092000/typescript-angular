import { TypedFormGroup } from './../shared/utils/typed-form';
import { Component, OnInit, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { getFormControl } from 'src/shared/utils/get-control';
export interface ISomeForm {
  name: string;
  email: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'typescript-angular';

  private _fb = inject(NonNullableFormBuilder);

  readonly someForm: TypedFormGroup<ISomeForm> = this._fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
  });

  ngOnInit(): void {}

  submitForm() {
    console.log(getFormControl<ISomeForm>('name.text', this.someForm));

    console.log(this.someForm.getRawValue());
  }
}
