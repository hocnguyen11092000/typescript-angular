import { AbstractControl, FormGroup } from '@angular/forms';
import { TypedFormGroup } from './typed-form';

export type GetControl<TypeForm extends object> = (
  key: keyof TypeForm,
  form: TypedFormGroup<TypeForm>
) => AbstractControl;

export const getFormControl = <TypeForm extends object>(
  key: keyof TypeForm | string,
  form: TypedFormGroup<TypeForm>
): AbstractControl | null => {
  if (!key || !form) return null;

  return form.get(key as string) as AbstractControl;
};
