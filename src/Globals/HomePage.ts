import { GlobalConfig } from "payload/types";

const HomePageGlobal: GlobalConfig = {
  slug: 'homepage',
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      label: 'Name',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'text',
      label: 'Short Description',
      required: true,
    },
    {
      name: 'position',
      type: 'array',
      label: 'Positions',
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Title',
          required: true,
        },
      ]
    },
    {
      name: 'longDescription',
      type: 'text',
      label: 'Long Description',
      required: true,
    }
  ]
}

export default HomePageGlobal