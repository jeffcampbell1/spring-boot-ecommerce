export class Product {

    // Typescript class for Product.  Matches JSON data coming back from 
    // Spring Data REST API.
    // ( Spring Boot service )

    constructor(
                public id: number,
                public sku: string,
                public name: string,
                public description: string,
                public unitPrice: number,
                public imageUrl: string,
                public active: boolean,
                public unitsInStock: number,
                public dateCreated: string,
                public lastUpdated: string
        ) {

        }
}
