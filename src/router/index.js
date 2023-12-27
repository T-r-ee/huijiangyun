import Vue from 'vue'
import VueRouter from 'vue-router'
import MapView from '../views/MapView.vue'
import VideoView from '@/views/Video/VideoView'
import LinkStaff from '@/views/Video/LinkStaff'
import LinkView from '@/views/Video/LinkView'
import VoyageView from '@/views/Voyage/VoyageView'
import AuxiliaryView from '@/views/Voyage/AuxiliaryView'
import BeiDouView from '@/views/Voyage/BeiDouView'
import DynamoView from '@/views/Voyage/DynamoView'
import EnergyView from '@/views/Voyage/EnergyView'
import HostView from '@/views/Voyage/HostView'
import OilWaterView from '@/views/Voyage/OilWaterView'
import OverView from '@/views/Voyage/OverView'
import PmsView from '@/views/Voyage/PmsView'
import SafeView from '@/views/Voyage/SafeView'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'map'
  },
  {
    path: '/map',
    name: 'map',
    component: MapView
  },
  {
    path: '/video',
    name: 'video',
    component: VideoView,
    children: [
      {
        path: '/',
        redirect: 'overview'
      },
      
      {
        path: '/video/staff',
        name: 'staff',
        component: LinkStaff
      },
      {
        path: '/video/view',
        component: LinkView
      }
    ]
  },
  {
    path: '/voyage',
    name: 'voyage',
    component: VoyageView,
    children: [
      {
        path: '/',
        redirect: 'overview'
      },
      {
        path: '/voyage/beidou',
        name: 'beidou',
        component:BeiDouView
      },
      {
        path: '/voyage/dynamo',
        name: 'dynamo',
        component:DynamoView
      },
       
      {
        path: '/voyage/energy',
        name: 'energy',
        component: EnergyView
      },
      {
        path: '/voyage/host',
        name: 'host',
        component: HostView
      },
      {
        path: '/voyage/oilwater',
        name: 'oilwater',
        component: OilWaterView
      },
      {
        path: '/voyage/pms',
        name: 'pms',
        component: PmsView
      },
      {
        path: '/voyage/safe',
        name: 'safe',
        component: SafeView
      },
      {
        path: '/voyage/auxiliary',
        name: 'auxiliary',
        component: AuxiliaryView
      },
      {
        path: '/voyage/overview',
        component: OverView
      }
    ]
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( /* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router