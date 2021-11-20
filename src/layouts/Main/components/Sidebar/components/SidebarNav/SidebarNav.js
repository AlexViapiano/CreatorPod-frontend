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
  Home,
  Check,
  EmojiPeople,
  LocalOffer,
  Settings,
  ExpandMore,
  ExpandLess,
  PersonOutline,
  ExitToApp,
  Work,
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
    background: 'linear-gradient(45deg, #c1e0ff 0%, #ffffff 100%)',
    minHeight: 100,
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
        <Image
          className={classes.image}
          src="/images/photos/logo.png"
          alt="Symbol"
          loading="lazy"
          width={200}
          height={32}
        />
      </div>
      <List {...rest} className={clsx(classes.root, className)}>
        <Link href={'/'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <Home className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'Home'} />
            </ListItem>
          </a>
        </Link>
        <Link href={'/pricing'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <LocalOffer className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'Pricing'} />
            </ListItem>
          </a>
        </Link>
        <Link href={'/signup'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <Check className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'Get Started'} />
            </ListItem>
          </a>
        </Link>
        <Link href={'/register'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <EmojiPeople className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'Become A Creator'} />
            </ListItem>
          </a>
        </Link>
        {/* <Link href={'/contact'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <HeadsetMic className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'Contact Us'} />
            </ListItem>
          </a>
        </Link> 
        <Link href={'/faq'}>
          <a>
            <ListItem button>
              <ListItemIcon>
                <ListAlt className={classes.buttonIcon} />
              </ListItemIcon>
              <ListItemText primary={'FAQ'} />
            </ListItem>
          </a>
        </Link> 
        */}
        {user && Object.keys(user).length === 0 ? (
          <>
            {/* <Link href="/signup">
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
            </Link> */}
          </>
        ) : (
          <>
            <ListItem button onClick={() => setAccountOpen(!accountOpen)}>
              <ListItemIcon>
                <PersonOutline />
              </ListItemIcon>
              <ListItemText primary={'Account'} />
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
                        <Work />
                      </ListItemIcon>
                      <ListItemText primary={'Jobs'} />
                    </ListItem>
                  </a>
                </Link>
                <Link href="/account/general">
                  <a>
                    <ListItem button>
                      <ListItemIcon>
                        <Settings />
                      </ListItemIcon>
                      <ListItemText primary={'Settings'} />
                    </ListItem>
                  </a>
                </Link>

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
