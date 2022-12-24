"use strict";
exports.__esModule = true;
exports.InMemoryRepository = void 0;
var Description_entity_1 = require("src/dependency_inversion/core/Description.entity");
var InMemoryRepository = /** @class */ (function () {
    function InMemoryRepository() {
        this.database_fake = [];
    }
    InMemoryRepository.prototype.create = function (createDescription) {
        var description = new Description_entity_1.Description(createDescription.id, createDescription.description);
        this.database_fake.push(description);
        return description;
    };
    InMemoryRepository.prototype.findAll = function () {
        return this.database_fake;
    };
    return InMemoryRepository;
}());
exports.InMemoryRepository = InMemoryRepository;
