const express=require('express');
const router=express.Router();
const {getAllMenus,getOneMenu, updateMenu, deleteMenu, createMenu}=require('../controllers/menuController');

router.route('/')
.get(getAllMenus)
.post(createMenu)
router.route('/:id')
      .get(getOneMenu)
      .delete(deleteMenu)
      .patch(updateMenu)
module.exports=router;