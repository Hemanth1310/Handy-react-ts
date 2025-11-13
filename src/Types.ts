export type ProductType = 'mobile'|'earbuds'

interface Variants {
    sku:string;
    name:string;
    price:number;
    inStock:boolean;
}

interface MobileVariant extends Variants {
     storage:number;
}

interface BudsVariant extends Variants{
    color:'string'
}

export type ProductVariants = MobileVariant | BudsVariant

export type Product = {
    id:string;
    name:string;
    category:ProductType;
    description:string;
    image_url:string;
    variants: ProductVariants[]
}

export type AccessoriesType = 'charger' | 'phone-case'

export type Accessories = {
    id:string;
    name:string;
    category:AccessoriesType;
    description:string;
    image_url:string;
    price:number;
    inStock: boolean;
}

export type Inventory ={
    products:Product[];
    accessories: Accessories[];
}

export type CartItem = {
    id:string;
    name:string;
    category:ProductType|AccessoriesType;
    price:number;
    image_url:string;
    color?:string;
    storage?:number;
}