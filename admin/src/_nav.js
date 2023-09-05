import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavGroup,
    name: 'Məhsullar',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Məhsul əlavə et',
        to: '/base/product',
      },
      {
        component: CNavItem,
        name: 'Bütün məhsullar',
        to: '/base/accordion',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Kateqoriyalar',
    to: '/base',
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Kateqoriya əlavə et',
        to: '/base/accordion',
      },
      {
        component: CNavItem,
        name: 'Bütün kateqoriyalar',
        to: '/base/accordion',
      },
    ],
  },
]

export default _nav
