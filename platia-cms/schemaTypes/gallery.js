export default {
  name: 'gallery',
  title: 'Gallery',
  type: 'document',
  fields: [
    {
      name: 'images',
      title: 'Gallery Images',
      type: 'array',
      of: [{ type: 'image' }]
    }
  ]
}