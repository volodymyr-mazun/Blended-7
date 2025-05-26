export const markupProducts = products => {
    return products.map(
        ({ brand, description, category, id, images, price, title }) => { 
            return `    
            <li data-id="${id}">
                <img src="${images[0]}" alt="${title}" width="250">
                <h2>Brand:${brand}</h2>
                <h2>Title:${title}</h2>
                <p>Category:${category}</p>
                <p>Price:${price}</p>
                <p>Description:${description}</p>
            </li>`
        }
    ).join('')
}

export const markupSingleProduct = ({ brand, description, category, id, images, price, title }) => {
            return `    
            <div data-id="${id}">
                <img src="${images[0]}" alt="${title}" width="250">
                <h2>Brand:${brand}</h2>
                <h2>Title:${title}</h2>
                <p>Category:${category}</p>
                <p>Price:${price}</p>
                <p>Description:${description}</p>
            </div>`
}