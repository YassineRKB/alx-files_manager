/* eslint-disable import/no-named-as-default */
import redisClient from '../utils/redis';
import dbClient from '../utils/db';

class AppController {
  static getStatus(_req, res) {
    if (redisClient.isAlive() && dbClient.isAlive()) {
      res.json(
        { redis: true, db: true },
      );
    }
  }

  static async getStats(_req, res) {
    const files = await dbClient.nbFiles();
    const users = await dbClient.nbUsers();
    res.json({ users, files });
  }
}

module.exports = AppController;
