interface ProductAttribute {
  name: string
}

interface ProductAttributeValue {
  attribute_name: string
}

interface ColorAttributeValue {
  color: string
}

interface Attribute {
  product_attribute: ProductAttribute
  product_template_attribute_values: Array<ProductAttributeValue>
}

export interface Product {
  en_name?: string
  name?: string
  categ_id?: number
  description_sale?: string
  id?: string
  product_template_attribute_lines?: Array<Attribute>
}

export interface CartData {
  qty: number
  product_name: string
  product_id: string
  notes: string
}

export interface CategoryItem {
  id?: number
  en_name?: string
  name?: string
}

export interface SliderBannerItem {
  id: number
  banner_color_preset: ColorAttributeValue
}

export interface FormProps {
  name: string
  notes: string
  postCode: number
  address: string
  companyName: string
  country: string
  city: string
}

export interface ParamsProps {
  finalArray: string[]
  pageCount: number
  productLength: number
  notFound: boolean
}

export interface GetProductsProps {
  multiple: number
  pages: number
  params: ParamsProps
  sort: string
  search?: string
}
