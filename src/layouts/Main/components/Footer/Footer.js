import React, { forwardRef } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Typography,
  IconButton,
  Grid,
  List,
  ListItem,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook'
import TwitterIcon from '@material-ui/icons/Twitter'
import InstagramIcon from '@material-ui/icons/Instagram'
import PinterestIcon from '@material-ui/icons/Pinterest'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { API_URL } from '../../../../../redux/api'
import Link from 'next/link'
import Image from 'next/image'
import { changeLocale } from '../../../../../redux/session/action'

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(6, 0),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(12, 0),
    },
    background: 'rgb(48,57,71)',
    background: 'radial-gradient(circle, rgba(48,57,71,1) 0%, rgba(62,71,85,1) 90%)',
    '& a': {
      '&:hover': {
        transform: 'translate(-2px, -2px)',
        color: '#fff',
      },
    },
    '& svg': {
      '&:hover': {
        color: '#fff',
      },
    },
  },
  footerContainer: {
    maxWidth: 1300,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
  },
  topLeftContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  logoContainerItem: {
    paddingTop: 0,
    maxWidth: 150,
  },
  // logoContainer: {
  //   width: 120,
  //   height: 32,
  // },
  logoImage: {
    width: '100%',
    height: '100%',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .2s ease-in-out',
    },
  },
  groupTitle: {
    textTransform: 'uppercase',
    color: theme.palette.primary.dark,
    marginBottom: theme.spacing(1),
  },
  socialIconContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  socialIcon: {
    padding: 0,
    marginRight: theme.spacing(1),
    color: 'rgba(255,255,255,.6)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '&:hover': {
      background: 'transparent',
    },
    '&:last-child': {
      marginRight: 0,
    },
  },
  icon: {
    fontSize: 24,
  },
  menuListContainer: {
    padding: '0 !important',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    margin: theme.spacing(2),
    // '&:last-child': {
    //   marginBottom: 0,
    // },
  },
  menuGroupItem: {
    paddingTop: 0,
    paddingBottom: theme.spacing(1 / 2),
    // '&:last-child': {
    //   paddingBottom: 0,
    // },
    '& a': {
      padding: '3px 0px',
      width: '100%',
    },
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
    color: 'white',
  },
  divider: {
    width: '100%',
  },
  navLink: {
    color: 'rgba(255,255,255,.6)',
  },
  legalContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    flexWrap: 'wrap',
    '& div': {
      margin: '0px 10px',
    },
    '& a': {
      margin: '0px 10px',
      padding: '5px 0px',
      color: '#a29fa0',
    },
  },
  formControl: {
    margin: 25,
    width: 150,
    '& label': {
      color: '#fff',
    },
    '& .MuiInputBase-root': {
      color: '#fff',
    },
    '& fieldset': {
      borderColor: '#5f5f5f',
    },
    '& svg': {
      color: '#a29fa0',
    },
    '& input': {
      color: '#fff',
    },
  },
}))

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{ flexGrow: 1 }}>
    <RouterLink {...props} />
  </div>
))

const Footer = props => {
  const { className, locale, changeLocale, ...rest } = props
  const router = useRouter()

  const pages = {
    landings: {
      title: 'Landings',
      id: 'landing-pages',
      children: {
        web: {
          groupTitle: 'Info',
          pages: [
            {
              title: 'Contact Us',
              href: '/contact',
            },
            {
              title: 'FAQ',
              href: '/faq',
            },
          ],
        },
        creator: {
          groupTitle: 'Pages',
          pages: [
            {
              title: 'About Us',
              href: '/about',
            },
            {
              title: 'Become a Creator',
              href: '/become-creator',
            },
          ],
        },
      },
    },
  }

  const classes = useStyles()

  const landings = pages.landings

  const MenuGroup = props => {
    const { item } = props
    return (
      <List disablePadding className={classes.menuItem}>
        <ListItem disableGutters className={classes.menuGroupItem}>
          <Typography variant="body2" className={classes.menuGroupTitle}>
            {item.groupTitle}
          </Typography>
        </ListItem>
        {item.pages.map((page, i) => (
          <ListItem disableGutters key={i} className={classes.menuGroupItem}>
            <Link href={page.href}>
              <a>
                <Typography variant="body2" className={clsx(classes.navLink, 'submenu-item')}>
                  {page.title}
                </Typography>
              </a>
            </Link>
          </ListItem>
        ))}
      </List>
    )
  }

  const LandingPages = () => {
    const { web, creator } = landings.children
    return (
      <div className={classes.menu}>
        <div>
          <MenuGroup item={creator} />
        </div>
        <div>
          <MenuGroup item={web} />
        </div>
      </div>
    )
  }

  const onChangeLocale = newLocale => {
    router.push('/', '/', { locale: newLocale })
    changeLocale(newLocale)
  }

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <div className={classes.footerContainer}>
        <Grid container align="center" justify="center" spacing={4}>
          <List className={classes.topLeftContainer}>
            <ListItem disableGutters className={classes.logoContainerItem}>
              <div className={classes.logoContainer}>
                <Link href="/">
                  <a>
                    <Image
                      src="/images/photos/logo.png"
                      alt="wtg"
                      width={150}
                      height={25}
                      loading="lazy"
                    />
                  </a>
                </Link>
              </div>
            </ListItem>
            <ListItem disableGutters className={classes.socialIconContainer}>
              <a
                href="https://www.facebook.com/"
                className={classes.socialIcon}
                target="_blank"
                rel="noopener"
              >
                <FacebookIcon className={classes.icon} />
              </a>
              <a
                href="https://www.instagram.com/"
                className={classes.socialIcon}
                target="_blank"
                rel="noopener"
              >
                <InstagramIcon className={classes.icon} />
              </a>
              {/* <a
                href="https://twitter.com/"
                className={classes.socialIcon}
                target="_blank"
                rel="noopener"
              >
                <IconButton className={classes.socialIcon}>
                  <TwitterIcon className={classes.icon} />
                </IconButton>
              </a> */}
              {/* <a
                href="https://www.pinterest.com/"
                className={classes.socialIcon}
                target="_blank"
                rel="noopener"
              >
                <IconButton className={classes.socialIcon}>
                  <PinterestIcon className={classes.icon} />
                </IconButton>
              </a> */}
              {/* <a
                href="https://www.linkedin.com/company"
                className={classes.socialIcon}
                target="_blank"
                rel="noopener"
              >
                <LinkedInIcon className={classes.icon} />
              </a> */}
            </ListItem>
          </List>

          <Grid item className={classes.listItem}>
            <LandingPages />
          </Grid>

          <Grid item xs={12} align="center">
            <div className={classes.legalContainer}>
              <div>All rights reserved</div>
              <div>
                <Link href={'/privacy-policy'}>
                  <a>Privacy Policy</a>
                </Link>

                <Link href={'/terms-and-conditions'}>
                  <a>Terms and Conditions</a>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  locale: state?.session?.locale,
})

const mapDispatchToProps = dispatch => ({
  changeLocale: newLocale => {
    return dispatch(changeLocale(newLocale))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)
