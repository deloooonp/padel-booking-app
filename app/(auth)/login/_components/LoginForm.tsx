"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, ArrowRight, Loader2 } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { loginSchema } from "@/lib/schemas/auth";
import { z } from "zod";

type LoginFormValues = z.infer<typeof loginSchema>;

export function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
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
    <div className="bg-navy relative flex min-h-screen items-center justify-center p-4 sm:p-6 lg:p-8">
      <div className="relative z-10 w-full">
        <div className="border-surface-border bg-surface-card rounded-2xl p-7 shadow-2xl shadow-black/50 backdrop-blur-sm sm:p-9">
          <div className="mb-7">
            <h1 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Selamat Datang
            </h1>
            <p className="text-muted-foreground mt-1.5 text-sm">
              Masuk ke akun pemain Anda
            </p>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
              >
                Email Address
              </Label>
              <div className="relative flex items-center">
                <Mail className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="email"
                      type="email"
                      placeholder="alex@example.com"
                      className={cn(
                        "bg-navy border-surface-border focus:border-lime pl-11 text-white placeholder-slate-500",
                        errors.email &&
                          "border-destructive focus:border-destructive",
                      )}
                    />
                  )}
                />
              </div>
              {errors.email && (
                <p className="text-destructive text-[10px] font-medium tracking-wider uppercase">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-muted-foreground text-xs font-semibold tracking-wider uppercase"
              >
                Password
              </Label>
              <div className="relative flex items-center">
                <Lock className="text-muted-foreground pointer-events-none absolute left-3.5 h-5 w-5" />
                <Controller
                  name="password"
                  control={control}
                  render={({ field }) => (
                    <Input
                      {...field}
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="••••••••••••"
                      className={cn(
                        "bg-navy border-surface-border focus:border-lime px-11 text-white placeholder-slate-500",
                        errors.password &&
                          "border-destructive focus:border-destructive",
                      )}
                    />
                  )}
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
              {errors.password && (
                <p className="text-destructive text-[10px] font-medium tracking-wider uppercase">
                  {errors.password.message}
                </p>
              )}
            </div>

            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center space-x-2">
                <Controller
                  name="rememberMe"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="rememberMe"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label
                  htmlFor="rememberMe"
                  className="text-muted-foreground cursor-pointer text-xs font-normal"
                >
                  Ingat saya
                </Label>
              </div>
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
          </form>

          <div className="border-surface-border/50 mt-6 border-t pt-5 text-center">
            <p className="text-muted-foreground text-xs">
              Belum punya akun?{" "}
              <Link
                href="#"
                className="text-lime ml-1 font-semibold hover:underline"
              >
                Daftar gratis
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
