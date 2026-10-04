"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  Loader2,
  User,
  Phone,
} from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { registerSchema } from "@/lib/schemas/register";
import { z } from "zod";

type RegisterFormValues = z.infer<typeof registerSchema>;

export function RegisterForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<RegisterFormValues>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    console.log("Registration data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/book");
  };

  return (
    <Card className="border-surface-border bg-surface-card w-full gap-0 rounded-2xl md:w-1/2 lg:w-1/4">
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Create Player Account
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-1.5 text-sm">
          Join the community and book premier padel courts
        </CardDescription>
      </CardHeader>
      <CardContent className="p-7 sm:p-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="gap-4">
            {/* Full Name */}
            <Controller
              name="fullName"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="fullName"
                    className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
                  >
                    Full Name
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <User className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                    <Input
                      {...field}
                      id="fullName"
                      placeholder="Marcus Vance"
                      className="bg-navy border-surface-border focus:border-lime pl-11 text-white placeholder-slate-500"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="font-medium"
                    />
                  )}
                </Field>
              )}
            />

            {/* Email */}
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="email"
                    className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
                  >
                    Email Address
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <Mail className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="marcus@example.com"
                      className="bg-navy border-surface-border focus:border-lime pl-11 text-white placeholder-slate-500"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="font-medium"
                    />
                  )}
                </Field>
              )}
            />

            {/* Phone */}
            <Controller
              name="phone"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="phone"
                    className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
                  >
                    WhatsApp Phone Number
                  </FieldLabel>
                  <div className="flex items-center gap-2">
                    <div className="bg-navy border-surface-border flex shrink-0 items-center gap-1.5 rounded-xl border px-3 py-2.5 text-sm text-white shadow-inner">
                      <span className="text-base">🇮🇩</span>
                      <span className="text-muted-foreground text-xs font-semibold tracking-wider">
                        +62
                      </span>
                    </div>
                    <div className="relative flex flex-1 items-center">
                      <Phone className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                      <Input
                        {...field}
                        id="phone"
                        type="tel"
                        placeholder="812-3456-7890"
                        className="bg-navy border-surface-border focus:border-lime pl-11 text-white placeholder-slate-500"
                      />
                    </div>
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="font-medium"
                    />
                  )}
                </Field>
              )}
            />

            {/* Password */}
            <Controller
              name="password"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="password"
                    className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
                  >
                    Password
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <Lock className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••"
                      className="bg-navy border-surface-border focus:border-lime pr-10 pl-11 text-white placeholder-slate-500"
                    />
                    <button
                      type="button"
                      className="text-muted-foreground absolute right-3.5 transition-colors hover:text-white"
                      onClick={() => setShowPassword((prev) => !prev)}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="font-medium"
                    />
                  )}
                </Field>
              )}
            />

            {/* Confirm Password */}
            <Controller
              name="confirmPassword"
              control={control}
              render={({ field, fieldState }) => (
                <Field data-invalid={fieldState.invalid} className="gap-2">
                  <FieldLabel
                    htmlFor="confirmPassword"
                    className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
                  >
                    Confirm Password
                  </FieldLabel>
                  <div className="relative flex items-center">
                    <Lock className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                    <Input
                      {...field}
                      id="confirmPassword"
                      type="password"
                      placeholder="••••••••"
                      className="bg-navy border-surface-border focus:border-lime pl-11 text-white placeholder-slate-500"
                    />
                  </div>
                  {fieldState.invalid && (
                    <FieldError
                      errors={[fieldState.error]}
                      className="font-medium"
                    />
                  )}
                </Field>
              )}
            />

            {/* Terms */}
            <Controller
              name="terms"
              control={control}
              render={({ field }) => (
                <Field
                  orientation="horizontal"
                  className="items-start gap-2 pt-1"
                >
                  <Checkbox
                    id="terms"
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                  <label
                    className="text-muted-foreground cursor-pointer text-xs leading-relaxed"
                    htmlFor="terms"
                  >
                    I agree to the{" "}
                    <Link
                      href="#"
                      className="hover:text-lime font-medium text-white underline"
                    >
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link
                      href="#"
                      className="hover:text-lime font-medium text-white underline"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </Field>
              )}
            />

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-lime hover:bg-lime/90 text-navy mt-4 h-12 w-full text-sm font-bold tracking-wide transition-all active:scale-[0.98]"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <span>Create Player Account</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-surface-border/50 mt-2 border-t pt-5 text-center">
        <p className="text-muted-foreground text-xs">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-lime ml-1 font-semibold hover:underline"
          >
            Sign In
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
