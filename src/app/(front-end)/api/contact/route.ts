import payloadConfig from "@/app/payload.config";
import { NextRequest, NextResponse } from "next/server";
import { getPayload } from "payload";
import { z } from "zod";

import { contactFormSchema } from "@/lib/contact-form-schema";
import { ContactForm } from "../../../../../payload-types";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const validatedData = contactFormSchema.parse(body);

    const payload = await getPayload({
      config: payloadConfig,
    });

    // Since the data is validated by Zod and collection types match,
    // we can safely use a type assertion to bypass TypeScript issues
    const submission = await payload.create({
      collection: "contact-forms",
      data: {
        ...validatedData,
        status: "new",
      } as ContactForm,
    });

    if (process.env.NTFY_URL) {
      try {
        await fetch(process.env.NTFY_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Title: "New Contact Form Submission",
            Priority: "3",
            Tags: "incoming,contact,form",
            Authorization: `Bearer ${process.env.NTFY_TOKEN}`,
          },
          body: JSON.stringify({
            topic: process.env.NTFY_TOPIC,
            message: `New form submission from ${validatedData.name} (${validatedData.email})`,
            title: "New Contact Form Submission on webdesignify.de",
            priority: 3,
            click: `https://${process.env.NEXT_PUBLIC_VERCEL_PROJECT_PRODUCTION_URL}/admin/collections/contact-forms/${submission.id}`,
          }),
        });
      } catch (ntfyError) {
        console.error("Failed to send ntfy notification:", ntfyError);
        // Continue execution even if notification fails
      }
    }

    // Return successful response
    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
    });
  } catch (error) {
    console.error("Error processing contact form:", error);

    // Check if it's a validation error
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Validation failed",
          errors: error.errors,
        },
        { status: 400 },
      );
    }

    // General error
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred while processing your submission",
      },
      { status: 500 },
    );
  }
}
