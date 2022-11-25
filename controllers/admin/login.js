const models = require("../models");

module.exports = {
    post: async (req, res) => {
        const { ShipName, startDate, endDate } = req.body;
        let data = [];
        const filteredNavInfo = await models.nav_info.findAll({
          where: { ShipName, DataInfo:{[Op.between]: [Date.parse(startDate),Date.parse(endDate)]}},
        });
        try {
          data = filteredNavInfo
          return res.status(200).json({ data  });
        } catch {
          return console.log("@@@@err@@@@");
        }
      },
}