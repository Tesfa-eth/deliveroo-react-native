import { createClient } from "@sanity/client";
import imgUrlBuilder from "@sanity/image-url";

const client = createClient({
  projectId: "qcsohydb",
  dataset: "production",
  useCdn: true,
  apiVersion: "2021-10-21",
});

export const urlFor = (source) => {
  return imgUrlBuilder(client).image(source);
};

export default client;
