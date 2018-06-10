/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#!/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller: "Ping", action: "index"
  },
  'POST /login': {
    controller: "Login", action: "login"
  },
  'GET /users/:id/balance': {
    controller: "Balance", action: "find"
  },
  'POST /users': {
    controller: "Users", action: "create"
  },
  'GET /users': {
    controller: "Users", action: "find"
  },
  'POST /chapter': {
    controller: "Chapter", action: "create"
  },
  'GET /chapter': {
    controller: "Chapter", action: "find"
  },
  'GET /chapterOne': {
    controller: "Chapter", action: "getChapterOne"
  },
  'PUT /chapter': {
    controller: "Chapter", action: "update"
  },
  'PUT /chapter/sequenceUpdate': {
    controller: "Chapter", action: "updateSequence"
  },
  'POST /admin': {
    controller: "Admin", action: "create"
  },
  'GET /admin': {
    controller: "Admin", action: "find"
  },
  'POST /status': {
    controller: "Status", action: "create"
  },
  'GET /status': {
    controller: "Status", action: "find"
  },
  'PUT /status': {
    controller: "Status", action: "update"
  },
  'POST /decision': {
    controller: "Decision", action: "create"
  },
  'GET /decision': {
    controller: "Decision", action: "find"
  },
  'Put /decision': {
    controller: "Decision", action: "update"
  },
  'Put /decision/all': {
    controller: "Decision", action: "updateAll"
  },
  'POST /users/:id/deposit': {
    controller: "Deposits", action: "create"
  },
  'POST /ChapterProges': {
    controller: "ChapterProgressController", action: "create"
  },
  'GET /getAllChapterProges': {
    controller: "ChapterProgressController", action: "findAllByChapter"
  },
  'POST /UsersChapter': {
    controller: "UserChapterOwnedController", action: "create"
  },
  'GET /getAllChaptersUser': {
    controller: "UserChapterOwnedController", action: "findAllByUser"
  }


  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the custom routes above, it   *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
