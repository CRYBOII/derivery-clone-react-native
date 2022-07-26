export default {
  name: "restuarant",
  title: "Restuarant",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Restuarant Name",
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
      name: "image",
      title: "Image of Restuarant",
      type: "image",
    },
    {
      name: "lat",
      title: "Latitude of Restuarant",
      type: "number",
    },
    {
      name: "long",
      title: "Longitude of Restuarant",
      type: "number",
    },
    {
      name: "address",
      title: "Address of Restuarant",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "rating",
      title: "Enter a rating for the Restuarant",
      type: "number",
      validation: (Rule) =>
        Rule.required().min(1).max(5).error(" rating must be between 1 and 5"),
    },
    {
      name: "type",
      title: "Category",
      type: "string",
      validation: (Rule) => Rule.required(),
      type: "reference",
      to: [{ type: "category" }],
    },
    {
      name: "dishes",
      title: "Dishes",
      type: "array",
      of: [{ type: "reference", to: [{ type: "dish" }] }],
    },
  ],
}
