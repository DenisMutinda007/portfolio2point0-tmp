"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

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

const contactFormSchema = z.object({
  firstName: z.string({
    message: "Please enter your first name",
  }),
  lastName: z.string({
    message: "Please enter your last name",
  }),
  email: z.string().email({
    message: "Please enter a valid email",
  }),
  subject: z.string({
    message: "Please enter a subject",
  }),
  message: z.string({
    message: "Please enter a message",
  }),
});

// Use myScheme.safeParse ->
// => { success: true; data: "tuna" } || => { success: false; error: ZodError }
// z.string().email();
function Contact() {
  // Contact Form.
  const contactForm = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      firstName: "John",
      lastName: "Doe",
      email: "mybestemail@example.com",
      subject: "Subject: ",
      message: "Message...",
    },
  });

  // Submit handler.
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="flex justify-center space-x-4">
      <Form {...contactForm}>
        <form
          onSubmit={contactForm.handleSubmit(onSubmit)}
          className="space-y-8"
        >
          {/* First Name */}
          <FormField
            control={contactForm.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder={"contactForm.defaultValues.firstName"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your first name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Last Name */}
          <FormField
            control={contactForm.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder={"contactForm.defaultValues.lastName"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your last name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Email */}
          <FormField
            control={contactForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder={"contactForm.defaultValues.email"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your email.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Subject */}
          <FormField
            control={contactForm.control}
            name="subject"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Subject: </FormLabel>
                <FormControl>
                  <Input
                    placeholder={"contactForm.defaultValues.subject"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your email&apos;s subject.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Message */}
          <FormField
            control={contactForm.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message...</FormLabel>
                <FormControl>
                  <Input
                    placeholder={"contactForm.defaultValues.message"}
                    {...field}
                  />
                </FormControl>
                <FormDescription>This is your intent of contact.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit">Send</Button>
        </form>
      </Form>
      <div className="right border-l-2 border-foreground px-4">Social Dock</div>
    </div>
  );
}

export default Contact;
