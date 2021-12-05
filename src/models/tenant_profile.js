const { Model } = require('objection');

class tenant_profile extends Model {
  static get tableName() {
    return 'tenant_profile';
  }

  static get relationMappings() {
    const user_profile = require('./user_profile');
    return {
      user_profile: {
        relation: Model.HasManyRelation,
        modelClass: user_profile,
        join: {
          from: 'tenant_profile.id',
          to: 'user_profile.tenant_id',
        },
      },
    };
  }
}

module.exports = tenant_profile;