import { APP_URL } from '../../redux/api'

// log the pageview with their URL
export const pageview = url => {
  window.gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {
    page_path: url,
  })
}

export const lead = (options = {}) => {
  if (APP_URL != 'https://www.creatorpod.app/') return
  if (window.fbq) window.fbq('track', 'Lead', options)
  if (window.ttq) window.ttq.track('ClickButton', options)
  if (window.gtag) window.gtag('event', 'generate_lead', options)
}

export const completeRegistration = (options = {}) => {
  if (APP_URL != 'https://www.creatorpod.app/') return
  if (window.fbq) window.fbq('track', 'CompleteRegistration', options)
  if (window.ttq) window.ttq.track('CompleteRegistration', options)
  if (window.gtag) window.gtag('event', 'sign_up', options)
}

export const viewContent = (options = {}) => {
  if (APP_URL != 'https://www.creatorpod.app/') return
  if (window.fbq) window.fbq('track', 'ViewContent', options)
  if (window.ttq) window.ttq.track('ViewContent', options)
  if (window.gtag) window.gtag('event', 'view_item', options)
}

// export const addToCart = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq)
//     window.fbq('track', 'AddToCart', {
//       content_id: options.content_id,
//       content_type: 'product',
//       currency: 'CAD',
//       value: options.value,
//     })
//   if (window.ttq)
//     window.ttq.track('AddToCart', {
//       content_id: options.content_id,
//       content_name: options.content_name,
//     })
//   if (window.gtag) window.gtag('event', 'add_to_cart', options)
// }

// export const search = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'Search', { search: options.content_id })
//   if (window.ttq) window.ttq.track('Search', { content_id: options.content_id })
//   if (window.gtag) window.gtag('event', 'search', options)
// }

// export const initiateCheckout = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'InitiateCheckout', options)
//   if (window.ttq) window.ttq.track('InitiateCheckout', { content_id: null })
//   if (window.gtag) window.gtag('event', 'begin_checkout', options)
// }

// export const addPaymentInfo = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'AddPaymentInfo', options)
//   if (window.ttq) window.ttq.track('AddPaymentInfo', { content_id: null })
//   if (window.gtag) window.gtag('event', 'add_payment_info', options)
// }

// export const completePayment = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'CompletePayment', options)
//   if (window.ttq) window.ttq.track('CompletePayment', { content_id: null })
//   if (window.gtag) window.gtag('event', 'purchase', options)
// }

// export const viewSubscribe = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'FindLocation', options)
//   if (window.ttq) window.ttq.track('Download', { content_id: null })
//   if (window.gtag) window.gtag('event', 'view_promotion', options)
// }

// export const subscribe = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'Subscribe', options)
//   if (window.ttq) window.ttq.track('Subscribe', { content_id: null })
//   if (window.gtag) window.gtag('event', 'sign_up', options)
// }

// export const addToWishlist = (options = {}) => {
//   if (APP_URL != 'https://www.creatorpod.app/') return
//   if (window.fbq) window.fbq('track', 'AddToWishlist', options)
//   if (window.ttq) window.ttq.track('AddToWishlist', { content_id: null })
//   if (window.gtag) window.gtag('event', 'add_to_wishlist', options)
// }
