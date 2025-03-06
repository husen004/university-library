"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import {
  useForm,
} from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { bookSchema } from "@/lib/validation";
import { Textarea } from "@/components/ui/textarea";

interface Props extends Partial<Book> {
  type: "create" | "update";
}

const BookForm = ({
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

            <FormField
              control={form.control}
              name={"author"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Author
                  </FormLabel>
                  <FormControl>
                    
                      <Input
                        required
                        placeholder="Book author"
                        {...field}
                        className="book-form_input"
                      />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"genre"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Genre
                  </FormLabel>
                  <FormControl>
                    
                      <Input
                        required
                        placeholder="Book genre"
                        {...field}
                        className="book-form_input"
                      />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"rating"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Rating
                  </FormLabel>
                  <FormControl>
                    
                      <Input
                        type="number"
                        placeholder="Book rating"
                        min={1}
                        max={10}
                        {...field}
                        className="book-form_input"
                      />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"totalCopies"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Total Copies
                  </FormLabel>
                  <FormControl>
                    
                      <Input
                        type="number"
                        placeholder="Total copies"
                        min={1}
                        max={10000}
                        {...field}
                        className="book-form_input"
                      />
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"coverUrl"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Book Image
                  </FormLabel>
                  <FormControl>
                    
                      {/* <ImageUpload {...field} /> */}
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"coverColor"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Primary Color
                  </FormLabel>
                  <FormControl>
                    
                      {/* <ColorPicker {...field} /> */}
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name={"description"}
              render={({ field }) => (
                <FormItem className="flex flex-col gap-1">
                  <FormLabel className="text-base text-dark-500 font-normal">
                    Book Description
                  </FormLabel>
                  <FormControl>
                    
                      <Textarea>

                      </Textarea>
                    
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
          
        </form>
      </Form>

    
    );
};

export default BookForm;