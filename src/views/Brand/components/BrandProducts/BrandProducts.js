import React, { useEffect, useState } from 'react'
import clsx from 'clsx'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import { Grid, useMediaQuery } from '@material-ui/core'
import { SectionHeader } from 'components/molecules'
import { connect } from 'react-redux'
import ProductCard from '../../../../common/ProductCard'
import { useTranslation } from 'next-i18next'

const useStyles = makeStyles(theme => ({
  root: {},
}))

const BrandProducts = props => {
  const { brandName, brandProducts, className, ...rest } = props
  const classes = useStyles()
  const theme = useTheme()
  const isSm = useMediaQuery(theme.breakpoints.up('sm'), { defaultMatches: true })
  const { t } = useTranslation('brand')

  return (
    <div className={clsx(classes.root, className)}>
      <SectionHeader
        title={brandName}
        // subtitle="Products related to this item"
        subtitleColor="textPrimary"
        align="left"
        subtitleVariant="body1"
        data-aos="fade-up"
      />
    </div>
  )
}

export default connect(null, null)(BrandProducts)
