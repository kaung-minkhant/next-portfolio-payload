import { CollectionConfig } from "payload/types"

const ExperienceCollection: CollectionConfig = {
  slug: 'experience',
  access: {
    read: () => true,
  },
  labels: {
    singular: 'Experience',
    plural: 'Experience'
  },
  fields: [
    {
      name: 'name',
      label: 'Name',
      type: 'text'
    },
    {
      name: 'position',
      label: 'Position',
      type: 'text',
    },
    {
      name: 'fromDate',
      label: 'From Date as Position',
      type: 'text',
    },
    {
      name: 'toDate',
      label: 'To Date as Position',
      type: 'text',
    },
    {
      name: 'content',
      label: 'Main Content',
      type: 'text',
    },
    {
      name: 'links',
      label: 'Links',
      type: 'array',
      fields: [
        {
          name: 'label',
          label: 'Link Label',
          type: 'text',
        },
        {
          name: 'url',
          label: 'Link Url',
          type: 'text',
        },
      ]
    }
  ]
}

export default ExperienceCollection