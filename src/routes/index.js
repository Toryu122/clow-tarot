import Home from "~/views/Home/Home";
import Clow from "~/views/Books/Clow/Clow";
import Sakura from "~/views/Books/Sakura/Sakura";

const routeList = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/clow',
        component: Clow
    },
    {
        path: '/sakura',
        component: Sakura
    }
]

export default routeList