const models = require("../models");
//const crypto = require("crypto")
module.exports = {
    post: async (req, res) => {
        const {  } = req.body;
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