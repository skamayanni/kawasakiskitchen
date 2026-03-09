export default {
  name: 'menu',
  title: 'Menu Items',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Item Name',
      type: 'string'
    },
    {
      name: 'description',
      title: 'Item Description',
      type: 'text'
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number'
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Breakfast', value: 'breakfast' },
          { title: 'Meals', value: 'meals' },
          { title: 'Drinks', value: 'drinks' }
        ]
      }
    },
    {
      name: 'featured',
      title: 'Featured Dish',
      type: 'boolean'
    },
    {
      name: 'image',
      title: 'Item Image',
      type: 'image',
      options: { hotspot: true }
    }
  ]
}