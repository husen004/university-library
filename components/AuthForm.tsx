"use client"

import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { DefaultValues, SubmitHandler, UseFormReturn } from 'react-hook-form'

// interface Props<T extends FieldValues> {}

const AuthForm = ({ type, schema, defaultValues, onSubmit }: Props) => {

  const form: UseFormReturn<T> = useForm({
    resolver: zodResolver(schema),
    defaultValues: defaultValues as DefaultValues<T>
  });

  const handleSubmit: SubmitHandler<any> = ()

  return (
    <div>AuthForm  -- {type}</div>
  )
}

export default AuthForm