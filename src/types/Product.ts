import Ingredient from "./Ingredient";

type Product = {
    code: string
    image_small_url: string
    image_front_url: string
    image_thumb_url: string
    image_url: string
    categories: string
    nova_group:number
    ingredients: Ingredient[]
    ingredients_text: string
    nutriscore_grade: string
    nutriscore_score: number
    nutriscore_data: {score: string}
    origins: string
    product_name: string
    quantity: string
}

export default Product;