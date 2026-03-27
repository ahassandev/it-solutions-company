import React from 'react'
import { FiCode, FiSmartphone, FiSearch, FiShoppingCart, FiSettings, FiDroplet, FiDatabase, FiCloud, FiShield, FiTrendingUp, FiGlobe, FiCpu } from 'react-icons/fi'

const ServiceIcon = ({ icon, className = "" }) => {
  const iconMap = {
    'code': FiCode,
    'smartphone': FiSmartphone,
    'search': FiSearch,
    'shopping-cart': FiShoppingCart,
    'settings': FiSettings,
    'palette': FiDroplet,
    'database': FiDatabase,
    'cloud': FiCloud,
    'shield': FiShield,
    'trending-up': FiTrendingUp,
    'globe': FiGlobe,
    'cpu': FiCpu
  }

  const IconComponent = iconMap[icon] || FiCode
  return <IconComponent className={`w-8 h-8 ${className}`} />
}

export default ServiceIcon
