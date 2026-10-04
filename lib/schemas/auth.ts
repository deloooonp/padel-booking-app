import z from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email tidak valid"),
  password: z.string().min(8, "Password minimal 8 karakter"),
  rememberMe: z.boolean(),
});

export const registerSchema = z.object({
  fullName: z.string().min(2, "Nama lengkap minimal 2 karakter"),
  email: z.string().email("Email tidak valid"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .max(64, "Password maksimal 64 karakter"),
  confirmPassword: z.string(),
  phone: z.string().optional(),
  termsAccepted: z.boolean(
    "Harus menyetujui Terms of Service dan Privacy Policy",
  ),
});
