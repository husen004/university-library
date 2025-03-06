"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  DefaultValues,
  FieldValues,
  Path,
  SubmitHandler,
  useForm,
  UseFormReturn,
} from "react-hook-form";
import { object, z, ZodType } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { FIELD_NAMES, FIELD_TYPES } from "@/constants";
import ImageUpload from "@/components/ImageUpload";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validation";

interface Props extends Partial<Book> {
  type: "create" | "update";
}

const AuthForm = ({
  type,
  ...book
}: Props) => {
  
  const router = useRouter();
  
  const form = useForm<z.infer<typeof bookSchema>>({
    resolver: zodResolver(bookSchema),
    defaultValues: {
      title: "",
      description: "",
      author: "",
      genre: "",
      rating: 1,
      totalCopies: 2,
      coverUrl: "",
      coverColor: "",
      videoUrl: "",
      summary: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof bookSchema>) => {}

  return (
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          
            <FormField
              control={form.control}
              name={"title"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Book Title
                  </FormLabel>
                  <FormControl>
                    
                      <Input
                        required
                        placeholder="Book title"
                        {...field}
                        className="book-form_input"
                      />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          
        </form>
      </Form>

    
    );
};

export default AuthForm;