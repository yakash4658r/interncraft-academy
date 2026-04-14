import { fetchAPI, API_BASE_URL } from "./api";
import type { Internship } from "./internships";

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message?: string;
  count?: number;
}

// Fetch all internships
export async function fetchInternships(): Promise<ApiResponse<Internship[]>> {
  return fetchAPI("/internships");
}

// Fetch single internship by slug
export async function fetchInternshipBySlug(slug: string): Promise<ApiResponse<Internship>> {
  return fetchAPI(`/internships/${slug}`);
}

// Fetch internships by category
export async function fetchInternshipsByCategory(category: string): Promise<ApiResponse<Internship[]>> {
  return fetchAPI(`/internships/category/${category}`);
}

// Fetch all categories
export async function fetchCategories(): Promise<ApiResponse<{ name: string; slug: string; count: number }[]>> {
  return fetchAPI("/internships/categories");
}
