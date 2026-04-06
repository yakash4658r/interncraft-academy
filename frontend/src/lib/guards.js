export async function getCurrentUser() {
  try {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false };
  }
}

export async function getPaymentStatus() {
  try {
    const res = await fetch("http://localhost:5000/api/payments/status", {
      credentials: "include",
    });

    const data = await res.json();
    return data;
  } catch (error) {
    return { success: false };
  }
}