type Ingredient = {
    id: string
    percent_estimate: number
    percent_max: number
    percent_min: number
    rank: number
    text: string
    vegetarian: "yes" | "no"
    vegan: "yes" | "no"
};

export default Ingredient;