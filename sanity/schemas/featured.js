export default {
  name: "featured",
  title: " Featured menu categories",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Featured Category Name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "short_description",
      title: "Short Description",
      type: "string",
      validation: (Rule) => Rule.max(200),
    },
    {
      name: "restuarants",
      title: "Restuarants",
      type: "array",
      of: [{ type: "reference", to: [{ type: "restuarant" }] }],
    },
  ],
}
