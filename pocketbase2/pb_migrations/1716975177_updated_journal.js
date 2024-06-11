/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgna9f29olu042u")

  // remove
  collection.schema.removeField("rj4xrz11")

  // remove
  collection.schema.removeField("kdvtchtc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gwgmwmjz",
    "name": "Titre",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4o2v8enb",
    "name": "extrait",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tmc0vgds",
    "name": "categorie",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 7,
      "values": [
        "aventure",
        "fantastique",
        "horreur",
        "mystère",
        "nature",
        "désastre",
        "historique"
      ]
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "asw5b6fz",
    "name": "type",
    "type": "select",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 4,
      "values": [
        "lucide",
        "cauchemar",
        "surréaliste",
        "vivid"
      ]
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("sgna9f29olu042u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rj4xrz11",
    "name": "categorie",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kdvtchtc",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("gwgmwmjz")

  // remove
  collection.schema.removeField("4o2v8enb")

  // remove
  collection.schema.removeField("tmc0vgds")

  // remove
  collection.schema.removeField("asw5b6fz")

  return dao.saveCollection(collection)
})
