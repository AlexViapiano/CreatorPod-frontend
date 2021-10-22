import React, { useState } from 'react'
import clsx from 'clsx'
import { makeStyles } from '@material-ui/core/styles'
import {
  Avatar,
  List,
  ListItem,
  Typography,
  Button,
  Badge,
  Collapse,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core'
import { logout } from '../../../../../../../redux/session/action'
import { useRouter } from 'next/router'
import { connect } from 'react-redux'
import Link from 'next/link'
// import { store } from 'react-notifications-component'
import Image from 'next/image'
import {
  Person,
  PersonOutline,
  PersonAdd,
  ExitToApp,
  ExpandMore,
  ExpandLess,
  Settings,
  ShoppingBasket,
  RateReview,
  EmojiPeople,
} from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    '& .MuiButton-label': {
      justifyContent: 'flex-start',
    },
    '& .MuiListItemText-root': {
      color: '#5f5f5f',
    },
    '& .MuiListItem-button': {
      borderBottom: '1px solid #eee',
    },
  },
  topSection: {
    background: 'rgb(213,237,132)',
    background: 'linear-gradient(45deg, #c1e0ff 0%, #a6a9ff 100%)',
    minHeight: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  avatar: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },
  username: {
    maxWidth: 200,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  email: {
    maxWidth: 200,
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  },
  buttonIcon: {
    marginRight: 10,
    display: 'flex',
  },
  listItem: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    '& button': {
      padding: `8px 15px`,
    },
  },
  badge: {
    width: '100%',
  },
  boldText: {
    '& span': {
      fontWeight: 700,
    },
  },
  navLink: {
    fontWeight: 300,
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  },
  listItemIcon: {
    minWidth: 'auto',
    color: '#4f5b6d',
  },
  menu: {
    display: 'flex',
  },
  menuItem: {
    marginRight: theme.spacing(8),
    '&:last-child': {
      marginRight: 0,
    },
  },
  menuGroupItem: {
    paddingTop: 0,
  },
  menuGroupTitle: {
    textTransform: 'uppercase',
  },
  divider: {
    width: '100%',
    background: '#4f5b6d',
  },
  saleIcon: {
    color: '#f77070',
  },
}))

const SidebarNav = props => {
  const { user, logout, pages, onClose, className, ...rest } = props
  const classes = useStyles()
  const router = useRouter()
  const [accountOpen, setAccountOpen] = useState(false)

  const navigate = view => {
    router.push('/' + view, undefined, { shallow: true })
    onClose()
  }

  const onClickLogout = () => {
    logout()
    onClose()
  }

  return (
    <>
      <div className={classes.topSection}>
        {user && Object.keys(user).length === 0 ? (
          <div></div>
        ) : (
          <>
            <Avatar
              alt={user?.username ? user.username : 'profile-pic'}
              src={
                user?.profile_pic?.formats?.thumbnail?.url
                  ? user?.profile_pic?.formats?.thumbnail?.url
                  : null
              }
              className={classes.avatar}
            />
            {user.username && (
              <Typography
                onClick={onClose}
                color="secondary"
                variant="h6"
                className={classes.username}
              >
                {user.username}
              </Typography>
            )}
            {user.email && (
              <Typography
                onClick={onClose}
                color="secondary"
                variant="body2"
                className={classes.email}
              >
                {user.email}
              </Typography>
            )}
          </>
        )}
      </div>
      <List {...rest} className={clsx(classes.root, className)}>
        <Link href={'/become-creator'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <EmojiPeople className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'Become A Creator'} />
            </ListItem>
          </a>
        </Link>
        {user && Object.keys(user).length === 0 ? (
          <>
            <Link href="/signup">
              <a>
                <ListItem button>
                  <ListItemIcon>
                    <PersonAdd />
                  </ListItemIcon>
                  <ListItemText primary={'Signup'} />
                </ListItem>
              </a>
            </Link>

            <Link href="/signin">
              <a>
                <ListItem button>
                  <ListItemIcon>
                    <Person className={classes.buttonIcon} />
                  </ListItemIcon>
                  <ListItemText primary={'Login'} />
                </ListItem>
              </a>
            </Link>
          </>
        ) : (
          <>
            <ListItem button onClick={() => setAccountOpen(!accountOpen)}>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary={'Settings'} />
              {accountOpen ? <ExpandLess /> : <ExpandMore />}
            </ListItem>

            <Collapse in={accountOpen} timeout="auto" unmountOnExit>
              <List
                // onClick={() => onClickFilter('category', category.name)}
                component="div"
                disablePadding
              >
                <Link href="/account/general">
                  <a>
                    <ListItem button>
                      <ListItemIcon>
                        <PersonOutline />
                      </ListItemIcon>
                      <ListItemText primary={'Account'} />
                    </ListItem>
                  </a>
                </Link>

                {/* <Link href="/account/productReviews">
                  <a>
                    <ListItem button>
                      <ListItemIcon>
                        <RateReview />
                      </ListItemIcon>
                      <ListItemText primary={'reviews'} />
                    </ListItem>
                  </a>
                </Link> */}

                <ListItem onClick={() => onClickLogout()} button>
                  <ListItemIcon>
                    <ExitToApp />
                  </ListItemIcon>
                  <ListItemText primary={'Logout'} />
                </ListItem>
              </List>
            </Collapse>
          </>
        )}
      </List>
    </>
  )
}

const mapStateToProps = state => ({
  user: state.session?.user,
})

const mapDispatchToProps = dispatch => ({
  logout: () => {
    return dispatch(logout())
  },
})

export default connect(mapStateToProps, mapDispatchToProps)(SidebarNav)
