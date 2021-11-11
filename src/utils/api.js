// 管理整个项目的所有接口
import http from "./http";

// 获取轮播图片 参数：无
export const getBannerImgApi = (params) => http.get("/home/banner", params);
// 获取首页列表 参数 {count：2，page：1}
export const getHomePageListApi = (params) => http.post("/home/recommend", params);
// 获取分类列表 参数 ：{type：1-3}
export const getTypesListApi = (params) => http.post("/classify", params);
// 获取详情数据 参数: {productId：id}
export const getDetailApi = (params) => http.post("/detail", params);
// 获取短信验证码 参数：{phone：‘13888888888’，templateId：537707}
export const getCodeApi = (params) => http.post("/register/getCode", params);
// 注册或者登录 参数 ： {phone:13888888888,code:"8888""}
export const regPersonApi = (params) => http.post("/register", params);
// 获取个人信息 参数：{token：5e54fc121bdd4ebd9c070b75}
export const getPersonApi = (params) => http.post("/userinfo/get", params);
//修改个人信息 参数{token,nickname,sex} 修改后的性别，1：男，2：女
export const updatePersonApi = (params) => http.post("/userinfo/update", params);
//获取收货地址 参数{token}
export const getToAddressApi = (params) => http.post("/address/get", params);
// 新增收货地址 参数{token,getName,getPhone,address,status}
export const addAddressApi = (params) => http.post("/address/add", params);
// 修改收货地址  参数{token，addressId,getName,getPhone,address,status}
export const UpdateAddressApi = (params) => http.post("/address/update", params);
// 获取购物车列表 参数{token}
export const getShopcarApi = (params) => http.post("/cart/get", params);
// 加入购物车 参数{token，productId，count，standard}
export const addShopcarApi = (params) => http.post("/cart/add", params);

