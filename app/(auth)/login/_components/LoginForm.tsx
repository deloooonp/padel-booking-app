"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/lib/schemas/auth";
import { z } from "zod";

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
      rememberMe: true,
    },
  });

  const onSubmit = async (data: LoginFormValues) => {
    // Mock authentication
    console.log("Login data:", data);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    router.push("/book");
  };

  return (
    <Card className="border-surface-border bg-surface-card w-full gap-0 rounded-2xl md:w-1/2 lg:w-1/4">
      <CardHeader className="text-center">
        <CardTitle className="font-heading text-2xl font-bold text-white sm:text-3xl">
          Selamat Datang
        </CardTitle>
        <CardDescription className="text-muted-foreground mt-1.5 text-sm">
          Masuk ke akun pemain Anda
        </CardDescription>
      </CardHeader>
      <CardContent className="p-7 sm:p-9">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FieldGroup className="gap-4">
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
                      placeholder="example@email.com"
                      aria-invalid={fieldState.invalid}
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
                      placeholder="••••••••••••"
                      aria-invalid={fieldState.invalid}
                      className="bg-navy border-surface-border focus:border-lime px-11 text-white placeholder-slate-500"
                    />
                    <button
                      type="button"
                      className="text-muted-foreground absolute right-3.5 transition-colors hover:text-white focus:outline-none"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label="Toggle password visibility"
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

            <div className="flex items-center justify-between pt-1">
              <Controller
                name="rememberMe"
                control={control}
                render={({ field }) => (
                  <Field
                    orientation="horizontal"
                    className="w-auto items-center gap-2"
                  >
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <FieldLabel
                      htmlFor="rememberMe"
                      className="text-muted-foreground cursor-pointer text-xs font-normal"
                    >
                      Ingat saya
                    </FieldLabel>
                  </Field>
                )}
              />
              <Link
                href="#"
                className="text-lime text-xs font-medium transition-all hover:underline"
              >
                Lupa Password?
              </Link>
            </div>

            <Button
              type="submit"
              disabled={isSubmitting}
              className="bg-lime hover:bg-lime/90 text-navy mt-4 h-12 w-full text-sm font-bold tracking-wide transition-all active:scale-[0.98]"
            >
              {isSubmitting ? (
                <Loader2 className="h-5 w-5 animate-spin" />
              ) : (
                <>
                  <span>Masuk Sekarang</span>
                  <ArrowRight className="h-5 w-5" />
                </>
              )}
            </Button>
          </FieldGroup>
        </form>
      </CardContent>
      <CardFooter className="border-surface-border/50 mt-6 border-t pt-5 text-center">
        <p className="text-muted-foreground text-xs">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="text-lime ml-1 font-semibold hover:underline"
          >
            Daftar gratis
          </Link>
        </p>
      </CardFooter>
    </Card>
  );
}
