import type { APIRoute } from "astro";
import { app } from "../../../firebase/server";
import { getAuth } from "firebase-admin/auth";

export const GET: APIRoute = async ({ request, cookies, redirect }) => {
  const auth = getAuth(app);

  /* Obtener el token de las cabeceras de la solicitud */
  const idToken = request.headers.get("Authorization")?.split("Bearer ")[1];
  if (!idToken) {
    return new Response("Token no encontrado", { status: 401 });
  }

  /* Verificar la id del token */
  try {
    await auth.verifyIdToken(idToken);
  } catch (error) {
    return new Response("Token invalido", { status: 401 });
  }

  /* Crear y establecer una cookie de sesión */
  const fiveDays = 60 * 60 * 24 * 5 * 1000;
  const sessionCookie = await auth.createSessionCookie(idToken, {
    expiresIn: fiveDays,
  });

  cookies.set("__session", sessionCookie, {
    path: "/",
  });

  return redirect("/dashboard");
};
