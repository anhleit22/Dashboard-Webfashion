import config from "../config";
import { Dashboard } from "../page/Dashboard";

import { Login } from "../page/Login";
import { NotFound } from "../page/NotFound";
import { Product } from "../page/Product";
import { User } from "../page/User";

const publicRoutes = [
    
    {path: config.Routes.dashboard, component: Dashboard },
    {path: config.Routes.login, component: Login },
    {path: config.Routes.product, component: Product },
    {path: config.Routes.user, component: User },
    {path: config.Routes.notfound, component: NotFound },
]
export {publicRoutes};