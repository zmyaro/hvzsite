var SkipperDisk = require('skipper-disk');

module.exports = {
  mine: function (req, res) {
    var profile = req.user.getAllData();
    var humanIds = [];
    for (var i = 0; i < req.user.humanIds.length; ++i) {
      var id = req.user.humanIds[i];
      humanIds.push({idString: id.idString, active: id.active});
    }

    profile.humanIds = humanIds;

    res.ok({
      profile: profile
    });
  },

  other: function (req, res) {
    var id = req.param("id");
    User.findOne({id: id}).exec(function (err, found) {
      if (err) {
        return res.negotiate(err);
      }

      if (found == null || !AuthService.hasPermission(found, 'player')) {
        return res.notFound({message: "Unknown user id " + id});
      }

      res.ok({profile: found.getPublicData()});
    });
  },

  setClan: function (req, res) {
    if (req.param('name') === undefined) {
      return res.badRequest({message: "'name' parameter not specified"});
    }

    if (sails.config.hvz.endDate < new Date()) {
      return res.badRequest({message: "You cannot change your clan after the game has ended"});
    }

    var name = req.param('name');
    if (name.length > 32) {
      return res.badRequest({message: "Clan name must be 32 characters or less."});
    }

    req.user.clan = name;
    req.user.save(function (err) {
      if (err) {
        return res.negotiate(err);
      }

      sails.log.info("Set " + req.user.email + " clan to " + name);
      res.ok({user: req.user.getPublicData()});
    });
  },

  avatar: function (req, res) {
    var id = req.param('id');
    User.findOne({id: id})
      .exec(function (err, user) {
        if (err) {
          return res.negotiate(err);
        }

        if (user === undefined) {
          return res.notFound();
        }

        if (user.avatarPath === null) {
          return res.notFound();
        }

        var fileAdapter = SkipperDisk();
        fileAdapter.read(user.avatarPath)
          .on('error', function (err) {
            return res.negotiate(err);
          })
          .pipe(res);
      });
  }
}
