import React, { useState } from 'react'
import clsx from 'clsx'
import {
  makeStyles,
  Grid,
  Typography,
  Dialog,
  DialogContent,
  Slide,
  IconButton,
  Button,
} from '@material-ui/core'
import { DescriptionListIcon, CardJobMinimal } from 'components/organisms'
import CloseIcon from '@material-ui/icons/Close'
import Image from 'next/image'
import { SectionHeader } from 'components/molecules'
import Link from 'next/link'

const useStyles = makeStyles(theme => ({
  root: {},
  descriptionListIcon: {
    marginBottom: theme.spacing(2),
  },
  marginTop: {
    [theme.breakpoints.up('md')]: {
      marginTop: theme.spacing(5),
    },
    justifyContent: 'center',
  },
  dialog: {
    '& MuiDialogContent-root': {
      marginBottom: 20,
    },
  },
  headerContainer: {
    backgroundColor: theme.palette.secondary.main,
    display: 'flex',
    padding: 16,
  },
  title: {
    margin: 'auto',
    fontSize: '24px',
    color: 'white',
  },
  answer: {
    padding: '10px 0px',
  },
  answerContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  imageContainer: {
    position: 'relative',
    minWidth: '100%',
    minHeight: 500,
    margin: '10px 0px',
    borderRadius: 8,
    [theme.breakpoints.down('sm')]: {
      minWidth: '100%',
      minHeight: 250,
    },
  },
  image: {
    boxShadow: '0 5px 15px 0 rgb(30 76 165 / 20%)',
    borderRadius: 8,
  },
  close: {
    color: 'white',
  },
  contactContainer: {
    marginTop: 60,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    marginTop: 20,
  },
}))

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />
})

const Faq = props => {
  const { products, className, ...rest } = props
  const classes = useStyles()
  const [question, setQuestion] = useState(false)

  const data = {
    general: {
      title: '',
      subtitle: '',
      icon: 'fas fa-user',
      items: [
        {
          title: 'How does it work?',
          answer: '',
          screenshot: '',
        },
        {
          title: 'How long does it take to get a video?',
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: 'Can I choose/see who is going to review my products?',
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: 'Do you have creators 30+ years old?',
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: 'How much does it cost?',
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: 'Do creators post videos on their social media?',
          answer: '',
          screenshot: '',
          cta: '',
        },
      ],
    },
    checkout: {
      title: '',
      subtitle: '',
      icon: 'fas fa-dollar-sign',
      items: [
        {
          title: 'Do creators post videos on their social media?',
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: `I've never done UGC content professionally before, is this a problem?`,
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: `What is the process of joining as a creator? Is there any interview process?`,
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: `How much money could I make?`,
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: 'Why should I choose your platform over another?',
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: `How do I accept payment?`,
          answer: '',
          screenshot: '',
          cta: '',
        },
        {
          title: `Do you have rules around working with other companies?`,
          answer: '',
          screenshot: '',
          cta: '',
        },
      ],
    },
  }
  return (
    <div className={clsx(classes.root, className)} {...rest}>
      <Dialog
        // fullScreen
        className={classes.dialog}
        open={question ? true : false}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setQuestion(null)}
        aria-labelledby="alert-dialog-slide-title"
        aria-describedby="alert-dialog-slide-description"
      >
        <div className={classes.headerContainer}>
          <IconButton
            edge="start"
            color="inherit"
            onClick={() => setQuestion(null)}
            aria-label="close"
          >
            <CloseIcon className={classes.close} />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {question?.title}
          </Typography>
        </div>

        <DialogContent className={classes.answerContainer}>
          <Typography className={classes.answer}>{question?.answer}</Typography>
          <div>
            {question?.cta && (
              <Link href={question?.cta}>
                <a>
                  <Button size="large" variant="contained" color="primary">
                    Go
                  </Button>
                </a>
              </Link>
            )}
          </div>

          <div className={classes.imageContainer}>
            {question?.screenshot && (
              <Image
                className={classes.image}
                src={question?.screenshot}
                loading="lazy"
                layout="fill"
                objectFit="contain"
              />
            )}
          </div>
        </DialogContent>
      </Dialog>
      <SectionHeader
        title={'FAQ'}
        align="left"
        data-aos="fade-up"
        titleProps={{
          className: clsx(classes.title),
          variant: 'h3',
        }}
      />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            title={'Business Owners'}
            subtitle={'Subtitle'}
            align="center"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            {data.general.items.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <CardJobMinimal
                  onClick={() => setQuestion(item)}
                  title={item.title}
                  subtitle={''}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={6}>
          <DescriptionListIcon
            title={'Content Creators'}
            subtitle={'Subtitle'}
            align="center"
            className={classes.descriptionListIcon}
            data-aos="fade-up"
          />
          <Grid container spacing={2}>
            {data.checkout.items.map((item, index) => (
              <Grid item xs={12} key={index} data-aos="fade-up">
                <CardJobMinimal
                  onClick={() => setQuestion(item)}
                  title={item.title}
                  subtitle={''}
                />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.contactContainer}>
        <Typography variant="h5">Still have questions?</Typography>
        <Link href={'/contact'}>
          <a>
            <Button className={classes.input} size="large" variant="contained" color="primary">
              Contact Us
            </Button>
          </a>
        </Link>
      </div>
    </div>
  )
}

export default Faq
