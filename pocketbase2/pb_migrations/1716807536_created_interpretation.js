/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "748xrdnmieffvmz",
    "created": "2024-05-27 10:58:56.255Z",
    "updated": "2024-05-27 10:58:56.255Z",
    "name": "interpretation",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "oxd6l0ju",
        "name": "description",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
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
  const collection = dao.findCollectionByNameOrId("748xrdnmieffvmz");

  return dao.deleteCollection(collection);
})
