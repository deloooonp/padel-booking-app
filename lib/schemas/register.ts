import z from "zod";

export const registerSchema = z
  .object({
    fullName: z.string().min(2, "Nama lengkap minimal 2 karakter"),
    email: z.string().email("Email tidak valid"),
    phone: z.string().min(10, "Nomor WhatsApp tidak valid"),
    password: z.string().min(8, "Password minimal 8 karakter"),
    confirmPassword: z.string(),
    terms: z.boolean().refine((val) => val === true, {
      message: "Anda harus menyetujui syarat dan ketentuan",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password tidak cocok",
    path: ["confirmPassword"],
  });
