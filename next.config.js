/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    NEXT_MAILCHIMP_INSTANCE: process.env.NEXT_MAILCHIMP_INSTANCE,
    NEXT_MAILCHIMP_API_KEY: process.env.NEXT_MAILCHIMP_API_KEY,
    NEXT_MAILCHIMP_LIST_ID: process.env.NEXT_MAILCHIMP_LIST_ID
  }
}
