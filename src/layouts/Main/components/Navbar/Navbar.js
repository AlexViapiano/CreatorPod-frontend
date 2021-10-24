import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useRouter } from 'next/router'
import Link from 'next/link'
import clsx from 'clsx'
import _ from 'lodash'
import { makeStyles, useTheme } from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu'
import Image from 'next/image'
import { createBillingPortalSession, logout } from '../../../../../redux/session/action'
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  Popover,
  Typography,
  IconButton,
  Button,
  colors,
  Badge,
  useMediaQuery,
  Avatar,
} from '@material-ui/core'

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: -1,
    boxShadow: 'none',
    background: theme.palette.white,
    borderBottom: `1px solid ${colors.grey[200]}`,
    filter: 'drop-shadow(1px 2px 2px #eeeeee)',
    position: '-webkit-sticky',
    position: 'sticky',
    top: 0,
  },
  navbarContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
  },
  iconsContainer: {
    display: 'flex',
  },
  listItemButton: {
    whiteSpace: 'nowrap',
    color: '#fff',
    padding: 8,
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .2s ease-in-out',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 4,
      paddingRight: 4,
    },
  },
  iconButton: {
    '& .MuiIconButton-label': {
      margin: 6,
    },
  },
  badge: {
    '& .MuiBadge-anchorOriginTopRightRectangle': {
      color: '#FFF',
      margin: -2,
    },
  },
  listItemAvatar: {
    padding: 8,
    cursor: 'pointer',
    transition: 'all .1s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .1s ease-in-out',
    },
  },
  flexGrow: {
    flexGrow: 1,
  },
  navigationContainer: {
    width: 300,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    [theme.breakpoints.down('sm')]: {
      width: 250,
      marginLeft: 30,
      marginRight: 20,
    },
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  toolbar: {
    maxWidth: 1300,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    minHeight: 70,
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(0, 1, 0, 2),
    },
  },
  listItem: {
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
      transition: 'all .2s ease-in-out',
    },
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 8,
      paddingRight: 8,
    },
  },
  marketplaceButton: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  active: {
    color: theme.palette.primary.main,
  },
  listItemText: {
    flex: '0 0 auto',
    whiteSpace: 'nowrap',
    textTransform: 'uppercase',
    fontSize: '15px',
    fontWeight: 800,
    [theme.breakpoints.down('sm')]: {
      fontSize: 12,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
  },
  listItemMarketplace: {
    padding: '3px 0px 3px 0px',
    marginRight: 20,
    '& svg': {
      width: '1.2em',
      height: '1.2em',
      [theme.breakpoints.down('sm')]: {
        width: '1em',
        height: '1em',
      },
    },
  },
  listItemShopBy: {
    padding: '3px 0px 3px 0px',
    marginRight: 20,
    '& svg': {
      width: '1.2em',
      height: '1.2em',
      [theme.breakpoints.down('sm')]: {
        width: '1em',
        height: '1em',
      },
    },
  },
  saleIcon: {
    color: '#f77070',
    marginLeft: 5,
  },
  popover: {
    padding: theme.spacing(2),
    border: theme.spacing(2),
    boxShadow: '0 0.5rem 2rem 2px rgba(116, 123, 144, 0.09)',
    marginTop: theme.spacing(1),
    border: '1px solid #c4c4c4',
    background: theme.palette.grey.light,
  },
  submenuItem: {
    fontSize: 18,
    marginLeft: 15,
    display: 'flex',
    cursor: 'pointer',
    '& svg': {
      marginLeft: 5,
      color: theme.palette.primary.main,
    },
  },
  submenuSaleItem: {
    fontSize: 18,
    marginLeft: 15,
    display: 'flex',
    cursor: 'pointer',
    color: 'red',
    '& svg': {
      marginLeft: 5,
      color: 'red',
    },
  },
  submenuHeader: {
    fontSize: 18,
    marginLeft: 15,
    fontWeight: 700,
    height: 27,
    marginTop: 4,
    marginBottom: 4,
    textDecoration: 'underline',
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 150,
    marginRight: 20,
  },
  logoImage: {
    cursor: 'pointer',
    transition: 'all .2s ease-in-out',
    '&:hover': {
      transform: 'scale(0.95)',
      transition: 'all .2s ease-in-out',
    },
  },
  stgStamp: {
    fontWeight: 600,
    fontSize: 10,
    color: theme.palette.secondary.main,
  },
  subscribeContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  btnIconContainer: {
    marginLeft: 5,
    display: 'flex',
    width: 25,
  },
  cartContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.up('md')]: {
      '& span': {
        marginRight: 8,
      },
    },
  },
  menu: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem: {
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1),
  },
  menuGroupItem: {
    paddingTop: 4,
    paddingBottom: 4,
    minWidth: 125,
    transition: 'all .2s ease-in-out',
    '& a': {
      '&:hover': {
        transform: 'scale(1.1)',
        transition: 'all .2s ease-in-out',
      },
    },
  },
  menuGroupDiets: {
    display: 'flex',
  },
  menuGroupItemDiets: {
    paddingTop: 4,
    paddingBottom: 4,
    transition: 'all .2s ease-in-out',
    '& a': {
      '&:hover': {
        transform: 'scale(1.1)',
        transition: 'all .2s ease-in-out',
      },
    },
  },
  searchInputContainer: {
    width: '100%',
    [theme.breakpoints.up('md')]: {
      marginLeft: 8,
      marginRight: 24,
      maxWidth: 500,
    },
  },
  toolbarSmall: {
    maxWidth: 1300,
    width: '100%',
    margin: '0 auto',
    padding: theme.spacing(0, 2),
    minHeight: 50,
    display: 'flex',
    padding: theme.spacing(0, 1, 0, 2),
  },
  toolbarSmallContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  filtersContainer: {
    display: 'flex',
    padding: 0,
    maxHeight: 40,
  },
  toolbarMobile: {
    padding: theme.spacing(0, 1),
  },
  mobileLogoContainer: {
    display: 'flex',
    alignItems: 'center',
    minWidth: 150,
    marginTop: 2,
  },
  mobileContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
  },
  toolbarMobileSearch: {
    padding: `0px 16px`,
    minHeight: 50,
  },
  boxText: {
    fontWeight: 600,
  },
}))

const Navbar = props => {
  const {
    user,
    className,
    onSidebarOpen,
    logout,
    stripeCustomer,
    subscriptions,
    createBillingPortalSession,
    ...rest
  } = props
  const classes = useStyles()
  const router = useRouter()
  const [anchorEl, setAnchorEl] = useState(null)
  const [openedPopoverId, setOpenedPopoverId] = useState(null)

  const theme = useTheme()
  const isMd = useMediaQuery(theme.breakpoints.up('md'), { defaultMatches: true })

  const handleClick = (event, popoverId) => {
    setAnchorEl(event.target)
    setOpenedPopoverId(popoverId)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setOpenedPopoverId(null)
  }

  const onClickAccount = view => {
    if (view == 'subscription' && user?.id && stripeCustomer) {
      createBillingPortalSession(user.id).then(res => {
        var url = res.url.replace('http:', '').replace('https:', '')
        if (!res.error) router.push(url)
      })
    } else router.push('/account/' + view)
  }

  const popoverAccount = () => {
    return (
      <Popover
        elevation={1}
        id={'account'}
        open={openedPopoverId === 'account'}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        classes={{ paper: classes.popover }}
      >
        <div className={classes.menu}>
          <div className={classes.menuItem}>
            <List disablePadding>
              {user?.username && (
                <Typography variant="body1" color="primary" className={classes.submenuHeader}>
                  {user.username}
                </Typography>
              )}

              <ListItem disableGutters className={classes.menuGroupItem}>
                <a onClick={() => onClickAccount('general')}>
                  <Typography
                    variant="body1"
                    className={classes.submenuItem}
                    color="textSecondary"
                    onClick={handleClose}
                  >
                    Settings
                  </Typography>
                </a>
              </ListItem>
              <ListItem onClick={() => logout()} disableGutters className={classes.menuGroupItem}>
                <Typography
                  variant="body1"
                  className={classes.submenuItem}
                  color="textSecondary"
                  onClick={handleClose}
                >
                  Logout
                </Typography>
              </ListItem>
            </List>
          </div>
        </div>
      </Popover>
    )
  }

  if (isMd)
    return (
      <AppBar {...rest} position="relative" className={clsx(classes.root, className)}>
        <Toolbar disableGutters className={classes.toolbar}>
          <div className={classes.navbarContainer}>
            <div className={classes.logoContainer}>
              <Link href={'/'}>
                <a>
                  <Image
                    className={classes.logoImage}
                    src="/images/photos/logo.png"
                    alt="WayTooGood_Logo"
                    width={200}
                    height={35}
                    priority={true}
                  />
                </a>
              </Link>
            </div>

            <List className={classes.iconsContainer}>
              <ListItem className={classes.listItemButton}>
                <Link href={'/become-creator'}>
                  <a>
                    <Button>
                      <Typography color="textSecondary" className={classes.listItemText}>
                        Become A Creator
                      </Typography>
                    </Button>
                  </a>
                </Link>
              </ListItem>
              <ListItem className={classes.listItemButton}>
                <Link href={'/signup'}>
                  <a>
                    <Button variant="outlined">
                      <Typography color="textSecondary" className={classes.listItemText}>
                        Get Started
                      </Typography>
                    </Button>
                  </a>
                </Link>
              </ListItem>
              {/* {isMd && user && Object.keys(user).length === 0 && (
                <ListItem className={classes.listItemButton}>
                  <Link href={'/signin'}>
                    <a>
                      <Button color="primary" variant="outlined">
                        <Typography color="textSecondary" className={classes.listItemText}>
                          Login
                        </Typography>
                      </Button>
                    </a>
                  </Link>
                </ListItem>
              )}
              {user && Object.keys(user).length === 0 ? (
                <ListItem className={classes.listItemButton}>
                  <Link href={'/signup'}>
                    <a>
                      <Button color="primary" variant="outlined">
                        <Typography color="textSecondary" className={classes.listItemText}>
                          Signup
                        </Typography>
                      </Button>
                    </a>
                  </Link>
                </ListItem>
              ) : (
                <ListItem
                  aria-describedby={'account'}
                  onClick={e => handleClick(e, 'account')}
                  className={classes.listItemAvatar}
                >
                  <Avatar
                    alt={user?.username ? user.username : 'profile-pic'}
                    src={
                      user?.profile_pic?.formats?.thumbnail?.url
                        ? user?.profile_pic?.formats?.thumbnail?.url
                        : null
                    }
                  />
                </ListItem>
              )} */}
            </List>
          </div>
        </Toolbar>

        {popoverAccount()}
      </AppBar>
    )
  return (
    <AppBar {...rest} position="relative" className={clsx(classes.root, className)}>
      <Toolbar disableGutters className={classes.toolbarMobile}>
        <div className={classes.mobileContainer}>
          <div className={classes.mobileLogoContainer}>
            <Link href={'/'}>
              <a>
                <Image
                  className={classes.logoImage}
                  src="/images/photos/logo.png"
                  alt="WayTooGood_Logo"
                  width={150}
                  height={25}
                  priority={true}
                />
              </a>
            </Link>
          </div>
        </div>
        <IconButton onClick={onSidebarOpen}>
          <MenuIcon />
        </IconButton>
        {/* <Link href={'/become-creator'}>
          <a>
            <Button variant="outlined" size="small">
              <Typography color="textSecondary" className={classes.listItemText}>
                Become A Creator
              </Typography>
            </Button>
          </a>
        </Link> */}
      </Toolbar>
    </AppBar>
  )
}

const mapStateToProps = state => ({
  user: state.session?.user,
  stripeCustomer: state.session.stripeCustomer,
  subscriptions: state.session.subscriptions,
})

const mapDispatchToProps = dispatch => ({
  logout: () => {
    return dispatch(logout())
  },
  createBillingPortalSession: userId => {
    return dispatch(createBillingPortalSession(userId))
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
