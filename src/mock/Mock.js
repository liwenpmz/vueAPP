import Mock from 'mockjs';



Mock.mock("/getrecommend","post",{
    data:[
        {id:"2",url:require("../assets/img/home-recommend/1.jpg"),price:4399,getrecommendtext:"Leader/统帅 海尔出品2匹/3匹变频空调立式 圆柱式智能柜机 新一级能效 自清洁 客厅空调 3匹：适用33-45㎡"},
        {id:"13",url:require("../assets/img/home-recommend/2.jpg"),price:44.03,getrecommendtext:"パパパ2020驾驶镜偏光太阳镜男士新款时尚百搭经典复古墨镜个性眼镜 亮黑框黑灰片"},
        {id:"32",url:require("../assets/img/home-recommend/3.jpg"),price:1888,getrecommendtext:"TCL 大1.5匹一级能效家用节能智清洁变频冷暖独立除湿30秒速冷智多宝壁挂式空调挂机 大1.5匹KFRd-35GW/D-XQ21Bp"},
        {id:"12",url:require("../assets/img/home-recommend/4.jpg"),price:25,getrecommendtext:"314°大众帕萨特宝来POLO朗逸途观速腾斯柯达晶锐明锐昊锐汽车遥控器折叠钥匙替换外壳 大众老款车型3键 送礼包"},
        {id:"56",url:require("../assets/img/home-recommend/5.jpg"),price:35,getrecommendtext:"木以成居 床头柜 简约带抽屉茶几收纳柜储物型简易斗柜 原木色边桌子LY-3066"},
        {id:"231",url:require("../assets/img/home-recommend/6.jpg"),price:59,getrecommendtext:"佳佰 20头盘碗勺餐具套装 高脚防烫饭碗深盘汤盘饭盘 家用陶瓷 雪香系列"},
        {id:"87",url:require("../assets/img/home-recommend/7.jpg"),price:1099,getrecommendtext:"美的（Midea）60升电热水器3000W双管速热八倍增容 一级节能出水断电 遥控WIFI智控F6030-A6X(HEY)"},
        {id:"54",url:require("../assets/img/home-recommend/8.jpg"),price:69,getrecommendtext:"稻草人(MEXICAN)胸包斜挎包休闲单肩包牛津布挎包男潮黑色MMBD05190173BK01A"},
        {id:"10",url:require("../assets/img/home-recommend/9.jpg"),price:39,getrecommendtext:"千之兴拖鞋男室外潮流夏季居家用时尚韩版外穿个性凉拖鞋男士沙滩拖鞋一字拖 白/黑（现货现发） 42-43（适合平常42/43穿"},
        {id:"9",url:require("../assets/img/home-recommend/10.jpg"),price:29.90,getrecommendtext:"美达斯 鞋架 简约四层鞋架 简易自由组合防尘置物架子收纳鞋柜 黑色 12469"},
        
    ]
});
Mock.mock("/commodityinfo/2","post",{
    data:[
        {url:require("../assets/img/home-recommend/1.jpg"),price:4399,titletext:"Leader/统帅",contenttext:"海尔出品2匹/3匹变频空调立式 圆柱式智能柜机 新一级能效 自清洁 客厅空调 3匹：适用33-45㎡"},     
    ]
});
Mock.mock("/commodityinfo/13","post",{
    data:[
        {url:require("../assets/img/home-recommend/2.jpg"),price:44.03,titletext:"太阳镜",contenttext:"パパパ2020驾驶镜偏光太阳镜男士新款时尚百搭经典复古墨镜个性眼镜 亮黑框黑灰片"},
    ]
})
Mock.mock("/commodityinfo/32","post",{
    data:[
        {url:require("../assets/img/home-recommend/3.jpg"),price:1888,titletext:"TCL变频空调",contenttext:"TCL 大1.5匹一级能效家用节能智清洁变频冷暖独立除湿30秒速冷智多宝壁挂式空调挂机 大1.5匹KFRd-35GW/D-XQ21Bp"},
    ]
})
Mock.mock("/commodityinfo/12","post",{
    data:[
        {url:require("../assets/img/home-recommend/4.jpg"),price:25,titletext:"汽车遥控器钥匙",contenttext:"314°大众帕萨特宝来POLO朗逸途观速腾斯柯达晶锐明锐昊锐汽车遥控器折叠钥匙替换外壳 大众老款车型3键 送礼包"},
    ]
})
Mock.mock("/commodityinfo/56","post",{
    data:[
        {url:require("../assets/img/home-recommend/5.jpg"),price:35,titletext:"床头柜收纳",contenttext:"木以成居 床头柜 简约带抽屉茶几收纳柜储物型简易斗柜 原木色边桌子LY-3066"},
    ]
})
Mock.mock("/commodityinfo/231","post",{
    data:[
        {url:require("../assets/img/home-recommend/6.jpg"),price:59,titletext:"家用陶瓷",contenttext:"佳佰 20头盘碗勺餐具套装 高脚防烫饭碗深盘汤盘饭盘 家用陶瓷 雪香系列"},
    ]
})
Mock.mock("/commodityinfo/87","post",{
    data:[
        {url:require("../assets/img/home-recommend/7.jpg"),price:1099,titletext:"美的热水器",contenttext:"美的（Midea）60升电热水器3000W双管速热八倍增容 一级节能出水断电 遥控WIFI智控F6030-A6X(HEY)"},
    ]
})
Mock.mock("/commodityinfo/54","post",{
    data:[
        {url:require("../assets/img/home-recommend/8.jpg"),price:69,titletext:"稻草人单肩包",contenttext:"稻草人(MEXICAN)胸包斜挎包休闲单肩包牛津布挎包男潮黑色MMBD05190173BK01A"},
    ]
})
Mock.mock("/commodityinfo/10","post",{
    data:[
        {url:require("../assets/img/home-recommend/9.jpg"),price:39,titletext:"千之兴拖鞋",contenttext:"千之兴拖鞋男室外潮流夏季居家用时尚韩版外穿个性凉拖鞋男士沙滩拖鞋一字拖 白/黑（现货现发） 42-43（适合平常42/43穿"},
    ]
})
Mock.mock("/commodityinfo/9","post",{
    data:[
        {url:require("../assets/img/home-recommend/10.jpg"),price:29.90,titletext:"美达斯鞋架",contenttext:"美达斯 鞋架 简约四层鞋架 简易自由组合防尘置物架子收纳鞋柜 黑色 12469"}
    ]
})