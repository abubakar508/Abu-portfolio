import React from 'react'

//impor formfied prop types
import { FormFieldProps } from '@/types'

const FormField = ({ label, labelStyles, inputPlaceHolder, inputType, inputStyles,} : FormFieldProps) => {
  return (
    <div className=' flex flex-col gap-2'>
        <label htmlFor="" className={` text-sm text-tertiary ${labelStyles}`}>
            {label}:
        </label>
        <input type={inputType} placeholder={inputPlaceHolder} className={` ${inputStyles} p-2 ring-1 ring-accent rounded-md text-sm placeholder:text-accent bg-transparent`}  />
    </div>
  )
}

export default FormField