const URL = process.env.NEXT_PUBLIC_BASE_API_URL || 'https://tango.aruna.id'
const ENV = process.env.ENVIHOST || 'dev'

const constant = {
  BASE_URL: `${URL}/api/v1`,
  ENV: ENV,
  // IMG_URL: `${URL}/api/v2/image/product.template/image_1920/`,
  // IMG_MOBILE_PROMOTION_URL: `${URL}/api/v2/image/banner.promotion/image_mobile/`,
}

export default constant
