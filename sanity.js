import SanityClientConstructor from "@sanity/client"
import ImageUrlSanity from "@sanity/image-url"

const client = new SanityClientConstructor({
  projectId: "2hlxyifq",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
})

const builder = ImageUrlSanity(client)

export const urlFor = (source) => builder.image(source)

export default client
