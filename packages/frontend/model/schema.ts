import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: "tasks",
      columns: [
        { name: "name", type: "string" },
        { name: "date", type: "string" },
        {name: "is_complete", type: "boolean"},
        {name: 'created_at', type: 'string'},
        {name: 'updated_at', type: 'string'}
      ]
    })
  ]
})
