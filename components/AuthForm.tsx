"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { DefaultValues, FieldValues, SubmitHandler, useForm, UseFormReturn } from 'react-hook-form'
import { ZodType } from 'zod';

interface Props<T extends FieldValues> {
  scheme: ZodType<T>;
  onSubmit: (data: T) => Promise<{ success: boolean; error: string }>;
  type: "SIGN_IN" | "SIGN_UP";

}

const AuthForm = <T extends FieldValues> ({ type, schema, defaultValues, onSubmit }: Props<T>) => {

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>
  });

  const handleSubmit: SubmitHandler<T> = async ( data ) => {}

  return (
    <div>AuthForm  -- {type}</div>
  )
}

export default AuthForm