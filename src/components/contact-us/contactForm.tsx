"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import {
  AlertCircle,
  MailIcon,
  PhoneIcon,
  SendIcon,
  MessageSquare,
} from "lucide-react";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form", {
        description: "Some required fields are missing or invalid.",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const API = import.meta.env.VITE_FORM_SPREE_API_END_POINT;

      const response = await fetch(API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        throw new Error(
          errorData?.message || `Request failed with status ${response.status}`
        );
      }

      toast.success("Message sent!", {
        description: "We'll get back to you as soon as possible.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Unknown error occurred";
      toast.error("Something went wrong", {
        description: `Your message couldn't be sent. ${errorMessage}`,
      });
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container ">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mx-auto max-w-3xl"
      >
        <Card className="border-2 shadow-lg p-0">
          <CardHeader className="space-y-1 bg-muted/50 py-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <MessageSquare className="h-5 w-5" />
              </div>
              <CardTitle className="text-2xl font-bold">
                Contact Us Directly
              </CardTitle>
            </div>
            <CardDescription className="text-base">
              Have a specific question or request? Fill out the form below and
              we'll respond promptly.
            </CardDescription>
          </CardHeader>
          <CardContent className="pt-2 pb-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label
                    htmlFor="name"
                    className={errors.name ? "text-red-600" : ""}
                  >
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className={
                      errors.name
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                    aria-invalid={!!errors.name}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.name}
                    </p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="email"
                    className={errors.email ? "text-red-600" : ""}
                  >
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className={
                      errors.email
                        ? "border-destructive focus-visible:ring-destructive"
                        : ""
                    }
                    aria-invalid={!!errors.email}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                      <AlertCircle className="h-3 w-3" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="subject"
                  className={errors.subject ? "text-red-600" : ""}
                >
                  Subject
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="How can we help you?"
                  value={formData.subject}
                  onChange={handleChange}
                  className={
                    errors.subject
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }
                  aria-invalid={!!errors.subject}
                />
                {errors.subject && (
                  <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.subject}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="message"
                  className={errors.message ? "text-red-600" : ""}
                >
                  Message
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us more about your inquiry..."
                  className={`min-h-[150px] ${
                    errors.message
                      ? "border-destructive focus-visible:ring-destructive"
                      : ""
                  }`}
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={!!errors.message}
                />
                {errors.message && (
                  <p className="text-sm text-red-600 flex items-center gap-1 mt-1">
                    <AlertCircle className="h-3 w-3" />
                    {errors.message}
                  </p>
                )}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex flex-col space-y-4 bg-muted/30 px-6 py-4">
            <Button
              type="submit"
              size="lg"
              className="w-full"
              disabled={isSubmitting}
              onClick={handleSubmit}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                  Sending...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <SendIcon className="h-4 w-4" />
                  Send Message
                </span>
              )}
            </Button>

            <div className="grid grid-cols-1 sm:grid-cols-2 w-full text-sm text-muted-foreground gap-3 pb-3">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <MailIcon className="h-4 w-4 text-primary" />
                </div>
                <span>techvbee@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <PhoneIcon className="h-4 w-4 text-primary" />
                </div>
                <span>+977-9822768092</span>
              </div>
            </div>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
}
