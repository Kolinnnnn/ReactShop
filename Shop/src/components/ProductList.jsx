export const products = [{id:1,text:'Ball'},
    {id:2,text:'Chair'},
    {id:3,text:'Bed'},
    {id:4,text:'Shelf'},
    {id:5,text:'Fridge'}]
export function ProductList() {
    return <div>
        <h2>Products</h2>
        <ul>
            {products.map(item => (<li key={item.id}><a href={`/products/${item.id}`}>{item.text}</a></li>))}
        </ul>
    </div>
}