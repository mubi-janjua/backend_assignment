const { Model } = require('objection');

class user_profile extends Model {
  static get tableName() {
    return 'user_profile';
  }

  static get relationMappings() {
    const tenant_profile = require('./tenant_profile');
    return {
      tenant_profiles: {
        relation: Model.BelongsToOneRelation,
        modelClass: tenant_profile,
        join: {
          from: 'user_profile.tenant_id',
          to: 'tenant_profile.id',
        },
      },
    };
  }
}

module.exports = user_profile;