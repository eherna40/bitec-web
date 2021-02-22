import CategoriesScreen from '../pages/CategoriesScreen'
import CategoryScreen from '../pages/CategoryScreen'
import ProductScreen from '../pages/ProductScreen'
import SplashScreen from '../pages/SplashScreen'
import TabletsScreen from '../pages/TabletsScreen'
import VideoScreen from '../pages/VideoScreen'


const publicRoutes = [
  { path: '/', component: SplashScreen, id: 0, exact: true },
  { path: '/tablets', component: TabletsScreen, id: 1},
  { path: '/campaing', component: CategoriesScreen, id: 2 },
  { path: '/category', component: CategoryScreen, id: 3 },
  { path: '/video', component: VideoScreen, id: 4 },
  { path: '/product', component: ProductScreen, id: 5 },

  ]
export { publicRoutes }