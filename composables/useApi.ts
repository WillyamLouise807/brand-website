// composables/useApi.ts
export const useApi = () => {
  const config = useRuntimeConfig()
  const baseURL = config.public.apiBase

  const getCategories = () =>
    useFetch(`${baseURL}/categories/`)

  const getProducts = (params?: { category_id?: number; search?: string }) =>
    useFetch(`${baseURL}/products/`, { params })

  const getProductDetail = (id: number) =>
    useFetch(`${baseURL}/products/${id}`)

  const filterProducts = (params: object) =>
    useFetch(`${baseURL}/products/filter`, { params })

  return { getCategories, getProducts, getProductDetail, filterProducts }
}