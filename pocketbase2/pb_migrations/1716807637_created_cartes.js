/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "mcf9l14iv9a23dh",
    "created": "2024-05-27 11:00:37.748Z",
    "updated": "2024-05-27 11:00:37.748Z",
    "name": "cartes",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "dc8og12s",
        "name": "message",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "system": false,
        "id": "dntzx3dk",
        "name": "date",
        "type": "date",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": "",
          "max": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("mcf9l14iv9a23dh");

  return dao.deleteCollection(collection);
})
