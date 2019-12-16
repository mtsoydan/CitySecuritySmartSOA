var express =require('express');
var router=express.Router();
var ctlMon=require('../controller/monitoringController');

router.get('/',ctlMon.monGet);
router.get('/list',ctlMon.monList);
router.post('/new',ctlMon.monNew);


module.exports=router; 